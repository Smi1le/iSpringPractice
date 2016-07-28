@echo off

pushd %~dp0out
rem Generate player.js
call ../../../scripts/build_debug.bat ^
	../../../ ^
	--root=. ^
	--input=../main.js ^
	--output_file=player.js

popd