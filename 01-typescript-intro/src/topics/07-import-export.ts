import {Product, taxCalculation} from './06-desestructuracion-de-funciones';

const carroDeCompra: Product[] =[
    {
    description: 'Nokia A1',
    price: 200
    },
    {
        description: 'phone6s plus',
        price: 500
    }
];

//tax = 0.20
const [total, tax] = taxCalculation({
    products: carroDeCompra,
    tax: 0.15
});

console.log('total', total);
console.log('tax', tax);

