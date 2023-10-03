import './Car'

const Component = (target: any) => {
    console.log(target);
};

@Component
class Car {}
//The above is also known as a plain decorator
//decorators are just a function
//It gets called when the class gets executed

// @Component()
// class Car {}
//This is a decorator function

