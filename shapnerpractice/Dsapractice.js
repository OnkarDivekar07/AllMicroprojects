// //started with dsa
// //swapping two variables
// // let a=20;
// // let b=23;
// // let temp=a;
// // a=b;
// // b=temp;
// // console.log(`now a is ${a}  and b is ${b}`)

// //largest among two numbers
// // let a=12;
// // let b=20;
// // if(a>b){
// //     console.log(a);
// // }
// // else{
// //     console.log(b);
// // }
// //largest among three numbers
// // let a=20;
// // let b=25;
// // let c=45;
// // if(a>b && a>c){
// //     console.log(a);
// // }
// // else if(b>c){
// //     console.log(b)
// // }
// // else{
// //     console.log(c);
// // }
// //cost of transport
// // let d=500
// // if(d>=0 && d<=100){
// //     console.log(5)
// // }
// // else if(d>100 && d<=500){
// //     console.log(8);
// // }
// // else if(d>500 && d<1000){
// //     console.log(10);
// // }
// // else{
// //     console.log(12);
// // }
// //marks using ternary opretor
// // let marks=42;
// // let result=marks>=40?'pass':'fail';
// // console.log(result);

// //maximum of the two numbers using ternary opreator
// // let a=20;
// // let b=30;
// // let result=a>b?a:b;
// // console.log(result);

// //day of the week using switch opreator
// // let n = -3;
// // switch (n) {

// //     case 1:
// //         console.log('Monday');
// //         break;
// //     case 2:
// //         console.log("Tuesday");
// //         break;
// //     case 3:
// //         console.log('wensday');
// //         break;
// //     case 4:
// //         console.log('thursday');
// //         break;
// //     case 5:
// //         console.log('friday');
// //         break;
// //     case 6:
// //         console.log('saturday');
// //         break;
// //     case 7:
// //         console.log('sunday');
// //         break;
// //     default:
// //         console.log('invalid')

// // }


// //module two-Looping
// // let i=2;
// // while(i<=10){
// //     if(i%2==0){
// //         console.log(i)
// //     }
// //     i++;
// // }

// //numbers should not be divisible by 5;
// // let i=1;
// // let n=10;
// // while(i<=n){
// //     if(i%5==0){
// //         i++;
// //         continue;
// //     }

// //     console.log(i);
// //     i++;
// //}

// //prints the digits of the number
// // let i=153;

// // while(i>0){
// //     let rem=i%10;
// //     console.log(rem);
// //      i=Math.floor(i/10);
// //     }


// //amstrong number
// // let n=373;
// // let temp=n;
// // let sum=0;
// // while(n>0){
// //    let rem=n%10;
// //    sum=sum+(rem*rem*rem)
// // n=Math.floor(n/10);
// // }
// // if(sum==temp){
// //     console.log('it is amstrong number')
// // }
// // else{
// //     console.log('it is not the amstrong number')
// // }

// //reverse the number

// // let n=153;
// // let sum=0;
// // while(n>0){
// // let rem=n%10;
// // sum=sum*10+rem;
// // n=Math.floor(n/10);
// // }

// // console.log(sum);

// //write all the odd numbers using for loop
// // let n=10;
// // for(let i=0;i<=n;i++){
// //     if(i%2 != 0){
// //         console.log(i);
// //     }
// // }

// //cubes of the number series

// // for(let i=1;i*i*i<=125;i++){
// // console.log(i*i*i);

// // }

// //numbers which are divisible by 4;
// // for(let i=1;i<24;i++){
// //    if(i%4==0){
// //        continue;
// // }
// // else if(i%2==0){
// //     console.log(i);
// // }
// //  }
// //using break statment in for loop
// // for(let i=1;i<=10;i++){
// //     if(i==4){
// //        break;
// //     }
// //     console.log(i);
// // }

// //pattern 1;
// // for(let i=1;i<=5;i++){
// //     str='';
// //     for(let j=5;j>=i;j--){
// //     str=str+'*';
// //     }
// //     console.log(str);
// // }

// //pattern 2 using while loops
// // let i=1;
// // while(i<=5){
// // let j=5;
// // let str='';
// // while(j>=i){
// // str=str+'*'
// // j--;
// // }
// // console.log(str);
// // i++}

// //pattern 3

// // for(let i=1;i<=5;i++){
// //     let str='';
// //     for(let j=5;j>=i;j--){
// //         str=str+'*';
// //     }
// //     console.log(str);
// // }
// // for (let i = 1; i <= 5; i++) {
// //     let str = '';
// //     for (let j = 1; j <= i; j++) {
// //         str = str + '*';
// //     }
// //     console.log(str);
// // }


