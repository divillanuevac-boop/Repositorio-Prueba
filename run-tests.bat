@echo off
echo ==============================
echo EJECUTANDO PRUEBAS UNITARIAS
echo ==============================

call npx jest --verbose --coverage --coverageReporters=text --coverageReporters=lcov
set RESULTADO=%ERRORLEVEL%

echo.
echo ==============================
echo RESUMEN
echo ==============================

if %RESULTADO% neq 0 (
    echo Hay pruebas que FALLAN - ver detalle arriba: lineas FAIL.
) else (
    echo Todas las pruebas pasaron.
)

echo Cobertura: ver tabla - %% Stmts, %% Branch, %% Funcs, %% Lines.
echo Codigo sin cubrir: columna Uncovered Line # de la tabla.

exit /b %RESULTADO%
