// 1. What the function will print to the screen?
export const foo1 = {
    a: '11',
    b: '22',
    print: function() {
      console.log('foo1.print():' + this.a);
      
      const c = () => {
        try {
            console.log('foo1 c:' + this.b);
        } catch {
            console.log('this is global, b is undefined');
        }
      };
  
      c();
    } 
};
  
foo1.print();
// this.a: 11
// this.b: 22
 
  // 2. What the function will print to the screen?
  // 3. How can we fix it
export const foo2 = {
      a: '11',
      b: '22',
      print: function() {
        console.log('foo2.print()::' + this.a);
        
        function c() {
            try {
                console.log('foo2 c:' + this.b);
            } catch {
                console.log('this is global, b is undefined');
            }
        }
    
        c(); 
      } 
};
  
foo2.print();
// this.a: 11
// this.b: 22

// 4. What the function will print to the screen?
(function foo3() {
    try {
        console.log('foo3 d: ' + d);
    } catch {
        console.log('d is not defined');
    } 
})(); 
// d is not defined

// 5. What the function will print to the screen?
(function foo4() {
    try {
        console.log('foo4 e: ' + e);
        var e;
    } catch {
        console.log('e is not defined');
    } 
})();
// foo4 e: undefined
  
// 6. What the function will print to the screen?
(function foo5() {
    try {
        console.log('foo5 f: ' + f);
        let f;
    } catch {
        console.log('f is not defined');
    }   
})(); 
  
/** *** *** *** *** *** */

// 7. What the function will print to the screen?
// 8. How can you fix it? 
function buildFunction(n) {
    var arr = [];

    for(var i = 0; i < n; i++) {
        arr.push(function() { 
            console.log(i); 
        });

        /**
        (function(j) {
            arr.push(function() { 
                console.log(j); 
            });
        })(i);

        or es6 let i
        */
    }

    return arr;
}

var n = 10;
var fs = buildFunction(n);
for(var i = 0; i < n; i++) {
    fs[i]();
}
  
const obj = {
    x: 3,
    func1: function() {
        try {
            console.log(this.x);
        } catch {
            console.log('this is undefined');
        }
    },
    func2: function(){
        console.log('this: ', this);
        (function func3() {
            try {
                console.log(this.x);
            } catch {
                console.log('this is undefined: ', this);
            }          
        })();
    },
    func4: function(){
        (() => {
            try {
                console.log(this.x);
            } catch {
                console.log('this is undefined');
            }          
        })();
    }
};

obj.func1.call(obj); // 3
obj.func2.call(obj); // undefined
obj.func4.call(obj); // 3
  
  
  