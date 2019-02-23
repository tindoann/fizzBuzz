/* Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print 'Fizz', for multiples 
of 5 print 'Buzz'. For numbers which are multiples of both 3 and 5, print 'FizzBuzz'. */ 


// The order matters - keep it simple and functional 
for (let i=1; i <= 100; i+=1){
	// covers numbers divisible by 15
	if (i % 3 === 0 && i % 5 === 0) { 
		console.log('FizzBuzz'); 
	// covers numbers divisible by 3 
	} else if (i % 3 === 0) {
		console.log('Fizz'); 
	// covers numbers divisible by 5
	} else if (i % 5 === 0) {
		console.log('Buzz'); 
	} else {
		console.log(i); 
	}
}

