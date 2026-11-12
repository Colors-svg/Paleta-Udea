@echo off
title Sincronizar Paleta UdeA con GitHub
cd /d "%~dp0"
echo ========================================================
echo  Subiendo Sistema Cromatico UdeA a GitHub...
echo ========================================================
git push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo [EXITO] Los archivos se subieron correctamente a GitHub!
) else (
    echo [AVISO] Si es la primera vez, se abrira una ventana en tu navegador para autorizar GitHub.
)
echo ========================================================
pause
