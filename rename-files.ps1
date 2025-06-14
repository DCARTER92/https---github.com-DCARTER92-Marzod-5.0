Get-ChildItem -Recurse -Path "." -Include "*.txt" | ForEach-Object {
    $newName = $_.FullName -replace '\.txt$', '.md'
    Write-Host "Renaming $($_.FullName) to $newName"
    Move-Item -Path $_.FullName -Destination $newName -Force
}