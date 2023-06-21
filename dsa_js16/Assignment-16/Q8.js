//Complexity--
//Time complexity: O(n)
//Auxiliary space: O(n)

	
	// Function to fill left smaller element for every element
	function leftSmaller(arr,n,SE)
	{
		// Create an empty stack
		let S=[]
		
		// Traverse all array elements
		for (let i = 0; i < n; i++)
		{
			// Keep removing top element from S while the top element is greater than or equal to arr[i]
			while (S.length!=0 && S[S.length-1] >= arr[i])
			{
				S.pop();
			}

			// Store the smaller element of current element
			if (S.length!=0)
			{
				SE[i] = S[S.length-1];
			}
			// If all elements in S were greater than arr[i]
			else
			{
				SE[i] = 0;
			}

			// Push this element
			S.push(arr[i]);
		}
		
	}
	
	// Function returns maximum difference b/w Left & right smaller element
	function findMaxDiff(arr,n)
	{
		// To store left smaller elements
		let LS = new Array(n);
		for(let i=0;i<n;i++)
		{
			LS[i]=0;
		}
		// find left smaller element of every element
		leftSmaller(arr, n, LS);

		// find right smaller element of every element
		// first reverse the array and do the same process
		let RRS = new Array(n); // To store right smaller elements in
		for(let i=0;i<n;i++)
		{
			RRS[i]=0;
		}
		
		// reverse array
		reverse(arr);
		leftSmaller(arr, n, RRS);

		// find maximum absolute difference b/w LS & RRS
		// In the reversed array right smaller for arr[i] is
		// stored at RRS[n-i-1]
		let result = -1;
		for (let i = 0; i < n; i++)
		{
			result = Math.max(result, Math.abs(LS[i] - RRS[n - 1 - i]));
		}

		// return maximum difference b/w LS & RRS
		return result;
	}
	
	function reverse(a)
	{
		let i, k, n = a.length;
		let t;
		for (i = 0; i < Math.floor(n / 2); i++)
		{
			t = a[i];
			a[i] = a[n - i - 1];
			a[n - i - 1] = t;
		}
	}
	
// Example -
	// let arr=[2, 1, 8];

	// Example -2
	// let arr=[2, 4, 8, 7, 7, 9, 3];

    //Example -3
    let arr=[5, 1, 9, 2, 5, 1, 7];

	let n = arr.length;
	console.log("Maximum diff : " + findMaxDiff(arr, n));
