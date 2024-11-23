// forzar que sean solo string
const skill:  string[] =['correr', 'volar', 'caminar']

console.log(skill)


interface caracter {
    name: string;
    hp: number;
    skill: string[];
    pais?: string; //opcional con el '?'
}

const personaje: caracter = {
    name: 'Joel',
    hp: 99,
    skill: ['supervelocidad', 'fuego', 'caminar'],
}

personaje.pais= 'RD';

console.table(personaje);