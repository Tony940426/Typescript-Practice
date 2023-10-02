interface Post {
    title: string;
    daysOld: number;
    published: boolean;
}


console.log('Hi There')

const myName :any = null;
const decimal: number = 10.02;
const yes: boolean = true;

// Type Annotation
// Const name :string ="Stephen";
//Theres string, number, boolean, undefined, null and any

let test = 'Tony';
//Normally production does this as Typescript is smart enough to know what the type is.

let stuff: any;
// This is the default
// ***WHY BOTHER WITH TYPES**?
// Typescript knows about the different properties and meothods that every type has! 
// If we refer to properties or methods that don't exist on a value, it will display an error.

const sentence = 'This is a sentence';

sentence.includes('is');

const add = (a: number, b: number) => {
    return a + b
}

const joinString = (a: string, b: string): string => {
    return a + b
}
//If you state type for the parameters, Typescript defaults to 'any'

const post = {
    title: 'Latest Typscript News',
    daysOld: 10,
    published: true
};

const printPost = (postToPrint: Post) => {
    return `${postToPrint.title}(${postToPrint.daysOld} days old)`
}

console.log(printPost(post))
//It can get really long. So you can use 

//Typescript Interface