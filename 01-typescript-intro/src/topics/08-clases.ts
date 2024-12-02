export class persona{
    //public nombre: string;
    //private ciudad: string;

    constructor (public nombre: string, 
        private ciudad: string) 
        {}
}
const ironman = new persona('joel', 'new york')

console.log(ironman)