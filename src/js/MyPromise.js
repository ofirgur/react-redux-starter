const states = {
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED'
};

class MyPromise {
    constructor(executor) {
        this.$state = states.PENDING;
        this.$value = undefined;
        this.$chained = []; // [{ onFulfilled: value => ..., onRejected: error => ... }, ...]

        const resolve = res => {
            //console.log('resolve: res =', res);
            
            if(res instanceof MyPromise) {
                return res.then(resolve, reject);
            }

            this.$state = states.FULFILLED;
            this.$value = res;

            //console.log('this: $value =', this.$value);
            //console.log('this: $state =', this.$state);

            for(let { onFulfilled } of this.$chained) {
                onFulfilled(res);
            }

            return res;
        }

        const reject = err => {
            //console.log('reject error: ', err);

            this.$state = states.REJECTED;
            this.$value = err;

            for(let { onRejected } of this.$chained) {
                onRejected(err);
            }
        } 

        try {
            executor(resolve, reject);
        }
        catch(err) {
            reject(err);
        }
    }

    static resolve( res) {
        return new MyPromise(resolve => resolve(res));
    }

    static reject(err) {
        return new MyPromise((_, reject) => reject(err));
    }

    static all(values) {
        return values.reduce((accumulator, value) => {
            return accumulator.then(results => {
                return MyPromise.resolve(value).then(result => {
                    return [...results, result];
                });
            });
        }, MyPromise.resolve([]));
    }

    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            const _onFulfilled = res => {
                //console.log('_onFulfilled: res = ', res)
                //console.log('calling to resolve with res = ', onFulfilled(res))
                try{
                    resolve(onFulfilled(res));
                }catch(err) {
                    reject(err);
                }
            }
    
            const _onRejected = err => {
                try{
                    reject(onRejected(err));
                }catch(_err) {
                    reject(_err);
                }
            }

            if(this.$state === states.FULFILLED){
                //console.log('then: this.$state = FULFILLED')
                _onFulfilled(this.$value);
            } else if(this.$state === states.REJECTED){
                //console.log('then: this.$state = REJECTED')
                _onRejected(this.$value);
            } else {
                //console.log('then: this.$state = PENDING')
                this.$chained.push({ onFulfilled: _onFulfilled, onRejected: _onRejected });
            }
        });
    }

    catch(onRejected) {
        return new MyPromise((_, reject) => {
            const _onRejected = err => {
                try{
                    reject(onRejected(err));
                } catch(_err) {
                    reject(_err);
                }
            }

            if(this.$state === states.FULFILLED || this.$state === states.REJECTED){
                _onRejected(this.$value);
            } else {
                this.$chained.push({ onRejected: _onRejected });
            }
        })
    }
}

export default MyPromise;

