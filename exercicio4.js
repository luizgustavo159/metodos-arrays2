const professores = [
    {nome: 'Guido', stack: 'backend'},
    {nome: 'Vidal', stack: 'backend'},
    {nome: 'Dani', stack: 'frontend'},
    {nome: 'Diego', stack: 'frontend'},
    {nome: 'Léo', stack: 'backend'},
    {nome: 'Ruli', stack: 'frontend'},
];

const professoresBack = professores.filter((professor) => {
    return (professor.stack === 'backend');
});

console.log(professoresBack);

const professoresFront = professores.filter((professor) => {
    return (professor.stack === 'frontend');
});

console.log(professoresFront);