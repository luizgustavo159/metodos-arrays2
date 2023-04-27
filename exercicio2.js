const arquivos = [
    'teste.txt',
    'foto.png',
    'contrato.doc',
    'instalador.exe',
    'virus.bat'
]
function detectarVirus(arquivos) {
    const virus = arquivos.some((arquivo) => {
        const existevirus = arquivo.indexOf('.bat');
        return existevirus != -1;
    });
    if(virus){
        console.log('virus detectado');
    }else{
        console.log('nenhum virus detectado');
    }
}

detectarVirus(arquivos);