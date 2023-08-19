
      let arr =[1,2, 3, 4];
    //    for(let i=0;i<arr.length;i++){
    //       console.log(arr[i]);
    //    }
      // Methods in a javascript
      console.log(arr.toString()); // toString() it will convert our string to array
      arr.push(45);
      // push(value ) it is used to add a value to the end of the array
      // it always return a neew array
      arr.pop();// it used to remove the last element from the array and it will return the value which is poped out from the array.
      arr.shift(); // it will remove the first element from the array and return the shifted element
      arr.unshift(7)// it wiil add a new element at the front of the array and return the new array
      // How the element which is stored at certain place in array
      arr[1] = 5; //updating the value at index 1
      console.log(arr);
       // Merginf of two array
       let first = [ "Ruchi","Mahi"];
       let second = ["mummy","papa"];
       let family = first.concat(second); // concate method is used to merge to array it will return a new array
       console.log(family);
       // Flattening of array
     // Flattening of array means reducing the dimenesionalaity of the array
     const myArr = [["ruchi","mahi"],["mummy","papa"]];
     const family2 = myArr.flat() ; // it will create a new array by the concatedning the subarray of the array
     console.log(family2);
     // splice() methods add new itemds to array
     // slice() methods slices out a piece of an array
     const fruits = ["apple","mango","orange","banana"];
     fruits.splice(2,0,"lemon","kiwi"); // here 2 defines the position where new element should be added.
     // the second parameter 0 defines how many elemenst should be removed
     // the rest of the parameter ("lemon","kiwi") defines the new elements to added
     console.log(fruits);
     const friends = [ "Diya","prince","Mohit","Rajini","Disha"];
     friends.splice(1); 
     console.log(friends);
     // sort() this methods works well for sorting the array of string
     let numbers = [10,23,9,30,12];
     numbers.sort((a,b)=>{return a-b});// sorting the element of the array
     console.log(numbers);
     let names = ["ruchi","diya","priya","mohit"];
     console.log(names.sort());
     let data = [
        {"name":"Ruchi",
          "age":23
        },
        {"name":"Ruchi",
          "age":13
        },
        {"name":"Ruchi",
          "age":43
        },
        {"name":"Ruchi",
          "age":15
        },
        {"name":"Ruchi",
          "age":18
        }, 
         {"name":"Ruchi",
          "age":20
        }
     ];
     
      
  