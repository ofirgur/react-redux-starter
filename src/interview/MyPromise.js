// https://thecodebarbarian.com/write-your-own-node-js-promise-library-from-scratch.html

const states = {
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED'
};

class MyPromise {
    // `executor` takes 2 parameters, `resolve()` and `reject()`. The executor
    // function is responsible for calling `resolve()` or `reject()` to say that
    // the async operation succeeded (resolved) or failed (rejected).
    constructor(executor) {
      if (typeof executor !== 'function') {
        throw new Error('Executor must be a function');
      }
    
      // Internal state. `$state` is the state of the promise, and `$chained` is
      // an array of the functions we need to call once this promise is settled.
      this.$state = states.PENDING;
      this.$chained = [];
    
      // Implement `resolve()` and `reject()` for the executor function to use
      const resolve = res => {
        // A promise is considered "settled" when it is no longer
        // pending, that is, when either `resolve()` or `reject()`
        // was called once. Calling `resolve()` or `reject()` twice
        // or calling `reject()` after `resolve()` was already called
        // are no-ops.
        if (this.$state !== states.PENDING) {
          return;
        }
      
        // If `res` is a "thenable", lock in this promise to match the
        // resolved or rejected state of the thenable.
        //const then = res != null ? res.then : null;
        //if (typeof then === 'function') {
        if(res instanceof MyPromise) {
          // In this case, the promise is "resolved", but still in the 'PENDING'
          // state. This is what the ES6 spec means when it says "A resolved promise
          // may be pending, fulfilled or rejected" in
          // http://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects
          return res.then(resolve, reject);
        }
      
        this.$state = states.FULFILLED;
        this.$value = res;
        // If somebody called `.then()` while this promise was pending, need
        // to call their `onFulfilled()` function
        for (const { onFulfilled } of this.$chained) {
          onFulfilled(res);
        }
      
        return res;
      };

      const reject = err => {
        if (this.$state !== states.PENDING) {
          return;
        }
        this.$state = states.REJECTED;
        this.$value = err;
        for (const { onRejected } of this.$chained) {
          onRejected(err);
        }
      };
    
      // Call the executor function with `resolve()` and `reject()` as in the spec.
      try {
        // If the executor function throws a sync exception, we consider that
        // a rejection. Keep in mind that, since `resolve()` or `reject()` can
        // only be called once, a function that synchronously calls `resolve()`
        // and then throws will lead to a fulfilled promise and a swallowed error
        executor(resolve, reject);
      } catch (err) {
        reject(err);
      }
    }
  
    // `onFulfilled` is called if the promise is fulfilled, and `onRejected`
    // if the promise is rejected. For now, you can think of 'fulfilled' and
    // 'resolved' as the same thing.
    then(onFulfilled, onRejected) {
      return new MyPromise((resolve, reject) => {
        // Ensure that errors in `onFulfilled()` and `onRejected()` reject the
        // returned promise, otherwise they'll crash the process. Also, ensure
        // that the promise
        const _onFulfilled = res => {
          try {
            // If `onFulfilled()` returns a promise, trust `resolve()` to handle
            // it correctly.
            resolve(onFulfilled(res));
          } catch (err) {
            reject(err);
          }
        };

        const _onRejected = err => {
          try {
            reject(onRejected(err));
          } catch (_err) {
            reject(_err);
          }
        };
        
        if (this.$state === states.FULFILLED) {
          _onFulfilled(this.$value);
        } else if (this.$state === states.REJECTED) {
          _onRejected(this.$value);
        } else {
          this.$chained.push({ onFulfilled: _onFulfilled, onRejected: _onRejected });
        }
      });
    }
  }

  export default MyPromise;