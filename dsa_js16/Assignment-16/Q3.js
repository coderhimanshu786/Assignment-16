//Complexity--
//Time complexity: O(n)
//Auxiliary space: O(n)


//let make empty stack to input elements after deletion
//Example  -1
// let stack = [];
// stack.push('1');
// stack.push('2');
// stack.push('3');
// stack.push('4');
// stack.push('5');
//----

//Example  2
let stack = [];
stack.push('1');
stack.push('2');
stack.push('3');
stack.push('4');
stack.push('5');
stack.push('6');
//----

let v = [];

while(stack.length > 0){
	v.push(stack[0]);
	stack.shift();
}
	
let n = v.length;

if(n%2==0){
	let target = Math.floor(n/2);
	for(let i = 0; i < n; i++){
		if(i==target){
			continue;
		}
	stack.push(v[i]);
	}
}
else{
	let target = Math.floor(n/2);
	for(let i = 0; i < n; i++){
		if(i==target){
			continue;
		}
		stack.push(v[i]);
	}
}

console.log("Stack after deletion of middle: ");

while (stack.length > 0){
	let p = stack[0];
	stack.shift();
	console.log(p + " ");
}
