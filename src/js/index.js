import MyPromise from './MyPromise';

export const executor = (resolve, reject) => {
    console.log('executor resolve(1)');
    setTimeout(resolve, 1000, 1);
}

export const onFulfilled2 = value => {
    console.log('onFulfilled2 value', value);
    return new MyPromise(resolve => {
        setTimeout(resolve, 1000, value * 2)
    });

    //return value * 2;
}

export const onFulfilled3 = value => {
    console.log('onFulfilled3 value', value);
    return new MyPromise(resolve => {
        setTimeout(resolve, 1000, value * 3)
    });

    //throw new Error('Error!!!')
    //return value * 3;
}

MyPromise.resolve('Success').then(value => {
        console.log('MyPromise.resolve value', value);
    });    
    
MyPromise.reject('Failure').catch(err => {
        console.log('MyPromise.reject err', err);
    });  
    
MyPromise.all([
    new MyPromise(resolve => setTimeout(resolve, 500, 'Hello')),
    100,
    MyPromise.resolve('World')
]).then(values => console.log('MyPromise.all values: ', values));

const myPromise = new MyPromise(executor);
myPromise
.then(onFulfilled2)
.then(onFulfilled3)
.then(result => {
    console.log('value: ', result);
    return;
});