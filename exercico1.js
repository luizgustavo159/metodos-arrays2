let usuarios = [
    {nome: 'luiz', idade: 24},
    {nome: 'joao', idade: 23},
    {nome: 'maria', idade: 18},
    {nome: 'ana', idade: 30},
    {nome: 'rodrigo', idade: 19}
];

function fiscalizar(usuario) {
    const resultado = usuario.every((pessoa) => {
        return pessoa.idade > 17;
    });
    if(resultado){
        console.log('festa liberada');
    }else{
        console.log('possui menor de idade');
    }
};

fiscalizar(usuarios);