import React, { useEffect } from 'react';

import { usePromise } from './promises';

const index = () => {
    useEffect(() => { 
        usePromise(true)
        .then(r => r.body)
        .then(r => r.prop)
        .then(r => { console.log('response: ', r); })
        .catch(e => { console.log('Error: ', new Error(e)); })
        .finally(o => { console.log('finally: ', o); });

        var p1 = new Promise((resolve) => {
            setTimeout(() => {
              resolve("foo1");
            }, 3000);
        });

        var p2 = new Promise((resolve) => {
            setTimeout(() => {
                resolve("foo2");
            }, 3000);
        }); 

        var p3 = new Promise((resolve) => {
            setTimeout(() => {
                resolve("foo3");
            }, 3000);
        }); 

        Promise.all([p1, p2, p3]).then(values => { 
            console.log(values); // [3, 1337, "foo"] 
        });   
    }, []);

    return (
        <div>
            Java Script            
        </div>
    );
};

export default index; 