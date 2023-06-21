


	let q = [];
	
	// Function to check if given queue element can be sorted into another queue using a stack.

	function checkSorted(n)
	{
		let st = [];
		let expected = 1;
		let fnt;
	
		// while given Queue is not empty.
		while (q.length != 0)
		{
			fnt = q[0];
			q.shift();
	
			// if front element is the expected element
			if (fnt == expected)
				expected++;
	
			else
			{
				// if stack is empty, push the element
				if (st.length == 0)
				{
					st.push(fnt);
				}
	
				// if top element is less than element which need to be pushed, then return false.
				else if (st.length != 0 &&
						st[st.length - 1] < fnt)
				{
					return false;
				}
	
				// else push into the stack.
				else
					st.push(fnt);
			}
	
			// while expected element are coming from stack, pop them out.
			while (st.length != 0 &&
				st[st.length - 1] == expected)
			{
				st.pop();
				expected++;
			}
		}
		
		// if the final expected element
		// value is equal to initial Queue
		// size and the stack is empty.
		if ((expected - 1) == n && st.length == 0)
			return true;
	
		return false;
	}
	
    ///Example  -1
	// q.push(5);
	// q.push(1);
	// q.push(2);
	// q.push(3);
	// q.push(4);

    //Example  -2
    q.push(5);
	q.push(1);
	q.push(2);
	q.push(6);
	q.push(3);
	q.push(4);

	let n = q.length;

	if (checkSorted(n))
	console.log("Yes");
	else
	console.log("No");
