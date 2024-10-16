#!/bin/bash

for file in ./dist/*; do
    cmd.exe /C "adb push $file /storage/emulated/0/adb "
done


# cmd.exe /C "adb push ./src/app.js /storage/emulated/0/adb "