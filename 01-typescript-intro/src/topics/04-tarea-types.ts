
interface SuperHero {
    name: string;
    age: number;
    address: {
        Street: string;
        country: string;
        city: string;
    };
    showAddress: () => string;
}

/*otro manera

interface Address {
    Street: string;
    country: string;
    city: string;
}; // y solo pongo el nombre del interfacce en el valor address (arriba)*/


const superHeroe: SuperHero   = {
    name: 'Spiderman',
    age: 30,
    address: {
        Street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );
