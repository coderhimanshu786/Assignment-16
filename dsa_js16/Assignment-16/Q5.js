//Complexity--
//Time complexity: O(logn)
//Auxiliary space: O(logn)

		// Stack to maintain order of digits
		let st = [];

		// Function to push digits into stack
		function push_digits(number)
		{
			while (number != 0)
			{
				st.push(number % 10);
				number = Math.floor(number / 10);
			}
		}

		// Function to reverse the number
		function reverse_number(number)
		{
		
			// Function call to push number's digits to stack
			push_digits(number);

			let reverse = 0;
			let i = 1;

			// Popping the digits and forming the reversed number
			while (st.length != 0) {
				reverse = reverse + (st[st.length - 1] * i);
				st.pop();
				i = i * 10;
			}

			// Return the reversed number formed
			return reverse;
		}

		// Example  1
		// let number =  365;

        //Example  2
        let number =  6899;

		// Function call to reverse number
		console.log(reverse_number(number));
