// 1. What the function will print to the screen?
const foo1 = {
    a: '11',
    b: '22',
    print: function() {
      console.log('foo1.print():' + this.a);
      
      c = () => {
         console.log('foo1 c:' + this.b);
      };
  
      c();
    } 
  }
  
  foo1.print();
  
  // 2. What the function will print to the screen?
  // 3. How can we fix it
  const foo2 = {
      a: '11',
      b: '22',
      print: function() {
        console.log('foo2.print()::' + this.a);
        
        function c() {
           console.log('foo2 c:' + this.b);
        }
    
        c(); // c.bind(this)(); // self = this;
      } 
  }
  
  foo2.print();
  
  // 4. What the function will print to the screen?
  (function foo3() {
      console.log('foo3 d: ' + d);
  })(); 
  
  // 5. What the function will print to the screen?
  (function foo4() {
      console.log('foo4 e: ' + e);
      var e;
  })(); 
  
  // 6. What the function will print to the screen?
  (function foo5() {
      console.log('foo5 f: ' + f);
      let f;
  })(); 
  
  /** *** *** *** *** *** */
  
  // 7. What the function will print to the screen?
  // 8. How can you fix it? // let, closure
  function buildFunction(n) {
      var arr = [];
  
      for(var i = 0; i < n; i++) {
          arr.push(function() { 
              console.log(i); 
          });
      }
  
      return arr;
  }
  
  var n = 10;
  var fs = buildFunction(n);
  for(var i = 0; i < n; i++) {
      fs[i]();
  }
  
  // 9. Given the following string, 
  const relativePath = '/settings/bankmanagement';
  // Please write a function that will print to the screen the next array:
  [
      '/', 
      '/settings', 
      '/settings/bankmanagement'
  ];
  
  /**
   
  const relativePath = '/settings/bankmanagement';
  
  const arr1 = relativePath.split('/');
  console.log(arr1);
  
  const arr2 = [];
  for(i = 0; i < arr1.length; i++) {
    arr2.push(i === 0 ? "/" : arr1.slice(0, i + 1).join('/'))
  }
  
  console.log(arr2);
  
  /** */
  
  // What is 'this': // When you write this inside of an arrow function, it uses this of the closest “regular” function above.
  
  var x = 7;
  
  function func1( ) {
      console.log(this.x);
  }
  func1();
  
  const func2 = () => {
      console.log(this.x);
  }
  func2();
  
  const obj = {
      x: 3,
      func1: function() {
          console.log(this.x);
      },
      func2: function(){
          function func3() {
              console.log(this.x);
          }
        
          func3()
      },
      func4: function(){
          const func5 = () => {
              console.log(this.x);
          }
          
          func5();
      }
  }
  
  obj.func1();
  obj.func2();
  obj.func4();
  
  
  