@echo off
setlocal
cd /d "%~dp0"

REM If node is not in PATH, add known local node runtime
where node >nul 2>nul
if %errorlevel% neq 0 (
    if exist "C:\Users\hp\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" (
        set "PATH=C:\Users\hp\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;%PATH%"
    )
)

echo Starting Vite React Frontend Development Server on http://localhost:5173...
call npx vite --host
pause
