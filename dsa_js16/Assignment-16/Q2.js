//Complexity--
//Time complexity: O(n^2)
//Auxiliary space: O(n)

	// This function return the sorted stack
	function sortstack(input)
	{
		let tmpStack = [];
		while (input.length > 0)
		{
			// pop out the first element
			let tmp = input.pop();

			// while temporary stack is not empty and top of stack is lesser than temp
			while (tmpStack.length > 0 && tmpStack[tmpStack.length - 1] < tmp)
			{
				// pop from temporary stack and push it to the input stack
				input.push(tmpStack[tmpStack.length - 1]);
				tmpStack.pop()
			}

			// push temp in temporary of stack
			tmpStack.push(tmp);
		}
		return tmpStack;
	}
	
    //Example  1
	// let input = [];
	// input.push(34);
	// input.push(3);
	// input.push(31);
	// input.push(98);
	// input.push(92);
	// input.push(23);

    //Example  2
    let input = [];
	input.push(3);
	input.push(5);
	input.push(1);
	input.push(4);
	input.push(2);
	input.push(8);

	// This is the temporary stack
	let tmpStack = sortstack(input);
	console.log("After sort it in ascending order :");

	while (tmpStack.length > 0)
	{
		console.log(tmpStack[tmpStack.length - 1] + " ");
		tmpStack.pop();
    }
