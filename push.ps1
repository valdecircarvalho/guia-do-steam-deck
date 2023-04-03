Write-Host "Publicando site..."
git pull
Write-Host "Update arquivos no repo"
git add . && git commit -m "surface-files" && git commit && git push
Write-host "Build do site..."
hugo --cleanDestinationDir --gc --minify
Write-host "Update arquivos estáticos no repo"
git pull
git add . && git commit -m "surface-files" && git commit && git push
Write-Host "Finalizando publicação."