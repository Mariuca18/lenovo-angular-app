let hi :string ='Hello';
console.log(hi);

enum StatusCodes{
    NotFound=404,
    Success=200,
    BadRequest= 400,
}
let nf:StatusCodes=StatusCodes.NotFound

const variable='TypeScript';
const message= 'Hellos,${variable}!';


export interface User{
    name:string;
    age?:number;
}
function getUser():{name: string; age?:number}{
return {name:'John',age: 30};

}
