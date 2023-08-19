
        // Arrow function : The arrow function is one of the features of the Es6 version. It allows us to create the function int much clearner way 
        const sum = (a,b)=>a+b;
        console.log("Sum :",sum(4,5))
        const product = (a,b) =>{
            console.log("Product is :",a*b);
        }
        product(4,5);
        // Call back Function : A callback fucntion is a function that is passed as an argument in function.
        function wish(name,message){
            console.log("hi ",name);
            message();
        }
        function message(){
            console.log("this is an example of callback function");
        }
        wish("ruchi",message);
        // Higher Order Function : It a function that takes a function as an argument and return a function is called higher order function 
        function higherOrderFunction(message){
            return message();
        }
        higherOrderFunction(message);
      

