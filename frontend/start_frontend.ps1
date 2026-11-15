# Start Frontend Development Server
Set-Location $PSScriptRoot

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    if (Test-Path "C:\Users\hp\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe") {
        $env:PATH = "C:\Users\hp\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;$env:PATH"
    }
}

Write-Host "Starting Vite Development Server..." -ForegroundColor Cyan
& npx vite --host
