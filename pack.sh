#!/bin/sh
echo "- Removing the current function.zip file..."
rm -f function.zip
cd function
echo "- Installing dependencies..."
npm i &>/dev/null
echo "- Compressing function files into function.zip..."
zip -q -r ../function.zip index.js node_modules package.json
cd ../
echo "DONE"
