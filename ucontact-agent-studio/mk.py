import json, subprocess, sys, os
d=os.path.dirname(os.path.abspath(__file__))+'/'   # everything resolves next to this file
# 1. compile the JSX part only (base.js is already-compiled recovered source)
jsx=open(d+'build/parts.jsx',encoding='utf-8').read()
babel=open(d+'babel.js',encoding='utf-8').read()
comp=babel+"\nvar SRC="+json.dumps(jsx)+""";
ObjC.import('Foundation');
var out = Babel.transform(SRC,{presets:['react'], compact:false}).code;
$.NSString.alloc.initWithUTF8String(out).writeToFileAtomicallyEncodingError('"""+d+"""build/parts.js', true, $.NSUTF8StringEncoding, null);
'compiled ' + out.length + ' bytes';"""
open(d+'compile.js','w',encoding='utf-8').write(comp)
r=subprocess.run(['osascript','-l','JavaScript',d+'compile.js'],capture_output=True,text=True)
print(r.stdout.strip() or r.stderr.strip())
if r.returncode: sys.exit(1)

# 2. one script, one lexical scope: data -> base -> new components -> boot
app = '\n'.join(open(d+'build/'+f,encoding='utf-8').read()
                for f in ('i18n.js','data.js','base.js','parts.js','boot.js'))
open(d+'build/app.js','w',encoding='utf-8').write(app)

# 3. refresh the test harnesses from the same app
shim = """var g=(function(){return this})();
g.self=g; g.window=g; g.globalThis=g;
g.setTimeout=function(){return 0}; g.clearTimeout=function(){};
g.performance={now:function(){return 0}}; g.navigator={userAgent:'jsc'};
g.document={getElementById:function(){return null},addEventListener:function(){},removeEventListener:function(){},querySelector:function(){return null}};
g.TextEncoder=function(){this.encode=function(s){var a=[];for(var i=0;i<s.length;i++)a.push(s.charCodeAt(i)&255);return a}};
g.MessageChannel=function(){this.port1={};this.port2={postMessage:function(){}}};
g.console=g.console||{log:function(){},warn:function(){},error:function(){}};
"""
body=app.replace(open(d+'build/boot.js',encoding='utf-8').read(),'')
libs=open(d+'react.js',encoding='utf-8').read()+"\n"+open(d+'rdsl.js',encoding='utf-8').read()+"\n"
head=shim+libs+body
# modals.js needs to reach state-gated UI (modals, popovers). The app aliases useState at load,
# so the queue that feeds forced initial values has to be patched in before the app body runs.
patch = """var __q=null, __realUS=React.useState;
React.useState=function(init){ if(__q&&__q.length){ return __realUS(__q.shift()); } return __realUS(init); };
function __arm(seq){ __q=seq.slice(); }
function __off(){ __q=null; }
"""
heads={'assert':head, 'smoke':head, 'modals':shim+libs+patch+body}
for name,marker in (('assert','\nvar out=[];'),('smoke','\nvar results = [];'),('modals','\nvar out=[];')):
    f=d+name+'.js'
    if os.path.exists(f):
        old=open(f,encoding='utf-8').read()
        if marker in old:
            open(f,'w',encoding='utf-8').write(heads[name]+marker+old.split(marker,1)[1])

# 4. assemble
html=(open(d+'build/head.html',encoding='utf-8').read()
  +'\n<div id="root"></div>\n<script>\n'+open(d+'react.js',encoding='utf-8').read()
  +'\n</script>\n<script>\n'+open(d+'react-dom.js',encoding='utf-8').read()
  +'\n</script>\n<script>\n'+app+'\n</script>\n')
out=d+'ucontact-agent-studio.html'
open(out,'w',encoding='utf-8').write(html)
print('assembled %s (%.0f KB)' % (out, len(html.encode())/1024))
