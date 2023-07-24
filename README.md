# test-type

Midudev project test typescript #1

##Inferencia
##Transpilado o compilado
##Escribir menos tipos posibles
##Types
#Never
#Objetos typados
#Type aliases & optional proeprties 
#Optional changing ? 
#Read only 
#Union types template (${string}-${string})
#Union types |
#Intersection &
#TYpe indexing HeroProperties['address']
#Arrays
#Type functions from returnType<typeof>
#TUPLAS Gameboard con xyo

evitar usar Function porque es el any de las functions
const sayHiFromFn = (fn: (name:string)=>void)=>{
    fn('Mike');
}

const sayHi = (name: string)=>{
    console.log(`Hola ${name}`)
}

sayHiFromFn(sayHi);

#inferencia

La inferencia de tipos es la capacidad de typecript para poder decirnos los errores
que tenemos en la declaración y cambio de nuestra variable
decirnos su forma del objecto

#trasnpilado 
significa que typescript no es compilado sino que se trasnpila a 
javascript para poder ser compilado y ejecutado 

const persona = {
    name: 'Miguel',
    age: 20
};
persona.age = '2'

ESCRIBIR LOS MENOS TIPOS POSIBLES


#TYPES
unknown vs any : any is assignable to anything, unknown can't be assigned to any other types

cuando no es capaz de inferir datos se pone any
 las funciones no pueden inferir, los parametros

no podemos tipar los objetos por separado sino uno entero por ejemplo

MAL : {name:string, age:string}
BIEN : {name,age} : {name:string, age:string}
BIEN: persona:{name:string, age:string}


#typar arrow functions

const sumar = (a:number, b:number):number =>{
    return a+b;
}

const restar: (a:number, b:number)=>number= (a, b) =>{
    return a-b;
}


#Never
function throwError(message:String): never{
    throwError (message);
}

const avengers = ['spidery', 'hulk' ];

avengers.forEach(element => {
    console.log(element.toLocaleUpperCase) 
solo permite hacer algo cuando hace la interpolacion de tipos y detecta que es un string
});

Objetos
let hero= {
    name:'thor',
    age:1500
}

const createHero = (name:string, age:number)=>{
    return {
        name,age
    }
}

const thor = createHero('thor', 1500);


#Type aliases & optional properties ?

type Hero = {
    id?:number
    name:string
    age:number
    isActive?:boolean
}
let hero:Hero= {
    name:'thor',
    age:1500
}

const createHero = (hero:Hero):Hero=>{
    const {name, age}=hero;
    return {
        name,age
    }
}

const thor = createHero({name:'thor', age:1500});

Optional changin

throw.id?.toString()?.toLowerCase()

readonly 
-Es algo similar al freeze no deja mutarlo
type Hero = {
    readonly id?:number
    name:string
    age:number
    isActive?:boolean
}

template union types

type Uuid = `${string}-${string}-${string}`;
const id:Uuid = 'asda-asda-asda-asda-asda';

type HexadecimalColor = `#${string}`;

const color:HexadecimalColor = '0003ff'; MAL
const color:HexadecimalColor = '#0003ff'; BIEN

type Hero = {
    id?:number
    name:string
    age:number
    isActive?:boolean
}

Union types

type HeroId = `${string}-${string}`;
type HeroPowerScale = 'local' | 'planetary';

type Hero = {
    id?:HeroId
    name:string
    age:number
    isActive?:boolean
    powerScale?:HeroPowerScale
}
let hero:Hero= {
    name:'thor',
    age:1500
}
hero.id='sad-123';
hero.powerScale= 'planetary';

Intersection types


type HeroId = `${string}-${string}`;
type HeroPowerScale = 'local' | 'planetary';

type HeroInput = {
    name:string
    age:number
    
}

type HeroComplements = {
    id?:HeroId
    isActive?:boolean
    powerScale?:HeroPowerScale
}
type Hero= HeroInput & HeroComplements;

let hero:Hero= {
    name:'thor',
    age:1500
}

const createHero = (hero:HeroInput):Hero=>{
    const {name, age} = hero
    return {
        name,
        age,
    }
}

Type indexing

type HeroProperties ={
    isActive: boolean;
    address:{
        planet:string,
        city:string,
    }
}

const addresHero: HeroProperties['address'] = {
    city: 'Madrir',
    planet:'Earth'
}     
const addresHero= {
    city: 'Madrir',
    planet:'Earth'
}     
type Address = typeof addresHero;


Type from function return 

function createAddress(){
    return {
        planet: 'Earth',
        city:'Barcelona'
    }
}

type Adress = ReturnType<typeof createAddress>

const address:Adress = {
    planet:'Mars',
    city:'none'
}

ARRAYS
se asigna never si no declaramos el tipoo
// const users:string[] = [];
// const users:Array<string> = [];
const users:(string |number)[] = [];
users.push('Hola')
users.push(2)
users.push(true)

/**
 * ['X', 'Y', 'X']
 * ['X', 'Y', 'X']
 * ['X', 'Y', 'X']
 */

#TUPLAS 

type CellValue = 'X'|''|'O'
type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]

const gameBoard:GameBoard =[
    ['X', '', 'O'],
    ['O', 'X', ''],
    ['O', 'X', 'X'],
] 

type useState = [string, (name:string)=>void]
const [hero, setHero] = useState('thor') //Tupla

# Clase 2

Las tuplas son mutables

## ENUMS 

en js sería así 

```js

const ERROR_TYPES = {
    NOT_FOUND: 'not found',
    UNAUTHORIZED: 'unauthorized',
    FORBIDDEN: 'forbidden',
}
function mostrarMensaje (tipoDeError){
    if(tipoDeError===ERROR_TYPES.NOT_FOUND){
        console.log("no se encontro")
    }
}

```

