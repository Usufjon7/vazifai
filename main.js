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
// // zadachai 2
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

// zadachai 3
function task3(arr) {
let cnt=0
for(let i=0; i<arr.length; i++){
if(arr[i]%2==0){
    cnt++
}
}
return cnt
}
console.log(task3([1,2,3,4,5]));




// // zadachai 4
// function task4(arr,arr) {
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]==arr2){
//             return true
//         }
//     }
//     return false
// }
// console.log(task4([1,2,3,1,5],4));





// zadachai 4

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