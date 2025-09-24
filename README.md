#      Array Callbacks
  #  1. find() 
  Ҷустуҷӯ мекунад ва аввалин элементи массивро, ки шартро қонеъ мекунад, бармегардонад.
  ```js
   function task4(arr) {
   return arr.find((elem) => {
     return elem>3
   })
 }
 console.log(task4([1,2,3,4,5]));
  
  ```


  #  2. forEach()
  Барои ҳар элементи массив як функцияро иҷро мекунад, натиҷа намегардонад.
   ```js
   function task(arr) {
     return arr.forEach((element, index, arr) => {
          console.log(element, index, arr);
         
    })
 }
 console.log(task([1,2,3,4,5])); 

  ```
  #  3.  map()
  Барои ҳар элементи массив функсияро иҷро карда, массиви навро бо натиҷаҳо бармегардонад.
  ``` js
function task1(arr) {
   return arr.map((element) => {
      return element/2

     })
 }
 console.log(task1([1,2,3,4,5]));
  ```
  # 4. filter()
Массиви навро бо элементҳое бармегардонад, ки шартро қонеъ мекунанд.
```js

 function task2(arr) {
   return arr.filter((element) => {
        return element!==0
  })  
 }
  console.log(task2([1,2,3,4,5]));

```
#  5. toSorted()
Массиви навро тартиб медиҳад, аммо массиви аслиро тағйир намедиҳад.
```js
 function task3(arr) {
   return arr.toSorted((a,b) => a-b) 
 }
 console.log(task3([1,2,765,675,25]));

```
# 6. reduce()
Барои ҷамъбаст кардани элементҳо бо функсияе, ки як арзиши ягона бармегардонад.
```js

 function task5(arr) {
     return arr.reduce((a,b) =>{
    return a*b
     },1)
 }
 console.log(task5([1,2,3,4,5]));

```
# 7. some()
Агар ҳадди ақалл як элемент шартро қонеъ кунад, бармегардонад true.
```js
    function task6(arr) {
    return arr.some((elem)=>{
        return elem%2==0
     })
 }
 console.log(task6([1,2,3,4,5]));
```
# 8. every()
Агар ҳамаи элементҳо шартро қонеъ кунанд, бармегардонад true.
```js
function task6(arr) {
     return arr.every((elem)=>{
         return elem%2==0
     })
 }
 console.log(task6([1,2,3,4,5]));


```
# vazifas
