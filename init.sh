#!/bin/sh
./generate_keys.sh

cd server
npm install 
cp ./config.example.js ./config.js

cd ../app
npm install

cd ..