@echo off

rem Generate player.js
call %~dp0../../scripts/build.bat ^
	--root=%~dp0../ ^
	--input=%~dp0main.js ^
	--output_file=%~dp0out/player.js
if errorlevel 1 exit 1