interface audioPlayer {
    volumenAudio: number;
    duracionCancion: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    año: number;
}


const AudioPlayer: audioPlayer = {
    volumenAudio: 74,
    duracionCancion: 90,
    cancion: 'sabor a mi',
    detalles: {
        autor: 'Luis Miguel',
        año: 1997,
    }

}


const { cancion,
    /*detalles:{autor}*/} //una forma de desestructurar (autor de detalle)
    = AudioPlayer;
//const { cancion:cancionAmor} = AudioPlayer; (asi se puede cambiar el nombre)


// mejor forma de desesctrucutrar autor de detalles
const {detalles} =AudioPlayer//  me da acceso a todo el objeto detalles
const { autor } = detalles;





console.log('cancion: ', cancion);
console.log('autor: ', autor);



//desestructuracion de areglos

const [, , , avici = 'not found']: string[] = ['dannylux', 'kendrickLamar', 'davidGuetta', 'avici'];

console.log('artista 4: ', avici);