
        // Function in java script 
        // function is a block of code that performs some specfic tasks . it divide our problem into small chunks make it understable ad resuable
        function sum(a,b){
            console.log("Sum :",(a+b));

        }
        sum(10,20); // calling functiom
        // Funtion that returns a value
        function multiply(a,b){
            return a*b;
        }
        console.log("Product ",multiply(3,4));
        // Function expression is very similar to , and has almost the same syntax as s function a function declaration . the main differce
        // and a function declaration is function name which can be omitted infunction expressiont to create anonymoua function
        const subtraction = function(a,b){
            console.log("Subtraction :",a-b);
        }
      subtraction(30,20);
      const modulo = function(a,b){
        return a%b;
      }
      console.log("Modulo",modulo(10,6));
      // Function expression are not hosited
       
      // Nested Function : We can nest a function  inside a function . The Nested Function is private to the containing function (outer function)
      function sumOfSquares(a,b){
        const asq = square(a);
        const bsq = square(b);
        function square(x){
            return x*x;
        }
        return asq+bsq;
      }
      console.log("The Sum of Square is :" ,sumOfSquares(3,4));
      // IIFE (Immediately invoked function expression) which runs as soon as it is defined.
      (function wish(){
        console.log("This is IIFE");
      })();
   
