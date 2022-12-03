// // // // Question 1 
// // //  let arr =[parseInt(prompt("Enter number") )] ;

// // // function sumDigit(arr){
// // //     let sum=0;
// // //     for(i = 0  ; i<arr.length ; i++){

// // //         sum=sum + (arr[i])


// // //     }
// // //     return sum
// // // }
// // // console.log(sumDigit(arr))




// // // function SumDigit(arr)
// // // {
// // // 	var sum = 0;
// // // 	while (arr != 0) {
// // // 		sum = sum + arr % 10;
// // // 		arr = parseInt(arr / 10);
// // // 	}
// // // 	return sum;
// // // }

// // // var n = parseInt(prompt("Enter number"));
// // // console.log(getSum(arr));




// // //                 //Question 2


// // // function reversDigits(num)
// // //     {
// // //         let str = num.toString().split("").reverse().join("");
         
 
// // //         num = parseInt(str);
 
 
// // //         return str;
// // //     }
 
     
// // //     let num = parseInt(prompt("Enter number to reverse"));
// // //     console.log("Reverse of no. is " + reversDigits(num));



// //               //question 3
	


// //               function reversDigits(num)
// //               {
// //                   var str = num.toString().split("").reverse().join("");
                   
           
// //                   num = parseInt(str);
           
           
// //                   return str;
                  
// //               }
           
               
// //               var num = parseInt(prompt("Enter number to reverse"));
// //               console.log("Reverse of no. is " + reversDigits(num));

// //               function isPalindrome(reversDigits){
// //                 if (num == str)
// //                 console.log("True")
// //                 else
// //                 console.log("False")
// //               } 

    



// //               //Question 4



	// function chkPair(A , size , x) {
	
	// 	for (i = 0; i < (size - 1); i++) {
	// 		for (j = (i + 1); j < size; j++) {
	
	// 			if (A[i] + A[j] == x) {

	// 				return true;
	// 			}
	// 		}
	// 	}

	// 	return false;
	// }

	// 	let A =  [ 0, -1, 2, -3, 1 ];
	// 	let x = parseInt(prompt("Enter number"));
	// 	let size = A.length;

	// 	if (chkPair(A, size, x)) {
	// 		console.log("Yes " + x);
	// 	}
	// 	else {
	// 		console.log("No  " + x);

 	// }



   // another answer to Question 4


//    var x=prompt("num: ");
// var y=prompt("search: ")

// if (x.includes(y)) {
    
// console.log("true")
// console.log(x.search(y));
// }

                 
//                          //Question 5

// var x=prompt("Array :");
// var y=prompt("remove: ")



// var xRemove=x.split("");
    
// var s=xRemove[y];
// var af=xRemove.splice(y-1);



// console.log(after);




         // Question 6



        // var n = prompt("Ener Word")
        // var length = n.length
        
        // if(n.length<2){
        //     console.log(" error  ")

            
        // }
        // else{
        //     var slice_t1 = n.slice(0,2)
        
        // var slice_t2 = n.slice(-2)
        
        // console.log(slice_t1+slice_t2)
        // }



                // Question 7

                



                // let str = prompt("Enter Word");
                // let z = 0;
                // while (str[z] == 'z') {
                //   z++;
                // }
                
                // let o = z;
                // while (str[o] == 'o') {
                //   o++;
                // }
                
                // console.log(z * 2 == o - z ? "yes" : "no")



               // Question Bonus

var a = parseInt(prompt("Ener A"))
var b = parseInt(prompt("Ener B"))
var c = parseInt(prompt("Ener C"))
var d = parseInt(prompt("Ener D"))

if((a+b*c )==d){
     console.log("yes")
}
 else if ((a-b+c)==d){
    console.log("yes")
}
  else if ((a*b+c)==d){
    console.log("yes")
}
   else if ((a*b-c)==d){
    console.log("yes")
}
    else if ((a+b-c)==d){
        console.log("yes")
    }
     else if ((a-b*c)==d){
        console.log("yes")
    }
      
else{
    console.log("no")
}

                






        
        




               


