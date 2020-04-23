/**
An arrow function does not have its own this. 
The this value of the enclosing lexical scope is used; 
arrow functions follow the normal variable lookup rules. 
So while searching for this which is not present in current scope, 
an arrow function ends up finding the this from its enclosing scope.
*/