@echo off
rem Deletes the files this update renamed (each was re-measured and saved under its corrected figure),
rem and the wrong copy that sat in the undersized 99.253 slot. Run from the repository folder, then commit.
rem This file deletes itself when it has finished.
cd /d "%~dp0"
del /q "Approximations\01 Squaring The Circle\GeoGebra Files\Squared Circle Over\99.117.ggb"
del /q "Approximations\01 Squaring The Circle\GeoGebra Files\Squared Circle Over\99.117.md"
del /q "Approximations\01 Squaring The Circle\GeoGebra Files\Squared Circle Over\99.139.ggb"
del /q "Approximations\01 Squaring The Circle\GeoGebra Files\Squared Circle Over\99.139.md"
del /q "Approximations\01 Squaring The Circle\GeoGebra Files\Squared Circle Over\99.253.ggb"
del /q "Approximations\01 Squaring The Circle\GeoGebra Files\Squared Circle Over\99.253.md"
del /q "Approximations\01 Squaring The Circle\GeoGebra Files\Squared Circle Over\99.563.ggb"
del /q "Approximations\01 Squaring The Circle\GeoGebra Files\Squared Circle Over\99.563.md"
del /q "Approximations\01 Squaring The Circle\GeoGebra Files\Squared Circle Over\99.703.ggb"
del /q "Approximations\01 Squaring The Circle\GeoGebra Files\Squared Circle Over\99.703.md"
del /q "Approximations\01 Squaring The Circle\GeoGebra Files\Squared Circle Over\99.816.ggb"
del /q "Approximations\01 Squaring The Circle\GeoGebra Files\Squared Circle Over\99.816.md"
del /q "Approximations\01 Squaring The Circle\GeoGebra Files\Squared Circle Under\99.929.ggb"
del /q "Approximations\01 Squaring The Circle\GeoGebra Files\Squared Circle Under\99.929.md"
del /q "Approximations\01 Squaring The Circle\GeoGebra Files\Squared Circle Under\99.644.ggb"
del /q "Approximations\01 Squaring The Circle\GeoGebra Files\Squared Circle Under\99.644.md"
del /q "Approximations\01 Squaring The Circle\GeoGebra Files\Squared Circle Under\99.253.ggb"
del /q "Approximations\01 Squaring The Circle\GeoGebra Files\Squared Circle Under\99.164.ggb"
del /q "Approximations\01 Squaring The Circle\GeoGebra Files\Squared Circle Under\99.164.md"
del /q "Approximations\01 Squaring The Circle\GeoGebra Files\Squared Circle Under\99.009.ggb"
del /q "Approximations\01 Squaring The Circle\GeoGebra Files\Squared Circle Under\99.009.md"
del /q "Approximations\02 Trisecting An Angle\GeoGebra Files\Under\TAA-~99.658.ggb"
del /q "Approximations\02 Trisecting An Angle\GeoGebra Files\Under\TAA-~99.658.md"
del /q "Approximations\02 Trisecting An Angle\GeoGebra Files\Under\TAA-~95.538.ggb"
del /q "Approximations\02 Trisecting An Angle\GeoGebra Files\Under\TAA-~95.538.md"
del /q "Approximations\03 Doubling The Cube\GeoGebra Files\Over\DTC-99.227.ggb"
del /q "Approximations\03 Doubling The Cube\GeoGebra Files\Over\DTC-99.227.md"
del /q "Approximations\03 Doubling The Cube\GeoGebra Files\Over\DTC-99.487.ggb"
del /q "Approximations\03 Doubling The Cube\GeoGebra Files\Over\DTC-99.487.md"
del /q "Approximations\04 Rectifying The Circle\GeoGebra Files\Under\RTC-99.374.ggb"
del /q "Approximations\04 Rectifying The Circle\GeoGebra Files\Under\RTC-99.374.md"
rd "Approximations\02 Trisecting An Angle\GeoGebra Files\Under" 2>nul
rd "Approximations\03 Doubling The Cube\GeoGebra Files\Over" 2>nul
echo Done. The old file names are deleted.
pause
(goto) 2>nul & del "%~f0"