// //pattern 5
// //  let i=1;
// // while(i<=5){
// //     let j=5;
// //    let str='';
// //     while(j>=i){
// //         str=str+'*'
// //   j--;  }
// //     console.log(str);
// // i++}
// // let i1 = 1;
// // while (i1 <= 5) {
// //     let j = 1;
// //     let str = '';
// //     while (j <= i1) {
// //         str = str + '*'
// //         j++;
// //     }
// //     console.log(str);
// //     i1++
// // }
// //pattern 4

// // for(let i=0;i<=5;i++){
// //     let str='';
// //     for(let j=1;j<=i;j++){
// //         str=str+'*';
// //     }
// //     for(let k=4;k>=i;k--){
// //         str=str+' ';
// //     }
// //     for (let j = 1; j <= i; j++) {
// //         str = str + '*';
// //     }
// //     console.log(str);
// // }

// let A = [1,2,5,4,0];
// let B = [2,4,5,0,1];
// let map= new Map()
// let yes=0
// for (let i = 0; i < A.length; i++) {
//     map.set(A[i],1);
// }
// for(let i=0;i<A.length;i++){
//     if(set.has(B[i])){
//        yes=1;
//     }
//     else{
//         yes=0;
//     }
// }
// console.log(yes)

//module-3  Arrays;
//storing  1 to n element in the arr
// let ans=[];
// for(let i=1;i<=10;i++){
//     ans.push(i);
// }

// console.log(ans);
//  let Arr=[5, 4, 7, 2, 6];
//  let max=Arr[0];
//  for(let i=0;i<Arr.length;i++){
// if(Arr[i]>max){
//     max=Arr[i];
// }
//  }
// console.log(max);

//minimum element in the array
// let ans=[1,2,3,4,5,6,7];
// let min=ans[0];
// for(let i=0;i<ans.length;i++){
//     if(ans[i]<min){
//         min=ans[i];
//     }
// }
// console.log(min);

//storing prime numbers in the array

// let ans=10;
// let p=[];
// let x=2;
// let container=0;
// while(container<ans){
//     let prime=true;
//     for(let i=2;i<x;i++){
//         if(x%i===0){
//             prime=false;
//         }
//     }
//     if(prime){
//       p.push(x);
//       container++;
//     }

// x++}


// console.log(p);


//print all the subarrays of the given array


// let ans=[1,2,3,4,5]
// for(let i=0;i<ans.length;i++){
//     for(let j=0;j<ans.length;j++){
//         let str=''
//         for(let k=i;k<=j;k++){
//            str=str+ans[k];
//         }
//         console.log(str);
//     }

// }
//maximum sum subarray in the given array
//   let Arr=[1,2,3,-2,5];
//    let max=-Infinity;
//         let sum=0;
//         for(let i=0;i<arr.length;i++){
//             sum=sum+arr[i];
//             if(sum>max){
//                 max=sum;
//             }
//             if(sum<0){
//                 sum=0;
//             }
//         }
//          return max;

//Running Sum of 1d Array
// ''let nums = [1,2,3,4]

//  for(let i=1;i<nums.length;i++){
//         nums[i]=nums[i]+nums[i-1];
//     }
//     return nums;


//max sum in n2d array
// let accounts = [[1,2,3],[3,2,1]]
// let maxsum=0;
// for(let i=0;i<accounts.length;i++){
//     let sum=0;
//     for(let j=0;j<accounts[i].length;j++){
//       sum=sum+accounts[i][j];
//     }
//     maxsum=Math.max(maxsum,sum);
// }
// console.log(maxsum);


//sum all the odd length subarrays
    // let sum=0;
    // let n=arr.length;
    // for(let i=0;i<arr.length;i++){
    //     let start=n-i;
    //     let end=i+1;
    //     let total=start*end
    //     let odd=Math.floor(total/2);
    //     if(total%2 !=0){
    //         odd++
    //     }
    //     sum=sum+(odd*arr[i]);
    // }
    // return sum;


    //missing number
//   let   nums = [3,4,1]
//   let sum=0;
//   let miss;
//   let n=nums.length+1;
//   let expectedsum=Math.floor(n*(n-1)/2);
//   for(let i=0;i<nums.length;i++){
//    sum=sum+nums[i];
//   }
// miss=sum-expectedsum;
// console.log(miss);
//bubble sort
   // let ans=[4,3,2,5,1];
    // for(let i=0;i<ans.length;i++){
    //     for(let j=1;j<ans.length-i;j++){
    //         if(ans[j-1]>ans[j]){
    //             let temp=ans[j];
    //             ans[j]=ans[j-1];
    //             ans[j-1]=temp;
    //         }
    //     }
    // }
    // console.log(ans);
    //insertion sort
//     for(let i=0;i<ans.length-1;i++){
//         for(let j=i+1;j>0;j--){
//             if(ans[j-1]>ans[j]){
//             let temp=ans[j];
//             ans[j]=ans[j-1];
//             ans[j-1]=temp;
//             }
//             else{
//                 break;
//             }
//         }
//     }
//console.log(ans);

