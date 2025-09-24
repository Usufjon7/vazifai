// function task(arr) {
//     return arr.join("-1-2-3-");
// }
// console.log(task([1,2,3,4]));


// function task1(arr1) {
//   return arr1.includes(4);
//     }
//     console.log(task1([1,2,3,4]));


// function task2(arr2) {
//     return arr2.slice(1, );
// }
// console.log(task2([1,2,3,4]));


// function task3(arr3) {
//     return arr3.splice(1, 4, "hello");
// }
// console.log(task3([1,2,3,4]));   

// Destructuring
// let arr4 = [1,2,3,4];
// let [num1, num2, ...num3] = arr4;
// console.log(num3);


// spread 
// let arr5 = [1,2,3,4];
// let arr6 = [...arr5]
// arr6.push(5)
// console.log(arr6);

// rest
// function task4(num1,num2,...num3) {
//     return num3
// }

// console.log(task4(1,2,3,4,5,6,7,8));


// function task5(arr) {
//     let sum=0
//     for(let i=0; i<arr.length; i++){
//         sum+=arr[i]
//     }
//     return sum
// }
// console.log(task5([1,2,3,4,5,6]));


// function task1(arr) {
//     let cnt=1
//     cnt*=arr
//     return cnt
// }
// console.log(task1([1,2,3,4]));

// zadachai 1

// function task1(arr) {
//     let cnt=0
//     for(let i=0; i<arr.length; i++){
//         cnt+=arr[i]
//     }
//     return cnt


// }
// console.log(task1([1,2,3,4,5]));
// // // zadachai 2
// function task2(a) {
// let max=-999
// for(let i=0; i<a.length; i++){
//     if(max<a[i]){
//         max=a[i]
//     }
// }
// return max
// }
// console.log(task2([1,2,3,4,5,6]));

// // zadachai 3
// function task3(arr) {
// let cnt=0
// for(let i=0; i<arr.length; i++){
// if(arr[i]%2==0){
//     cnt++
// }
// }
// return cnt
// }
// console.log(task3([1,2,3,4,5]));

