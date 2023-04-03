# Capturar a data e hora atual
$dataHora = Get-Date -Format "yyyy-MM-dd_HH:mm:ss"

# Capturar o nome do computador
$nomeComputador = $env:COMPUTERNAME

# Definir a mensagem do commit incluindo a data e hora capturadas
$mensagemCommit = "Publicado em: $dataHora | Computador: $nomeComputador"

Write-Host "Publicando site..."
git pull
Write-Host "Update arquivos no repo"
git add . && git commit -m "$mensagemCommit" && git push
Write-host "Build do site..."
hugo --cleanDestinationDir --gc --minify
Write-host "Update arquivos estáticos no repo"
git pull
git add . && git commit -m "$mensagemCommit" && git push
Write-Host "Finalizando publicação."