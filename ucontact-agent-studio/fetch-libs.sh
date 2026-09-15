#!/bin/sh
# The four libraries mk.py and the tests need. Not committed: they are large and unchanged.
# react/react-dom are inlined into the built HTML; babel compiles parts.jsx; rdsl renders the
# tests. Run this once after cloning, then `python3 mk.py`.
set -e
cd "$(dirname "$0")"
curl -sSfo babel.js      https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.5/babel.min.js
curl -sSfo react.js      https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js
curl -sSfo react-dom.js  https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js
curl -sSfo rdsl.js       https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom-server-legacy.browser.production.min.js
echo "fetched: babel.js react.js react-dom.js rdsl.js"
