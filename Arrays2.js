
        // Map filter reduce
        // Map() = It is used to transform an array
        let arr = [1,2,3,4];
        function double(value){
            return value*2;
        }
        console.log("Double of Array ",arr.map(double));
        function binary(value){
            return value.toString(2);
        }
        console.log("Binarry of all the element od the array",arr.map(binary));
        // Filter() = It is used to filter out value based on some condition
        let arr2 = [3,5,12 ,8,34];
        // you have to find all the odd numbers from the array
        function isOdd(value){
            return value%2!==0;
        }
        console.log("Array which contain only odd value",arr2.filter(isOdd));
        // let Talk about reduce method it used when you have to take all the value of the array and a return a value out of whihc
        // it take two parametre one is accumator and other is curren
        // suppose you have to file max of the array
        const maximum = arr2.reduce((max,current)=>{
           if(max < current){
              max= current;
           }
           return max;
        },0)
        console.log(maximum);
        // let do some based on these method
        // 1 .  Input : const input = [1, 2, 3, 4, 5]; output : [1, 4, 9, 16, 25];
       const input1 =[1,2,3,4,5];
       const output1 = input1.map((value)=> Math.pow(value,2));
        console.log("1 .",output1);
         // 1 .  Input : const input = [1, -4, 12, 0, -3,29,-150]; output : 42; 
         const input2 = [1, -4, 12, 0, -3,29,-150];
         const output2 = input2.reduce((sum,curr)=>{
            if(curr>0){
            sum=sum+curr;
            }
            return sum;
         },0);
         console.log("2 .",output2);
         const input3 = "George Raymond Richard Martin";
         const inputArr = input3.split(" ");
         const result = inputArr.reduce((acc,curr)=>{
            acc+=curr.charAt(0);
            return acc;
         },"")
        console.log(result);
        const input = [
                {
                    name: "John",
                    age: 13,
                },
                {
                    name: "Mark",
                    age: 56,
                },
                {
                    name: "Rachel",
                    age: 45,
                },
                {
                    name: "Nate",
                    age: 67,
                },
                {
                    name: "Jennifer",
                    age: 65,
                },
        ];
        const ages = input.map((person)=> person.age);
        console.log(ages);
      console.log([Math.max(...ages),Math.min(...ages),(Math.max(...ages)-Math.min(...ages))])
      const input7 = [
        ["a", "b", "c"],
        ["c", "d", "f"],
        ["d", "f", "g"],
    ];
    const ans = input7.flat().reduce((acc,curr)=>{
        if(acc[curr]){
            acc[curr]++;
        }
        else{
            acc[curr]=1
        }
        return acc;
    },{});
    console.log(ans);
   