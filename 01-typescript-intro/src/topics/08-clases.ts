export class persona{
    public nombre: string;
    private ciudad: string;

    constructor () {
    this.nombre = 'Joel';
    this.ciudad = 'santo domingo';
    }
}

const ironman = new persona()

console.log(ironman.nombre)