//****Generic Classes****
//Use them if we have a lot of classes with few property changes
//Normally inside the <> most people use T (type). Doesn't really matter what you put in there, but something short is the convention
class ValueHolder<T> {
    value: T;
}


//***Generic Methods****/
const numberWrapper = (value: number): number[] => {
    return [value]
};

const valueWrapper = <T>(value: T): T[] => {
    return [value];
}

console.log(valueWrapper<number>(10));
console.log(valueWrapper<boolean>(false))
console.log(valueWrapper<string>('false'))
