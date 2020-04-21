function MyPromise(action) {
    this.status = 'pending';
    this.value = undefined;

    this.thenCallbacks = [];
    this.onCatch = undefined;
    this.onFinally = undefined;

    this.then = function(callback) {
        this.thenCallbacks.push(callback);
        return this;
    };

    this.catch = function(callback) {
        this.onCatch = callback;
        return this;
    };

    this.finally = function(callback) {
        this.onFinally = callback;
        return this;
    };

    // Private
    function resolve(value) {
        this.status = 'resolve';
        this.value = value;

        let result = this.value;
        this.thenCallbacks.forEach(cb => {
            result = cb(result);
        });

        if(typeof this.onFinally === 'function') {
            this.onFinally(this.value);
        }
    }

    // Private
    function reject(value) {
        this.status = 'reject';
        this.value = value;

        if(typeof this.onCatch === 'function') {
            this.onCatch(this.value);
        }

        if(typeof this.onFinally === 'function') {
            this.onFinally(this.value);
        }
    }

    // Do the thing
    action(resolve.bind(this), reject.bind(this));
}

export default MyPromise;

export const usePromise = isSuccess => {
    return new MyPromise((resolve, reject) => {

        setTimeout(() => {
            console.log('on timeout');

            if(isSuccess) {
                resolve({ body: { prop: 'kkkk' } });
            }
            else {
                reject('Error!!!');
            }
        }, 2000);
     });
};