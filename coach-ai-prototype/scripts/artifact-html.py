#!/usr/bin/env python3
"""Write the body-only HTML the claude.ai Artifact publisher expects, referencing the Vite build in dist/assets."""
import pathlib, sys
root = pathlib.Path(__file__).resolve().parent.parent
assets = root / 'dist' / 'assets'
js = next(assets.glob('index-*.js')).name
css = next(assets.glob('index-*.css')).name
out = f'''<title>Coach AI</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/{css}">
<div id="root"></div>
<div class="narrow-notice"><div><strong>Coach AI prototype</strong><br>Open this on a desktop screen (at least 1100px wide) to play the scenarios.</div></div>
<script type="module" src="assets/{js}"></script>
'''
pathlib.Path(sys.argv[1]).write_text(out)
print(out)