// // // zadachai 4
// function task4(arr,arr) {
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]==arr2){
//             return true
//         }
//     }
//     return false
// }
// console.log(task4([1,2,3,1,5],4));

// // zadachai 4

// function task5(arr) {
// let cnt=0;
// let sum=0;
// for(let i=0; i<arr.length; i++){
//     sum+=arr[i]
//     cnt++
// }
// return sum/cnt
// }
// console.log(task5([5,5,5,10,2]));




// function task1(arr) {
//     let cnt=0
//     for(let i=0; i<arr.length; i++){
//         cnt+=arr[i]
//     }
//     return cnt
// }

// console.log(task1([1,2,3,4,5]));

// function task2(arr) {
// let sum=0
// let cnt=0
// for(let i=0; i<arr.length; i++){

//         sum+=arr[i]
//         cnt++

//     }
//     return sum/cnt

// }
// console.log(task2([1,2,3,4,5]));
// function task3(arr) {
//     let cnt=0
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%2==0){
//             cnt+=arr[i]
//         }
//     }
//         return cnt
// }
// console.log(task3([1,2,3,4,5,6]));

// function task4(arr) {
//     let min=999
//     for(let i=0; i<arr.length; i++){
//         if(min>arr[i]){
//             min=arr[i]
//         }
//     }
//     return min
// }
// console.log(task4([1,2,3,4,5,6]));





// function task5(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             sum += arr[i][j];
//         }
//     }
//     return sum;
// }
// console.log(task5([[1, 2, 3, 4, 5], [1, 4, 24]]))


// function task6(arr) {
//     let cnt = []                
//     for (let i = 0; i < arr.length; i++) {
//               if(!cnt.includes(arr[i])){
//                 cnt.push(arr[i])
//               }

// }
// return cnt
// }

// console.log(task6([1, 2, 3, 4,5, 5]));


// function task7(arr) {
//     let cnt =[]
//     for (let i = 0; i < arr.length; i++) {
//     if(arr[i]%2==0){
//         cnt.push(arr[i])
//     }
// }
//     return cnt
// }
// console.log(task7([1, 2, 3, 4, 5,6]));

//  function task8(arr) {
//      let cnt=arr.toString()
//      let s=cnt.split("").reverse().join("")
//      if(cnt==s){
//          return true
//      }  
//      else{

//          return false
//      } 
//  }
// console.log(task8([1, 2, 3, 4, 5]));



// function task9(arr) {
//  let cnt=0
//     for(let i=0; i<arr.length; i++){
// for(let j=2; j<arr.length; j++){
//      if(arr[i]%arr[j]==0)
//         return false
//         }
//     }
//     return true
// }

// console.log(task9([1, 2, 3, 6, 5]));



// function task10(arr) {
//     for(let i=0; i<arr.length; i++){
//        for(let j=i+1; j<arr.length; j++){
//         if(arr[i]>arr[j]){
//             let temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp 
//         }
//         }
//     }
//     return arr
// }
// console.log(task10([2, 5, 1, 7, 9]));






// vazifai xonagi 23 09 2025


// function task1(arr,arr1) {
// let cnt=[]
// for(let i=arr; i<=arr1; i++){
//     cnt.push(i);
// }
// return cnt

// }
// console.log(task1(10,20));


// function task2(arr) {
//     let cnt=0
//     let sum=0
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%2==0){
//             sum+=arr[i]
//         }
//         else{
//             cnt+=arr[i]
//         }
//     }
//     return [sum,cnt]
// }
// console.log(task2([1,2,3,4,5,6]));


// function task3(arr) {
//     let cnt=1
//     for(let i=0; i<arr.length; i++){
//         cnt*=arr[i]
//     }
//     return cnt/2
// }
// console.log(task3([7,13,2,6,4]));


// function task4(arr) {
//     let max=-999
//     let min=999
//     for(let i=0; i<arr.length; i++){
//         if(max<arr[i]){
//             max=arr[i]
//         }   
//         if(min>arr[i]){
//             min=arr[i]
//         }   
//     }
//         return [max,min]
// }
// console.log(task4([1,2,3,4,5]));

//  function task5(arr) {
//     let cnt=0  
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%arr[i]==0 && arr[i]%1==0){
//          cnt++
// }
// }
// return cnt
//  }
//     console.log(task5([11,21,3,4,15]));


// function task6(a) {
//     for(let i=0; i<a.length; i++){
//         for(let j=i+1; j<a.length; j++){
//            if(a[i]>a[j]){
//             let temp=a[i]
//             a[i]=a[j]
//              a[j]=temp
//         }
//             }
//         }
//         return a
// }
// console.log(task6([1,4,2,7,56,7,8,4]));


//  function task7(arr,arr1) {
//     let cnt=0
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]==arr1){
//             return true
//         }
//     }
//     return false
//  }
//  console.log(task7([1,2,3,4,5,6],7));


// function task9(a) {
// if(a==0 || a==1){
//     return 1
// }
// let result =1
// for(let i=2; i<=a; i++){
//     result*=i
// }
// return result
// }
// function task9a(arr) {
//     let cnt=[]
//     for(let i=0; i<arr.length; i++){
//         cnt.push(task9(arr[i]))
//     }
//     return cnt
// }
// console.log(task9a([5,6]));


// function task10(arr) {
//     let cnt=0
//     for(let i of arr){
//    for(let j=2; j<=i; j++){
//     if(i%j==0 && i!=j){
//     return false
//    }
// }
//     }
//     return true
// }
// console.log(task10([1,3,5]));


// function task11(arr) {
//     let max=-999
//     let min=999
//     for(let i=0; i<arr.length; i++){
//         if(max<arr[i]){
//             max=arr[i]
//         }   
//         if(min>arr[i]){
//             min=arr[i]
//         }   
//     }
//         return max-min
// }
// console.log(task11([1,2,3,4,5]));



// function task12(arr) {
//     let cnt=0  
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]==i)
//             return true
//     }
//     return false
//     }


//     console.log(task12([1,2,3,4,5]));
    
// function task14(arr) {
//     let cnt=0;
//     for(let i=0; i<arr.length; i++){
//         cnt++
//     }
//     return cnt
// }
// console.log(task14([0,0,0,0,0,0]));  










// function task(arr) {
//     return arr.forEach((element, index, arr) => {
//          console.log(element, index, arr);
         
