#!/bin/bash
# Double-click to open the prototype. Needs no Node: serves the prebuilt dist/ with macOS' python3.
cd "$(dirname "$0")/dist" || exit 1
PORT=5180
(sleep 1; open "http://localhost:$PORT/") &
echo "Coach AI prototype running at http://localhost:$PORT/  — keep this window open, press Ctrl+C to stop."
python3 -m http.server "$PORT"