En typescript podemos usar enums:
```ts
enum ERROR_TYPES {
    NOT_FOUND,
    UNAUTHORIZED,
    FORBIDDEN
}
function mostrarMensaje (tipoDeError:ERROR_TYPES){
    if(tipoDeError===ERROR_TYPES.NOT_FOUND){
        console.log("no se encontro")
    }
}
```

se usa para una coleecion de datos FINITA, SEMANA, etc

### SI no quieren que se compile todo el codigo debemos de poner const enum

o puedes indicarle el tipo si es que ya tienes los tipos de errores
```ts
enum ERROR_TYPES {
    NOT_FOUND='notFound',
    UNAUTHORIZED='unauthorized',
    FORBIDDEN='FORBIDDEN'
}

```

## RAZON para usar const

siempre utilizar const para no generar codigo de mñas, o usar enum solo si es que quieres que se consuma fuera de tu aplicacion como una librearia

## Aserciones de tipos

```ts
const button = document.getElementById('canvas') as HTMLCanvasElement

const button: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement 

//las aserciones son nadamas el as de para signarle 

if(canva instanceof HTMLCanvasElement && canvas!=null){
    const ctx  = canvas.getContext('2d');

}

//funciona en js y ts deduce que canvas en un HTMLCanvasElement 
//Javascript esta ejecutando el codigo de la condicion
```

### fetching de datos en typescript

```ts
const API_URL ="https://api.typescript.org";

const response = await fetch(API_URL);
if(!response.ok){
    throw new Error ('error') 
}

type APIResponse = {
    items:object[]
}
// NO ELEGIR ESTO

const data = await response.json() as APIResponse;

const repos = data.items.map();

```

## cambiar de archivo a modulo de typescript 
solo cambia al extension de ts a mts

### trata siempre de ir a herramientas como QuickType, pegas la response y luego copiar el tipo que te está arrojando

#TYPESCRIPT ZOD
Puedes ocupar el zod para validar los tipos (DETECTA Y VALIDA)



## INTERFACES vs types

Lo de arriba sería la interfaz

Moldear el contrato de nuestro objeto

```ts
interface Heroe{
    id:string
    name:string
    age:number
    saludar:()=> void
}
const hero: Heroe ={
    id:'asd',
    name:'Thor',
    age:12,
    saludar:()=>console.log('Hola')
}
//EJEMPLO 2
interface Product {
    id:number
    nombre:string
    precio:number
}
interface Carrito{
    totalPrice: number
    products: Product[]

}

const carrito: Carrito={
    totalPrice:1000,
    products:[
        {
            id:1,
            nombre:'carrot',
            precio:1000
        }
    ]
}

//No se puede hacer la interseccion, se necesita hacer un extends de herencia

type Carritos = Product&'';
interface Zapatilla extends Product{
    talla: string
}
interface Carrito2{
    total:number
    products: (Product|Zapatilla)[]
}
//en los tipos se puede con los unions e intersecciones
//mientras que en la interface son con extends

```

## Funciones con interfaces hay 2 tipos 

```ts
interface CarritoOps {
    add: (product: Product) => void
    remove: (id:number) => void

}

interface CarritoOps{
    add(product: Product): void
    remove(id:number):void
}

```

### fun fact about the interface
Otra razon del porque son diferentes se pueden escribir y complementar las interfaces mientras te avisa si es que hay algun tipo duplicado, con los tipos no se puede volver a declarar el 
mismo tipo de type, pero con las interfaces si

se extiende tu interface se le llama "Declaration Merging"

## conclusion interfaces vs types

las interfaces solo se pueden usar con tipos de objetos


El tipo es más versatil y se le puede hacer mucha interseccion y union de tipos, mientras que 

TIPOS MAS CERCANOS A UN TIPO PRIMITIVO NO SE PUEDEN HACER CON INTERFACE
https://blog.logrocket.com/types-vs-interfaces-typescript/

## examples

```ts
interface IAdd {
   (num1: number, num2:number): number;
}
type AddFn =  (num1: number, num2:number) => number;
```


## Narrowing

O mejor conocido como type guard es solo la validacion de que tu tipo si corresponde a lo que le estas pasando

Imagina una funcion que puede o recibir un numero o un string
tienes que hacer dentro de esa funcion una validacion con typeof para saber si es uno u otro y así es como se hacer el type guard

## Ejemplo claro de Type Guard

```ts

// HAY QUE EVITAR LOS TYPES GUARDS
interface Mario{
    company:string,
    nombre:string
    saltar:()=>void
}
interface Sonic{
    company:string,
    nombre:string
    correr:()=>void
}

type Personaje = Mario | Sonic

function checkIsSonic(personaje: Personaje): personaje is Sonic{
    return (personaje as Sonic).correr !== undefined
}

function jugar (person:Personaje){
    if(checkIsSonic(person)){
        console.log(person.correr)
        return 'es sonic'
    }
    return person.saltar
}
```


## Never, again

cuando no pasa ningun if o else es un never, en el ejemplo anterior lo sería cuando ni se es sonic ni se es mario (Añadiendo un else if)

## Class private not mutabled

Imagina que tienes una clase Avenger con su constructor y varios parametros como los siguiente


```ts
readonly id:number; //readonly typescript
#power: string; //forma tradicional
private wonBattles:number = 0; //esta es buena y mala, no se transpila a private, solo hace la comprobación de manera estatica
protected and public
```

son maneras en las que podemos hacer que los objetos que crean nuestras clases no sean mutables

`private readonly status`


Puedes usar tambien interfaces para pasar e implementarlos dentro de una clase 

`class Avenger implements Avenger`

## types.d.ts

declarations 