//     })
// }
// console.log(task([1,2,3,4,5]));

// function task1(arr) {
//     return arr.map((element) => {
//      return element/2

//     })
// }
// console.log(task1([1,2,3,4,5]));

// function task2(arr) {
//   return arr.filter((element) => {
//        return element!==0
//   })  
// }
// console.log(task2([1,2,3,4,5]));




// function task3(arr) {
//   return arr.toSorted((a,b) => a-b) 
// }
// console.log(task3([1,2,765,675,25]));




// function task4(arr) {
//   return arr.find((elem) => {
//     return elem>3
//   })
// }
// console.log(task4([1,2,3,4,5]));



// function task5(arr) {
//     return arr.reduce((a,b) =>{
//    return a*b
//     },1)
// }
// console.log(task5([1,2,3,4,5]));

// function task6(arr) {
//     return arr.some((elem)=>{
//         return elem%2==0
//     })
// }
// console.log(task6([1,2,3,4,5]));


// function task6(arr) {
//     return arr.every((elem)=>{
//         return elem%2==0
//     })
// }
// console.log(task6([1,2,3,4,5]));



//   vazifai xonagi 24.09.2025

//   function task1(...arr) {
//          return arr.reduce((elem, ind)=> elem.concat(ind),[]);  
//   }   
  
//   console.log(task1([1,2],[3,4,5]));
           

// function task1(...arr) {
//     return arr.reduce((elem,ind)=>elem.concat(ind),[])
// }
// console.log(task1([1,2],[3,4]));


// function task2(arr, b) {
//   return arr.findIndex((elem) => elem === b);
// }

// console.log(task2([1, 2, 3, 4, 5], 2)); 


// function task2(arr,b) {
//     return arr.findIndex((elem)=> elem==b)
// }
// console.log(task2([1,2,3,4,5],2));


// function task3(arr) {
//     return arr.filter((elem,index)=> arr.indexOf(elem)==index)
    
// }
// console.log(task3([1,2,2,3,4,5,5]));

// function task3(arr) {
// return arr.filter((elem,index)=> arr.indexOf(elem)==index)
// }
// console.log(task3([1,2,2,3,4,5,5]));


// function task4(arr) {
//     return arr.filter((elem)=> elem>0)
// }
// console.log(task4([-1,2,-3,-4,5]));

// function task5(arr) {
//   return arr.reduce((elem,ind)=> {
//           elem+ind
//   })
// }
// console.log(task5([1,2,3,4,5]));


// function task5(arr) {
//  let cnt= arr.join("")  
//  let sum=arr.reverse().join("") 
//  if(cnt==sum){
//     return true

//  }
//  return false

// }
// console.log(task5([1,0,0,1]));


//  function task6(arr,arr1,arr2) {
//     return arr2.filter(elem => arr<elem && arr1>elem)
//  }
//     console.log(task6(5,10,[1,2,3,4,5,6,7,8]));
 
// function task7(arr) {
//   return arr.reduce((a,b) =>  a+b,0)
// }
// console.log(task7([1,0,-1,2]));

// function task8(arr) {
//     return arr.map(element => typeof element );
// }

// console.log(task8([1,2,[],"l",5]));

// function task9(arr) {
//     return arr.map(word => word.length);
// }

// console.log(task9((["hello","hay"])));


// function task12(arr) {
//      return arr.map((elem) => elem*-1)
// }
// console.log(task12([1,2,3,4,5,6]));


// function task13(arr) {
//     return arr.reduce((a,b) => {
//         let cnt=0
//         if(b>5){
//             cnt=a+b
//         }
//         return cnt
//     } ,0)
// }
// console.log(task13([1,5,7,86,86,8]));

// function task14(arr) {
//     return arr.map(elem => elem*2)
// }
// console.log(task14([1,2,3,4,5]));

// function task15(arr) {
//     return arr.filter(elem => typeof elem=="number")
// }
// console.log(task15([1,3,"sfd",1]));


// function task16(arr) {
//    return arr[0] 
// }

// console.log(task16([1,2,3,4]));


// function task17(...arr) {
//     return arr
// }
// console.log(task17(1,2,3,6546));


function ta(params) {
    
}


