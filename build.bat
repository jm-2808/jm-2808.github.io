@echo off
setlocal

:: Source folders
set "STYLES=Style"
set "SOURCE=Code"

:: Compile
powershell -NoProfile -Command "$css = Get-ChildItem '%STYLES%\*.css' | ForEach-Object { Get-Content $_ -Raw } | Out-String; $css = [regex]::Replace($css, '/\*.*?\*/', '', 'Singleline'); $imports = [regex]::Matches($css, '@import\s+url\([^)]+\)\s*;') | ForEach-Object { $_.Value }; $css = [regex]::Replace($css, '@import\s+url\([^)]+\)\s*;', ''); $css = [regex]::Replace($css, '\s+', ' '); $css = $css.Trim(); $final = ($imports -join ' ') + ' ' + $css; [System.IO.File]::WriteAllText('style.css', $final)"
powershell -NoProfile -Command "$js = Get-ChildItem '%SOURCE%\*.js' | ForEach-Object { Get-Content $_ -Raw } | Out-String; $js = [regex]::Replace($js, '/\*.*?\*/', '', 'Singleline'); $js = [regex]::Replace($js, '(?m)^\s*//.*$', ''); $js = [regex]::Replace($js, '(?m)^\s*$\r?\n?', ''); $js = $js.Trim(); [System.IO.File]::WriteAllText('code.js', $js)"

echo Build Finished