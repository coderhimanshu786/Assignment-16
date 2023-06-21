//Complexity--
//Time complexity: O(n)
//Auxiliary space: O(n)
	
	//NFG function to find the "next greater frequency" element 
	function NFG(a, n, freq)
	{

		// stack data structure to store the position of array element
		let s = [];
		s.push(0);

		// res to store the value of next greater frequency element for each element
		let res = new Array(n);
		for (let i = 0; i < n; i++)
			res[i] = 0;

		for (let i = 1; i < n; i++)
		{
		
			/*frequency of the element which is pointed by the top of stack is greater than frequency of the current element then Push the current position i in stack*/

			if (freq[a[s[s.length - 1]]] > freq[a[i]])
				s.push(i);
			else
			{
			
				/*If the frequency of the element which is pointed by the top of stack is less than frequency the current element, then0 Pop the stack and continuing Popping until the above condition is true while the stack is not empty*/

				while (freq[a[s[s.length - 1]]]
						< freq[a[i]]
					&& s.length > 0)
				{
					res[s[s.length - 1]] = a[i];
					s.pop();
				}

				// now Push the current element
				s.push(i);
			}
		}

		while (s.length > 0)
		{
			res[s[s.length - 1]] = -1;
			s.pop();
		}
		console.log("[");
		for (let i = 0; i < n - 1; i++)
		{
		
			// Print the res list containing next greater frequency element
			console.log(res[i] + ", ");
		}
		console.log(res[n - 1] + "]");
	}
	

    //Example 1 
	// let a = [ 1, 1, 2, 3, 4, 2, 1 ];
	// let len = 7;
	// let max = Number.MIN_VALUE;

    //Example 2
    let a = [1, 1, 1, 2, 2, 2, 2, 11, 3, 3];
	let len = 10;
	let max = Number.MIN_VALUE;
	for (let i = 0; i < len; i++)
	{
	
	// Getting the max element of the array
	if (a[i] > max)
	{
		max = a[i];
	}
	}
	let freq = new Array(max + 1);

	for (let i = 0; i < max + 1; i++)
	freq[i] = 0;

	// Calculating frequency of each element
	for (let i = 0; i < len; i++)
	{
	freq[a[i]]++;
	}
	NFG(a, len, freq);
