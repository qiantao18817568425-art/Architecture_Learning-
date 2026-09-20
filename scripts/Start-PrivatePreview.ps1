$ErrorActionPreference = 'Stop'
$repositoryDirectory = Split-Path -Parent $PSScriptRoot
$siteDirectory = Join-Path $repositoryDirectory 'docs'
$pythonCommand = Get-Command python -ErrorAction SilentlyContinue
if ($pythonCommand) {
    $pythonExecutable = $pythonCommand.Source
} else {
    $pythonExecutable = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe'
    if (-not (Test-Path -LiteralPath $pythonExecutable)) {
        throw 'Python is required. Install Python and run this script again.'
    }
}
Write-Host 'Open http://127.0.0.1:8766/architecture/ in your browser. Press Ctrl+C to stop.'
& $pythonExecutable -m http.server 8766 --bind 127.0.0.1 --directory $siteDirectory
if ($LASTEXITCODE -ne 0) { throw 'Preview server stopped with an error. Check whether port 8766 is already in use.' }
