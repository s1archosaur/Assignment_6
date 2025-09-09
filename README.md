## **1. Difference between `var`, `let`, and `const`**

### **`var`**:
`var` is function scoped, that is, it can be accessed within a function. It can also be accessed globally if it is declared outside a function. It can be used before it is declared in the code, which is known as hoisting. It is initialized with a value of `undefined`. It can be redeclared and reassigned within its scope.  

### **`let`**:
`let` is block scoped, that is, it can be accessed only within the block where it is declared. Like `var`, it can be hoisted too, but it cannot be initialized, resulting in the 'temporal dead zone', that is, although it exists in the memory, it cannot be accessed before the declaration happens. It can be reassigned but cannot be redeclared within its scope.

### **`const`**:
`const` is block scoped but must be initialized (assign a value) during declaration. It cannot be reassigned or redeclared within its scope. However, value can be modified in non-primitive data-types like arrays and objects.

## **2. Difference between `map()`, `forEach()`, and `filter()`**

### **`map()`**:
`map()` is a method that creates and returns a new array from an original array. It applys a function to every element of the array and returns another array of the same length.

### **`forEach()`**:
`forEach()` is a method that takes an array as input, goes through every element of the array like a for loop, applies a function for each but returns nothing.

### **`filter()`**:
`filter()` is a method that creates and returns a new array from an original array. However, the length of the the original array and the new array might not be the same. As this method goes thorugh every element of the original array, pass them through a callback function and returns a new array from elements passing the test from the function.

## **3.  Arrow functions in ES6**

`ECMAscript v6` or `ES6` introduced a shorter way to write function. Instead of writing `const sum(a, b) {return a + b}`, it can be written as `(a, b) => {a + b}`. This type of function behaves differently when interpreting `this`, as they do not have their own `this`. They cannot be used as constructors and do not have `arguments` object.

## **4. Destructuring assignment work in ES6**
This feature or assignment allows extracting values from arrays or properties from objects and assigning them directly to variables on a short and concise way. 

Example:

**Array destructuring:**

`const [a, b] = [1, 2];`

It allows the variables `a` and `b` to be assigned values `a = 1` and `b = 2` from the array `[1, 2]`.

**Object destructuring:**

`const {name, age} = {name: "Hablu", age: 18};`

It allows the variables `name` and `age` to be assigned values `name = Hablu` and `age = 18` from the object `{name: "Hablu", age: 18}`.

## **5. Template literals in ES6 and difference from string concatenation**

* Template literals use **backticks (\`)** instead of quotes.

Template literals use backticks instead of quotes to write strings. They allow the direct interpolation of variables or expressions inside the strings. On the other hand, concatenation uses `+` operator to concatenate, which is not as much concise and readable. String literals also support advanced custom tag processing.

Example:
```
  const name = "Hablu";
  \\ String literals
  console.log(`Hello, ${name}!`);
  
  \\ Concatenations
  console.log("Hello," + name + "!");

  \\ For both cases, output will be: Hello, Hablu!

  ```
It can span multiple lines without special characters like `\n`, which concatenation cannot.

Example:

  ```  
  \\ String literals
  const text = `My name
  is
  Hablu.`;
  console.log(text);
  \\ Output:
  \\ My name
  \\ is
  \\ Hablu.

  \\ Concatenations
  const text = "My name 
  is 
  Hablu.";
  console.log(text);
  \\ Output:
  \\ My name is Hablu.
  ```