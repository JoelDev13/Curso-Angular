/*function agregarN (a: number, b: number):number{
    return a + b;
}

const resultado = agregarN(10, 5)

console.log(resultado);

const addNumberArrow = (a: number, b: number):string => {
    return  `${a + b}`;
}

function multiply (PrimerN: number, SegundoN?: number, base: number = 2){
    
    return PrimerN * base;
}

const resultado1:number = agregarN(1,7)
const resultado2:string = addNumberArrow(1,7)
const multiplyR: number = multiply(5)

console.log({resultado1, resultado2, multiplyR})*/

interface character {
    name: string;
    hp: number;
    mostrarHp: () => void

}

const JoelPersonaje = (character: character, curacion:number) =>{
    character.hp += curacion;
}

const Joel = {
    name: 'joel',
    hp: 75,
    mostrarHp (){
        console.log(`punto de vida ${ this.hp }` );
    }
}

JoelPersonaje(Joel, 25)

Joel.mostrarHp()