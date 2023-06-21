//Complexity--
//Time complexity: O(n)
//Auxiliary space: O(1)

//WAP
function removeConsecutiveSame(v)
{
	let n = v.length;

	// Start traversing the sequence
	for (let i = 0; i < n - 1;)
	{
	
		// Compare the current string with
		// next one Erase both if equal
		if (v[i] == (v[i + 1]))
		{
		
			// Erase function delete the element and
			// also shifts other element that's why
			// i is not updated
			v.splice(i, 1);
			v.splice(i, 1);

			// Update i, as to check from
			// previous element again
			if (i > 0) {
				i--;
			}

			// Reduce sequence size
			n = n - 2;
		}

		// Increment i, if not equal
		else {
			i++;
		}
	}

	// Return modified size
	return v.length;
}

// Driver Code

let v = [];


//Example-1
// v.push("ab");
// v.push("aa");
// v.push("aa");
// v.push("bcd");
// v.push("ab");

//Example-2
v.push("tom");
v.push("jerry");
v.push("jerry");
v.push("tom");

console.log(removeConsecutiveSame(v));