//selection sort


// for(let i=0;i<ans.length-1;i++){
//     let min=i;
//     for(let j=i+1;j<ans.length;j++){
//         if(ans[j]<ans[min]){
//          //  ;
//             min=j;
//         }
//     }
//     //console.log(ans[i])
//     if(ans[i]>ans[min]){
//         let temp=ans[i];
//         ans[i]=ans[min];
//         ans[min]=temp;

//     }
// }


// console.log(ans);


//Bit manipulation and time complexity module

//finding the single unique element  with help of the xor opreation
// let ans =[2,2,3,3,4,4,5];
// let x=0;
// for(let i=0;i<ans.length;i++){
//     x=x^ans[i];
// }
// console.log(x)

//Count number of set bits
// let n=3;
// let count = 0;
// for (let i = 0; i < 32; i++) {
//     if (((n >> i) & 1) == 1) {
//         count++;
//     }
// }
// return count;
//Binary Number with Alternating Bits
// let curr = n & 1;
// n = n >> 1;
// while (n > 0) {
//     if (curr == (n & 1)) {
//         return false
//     }
//     curr = n & 1;
//     n = n >> 1;
// }
// return true;

//number to hexadecimal not yet done
//Sort integers by number of set bits
// let ans = []
// for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = 0; j < 32; j++) {
//         if (((arr[i] >> j) & 1) == 1) {
//             count++;
//         }

//     }
//     ans.push(count);

//     //console.log(ans);
// }


// for (let i = 0; i < ans.length; i++) {
//     for (let j = 0; j < ans.length - i; j++) {
//         if (ans[j - 1] > ans[j] || ans[j - 1] == ans[j] && arr[j - 1] > arr[j]) {
//             let temp = ans[j - 1]
//             ans[j - 1] = ans[j];
//             ans[j] = temp;
//             temp = arr[j - 1]
//             arr[j - 1] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// return arr;
//DIvide two integers
// const INT_MAX = 2147483647;
// const INT_MIN = -2147483648;
// if (dividend == -2147483648 && divisor == -1) {
//     return 2147483647;
// }
// if (dividend == INT_MIN && divisor == INT_MIN) {
//     return 1;
// }
// let sign = 1;
// if (dividend > 0 && divisor < 0) {
//     sign = -1;
// }
// else if (dividend < 0 && divisor > 0) {
//     sign = -1;
// }

// let n = Math.abs(dividend)
// let d = Math.abs(divisor)
// let x = 0;
// while (n >= d) {
//     let y = 0;
//     while (n >= (d << y) && (d << y) > 0) {
//         y++;
//     }

//     n = n - (d << y - 1);
//     x = x + (1 << y - 1);
// }
// return x * sign;
//time complexity to it from notes


//rotate the array by k step
// k = k % nums.length;
// rotate(nums, 0, nums.length - 1);
// rotate(nums, 0, k - 1);
// rotate(nums, k, nums.length - 1);



// function rotate(nums, s, e) {
//     while (s <= e) {
//         let temp = nums[s];
//         nums[s] = nums[e];
//         nums[e] = temp;
//         s++;
//         e--;
//     }
// }



//diasppering elements
// let ans = [];
// for (let i = 0; i < nums.length; i++) {
//     let index = Math.abs(nums[i]) - 1;
//     if (nums[index] < 0) {
//         continue;
//     }
//     nums[index] = nums[index] * -1;
// }
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 0) {
//         ans.push(i + 1);
//     }
// }
// return ans;


//strings-validate a string 
// let word = "onkar"
// let valid=true;
// let j=word.length-1;
// for(let i=0;i<word.length;i++){
// if(word.charAt(i) != word.charAt(j)){
//     valid = false;
// }
//     j--;
// }
// console.log(valid);
//maximum words in the sentence

// let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// let maxwords=0;
// for(let str of sentences){
//     let max = str.split(' ').length;
//     maxwords = Math.max(max,maxwords);
// }
// console.log(maxwords);

//minimum requirement for the palindrome
// let str = "abcd";
// let i=0;
// let count=0;
// let j=str.length-1;
// let cut=j;
// while(i<=j){
//     if(str.charAt(i)===str.charAt(j)){
//         i++;
//         j--;
//     }
//     else{
//         count++;
//         i=0;
//         j=--cut;
//     }
// }

// console.log(count);

//abstraction of the words
// let str = "abc334v44d"
//  let ans=[];
//  for(let i=0;i<str.length;i++){
//      let ascii=str.charCodeAt(i);
//      while(ascii>=48 && ascii<=57){
//         let j=i;
//         while(str.charCodeAt(j)>=48 && str.charCodeAt(j)<=57){
//             j++;
//         }
//         ans.push(str.substring(i,j));
//         i=j;
//      }
//  }
//  console.log(ans);



//failed student problem remaining




