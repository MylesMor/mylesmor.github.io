	// When the enter keyboard is pressed, do the same as a click on the enter button.
	document.getElementById("myText").addEventListener("keyup", function(event) {
    	event.preventDefault();
    	if (event.which === 13) {
        	document.getElementById("enter").click();
    		}
		});
		
		
		function countdown() {
		var countDownDate;
		
			
		var month = new Date().getMonth()+1;
		var day = new Date().getDate();
		
		// Runs when button is clicked or enter is pressed.
		document.getElementById('enter').onclick = function() {
			
			
			// Gets the current date and year in a standard format.
			var year = new Date().getYear()-100 + 2000;
   			var input = document.getElementById("myText").value.toLowerCase();
			
			// Runs through all the special cases where the date and background should be set to something specific.
			switch(input.replace(/\s+/g, "")) {
				
				// All the different cases a user could type to get the same result.
				case "halloween":
				case "october31":
				case "31october":
				case "31/10/" + year:

					
					// If the Halloween for this year has already passed, add one to the year.
					if (month == 11 || 12) {
					year = year + 1;
				}
					
				// Set the new date for the timer to count to, and also set the background.
				countDownDate = new Date("October 31, " + year + " 00:00:00");
				document.getElementById("image").style.opacity = "1";
				document.getElementById("image").src = "images/halloween.jpg";
	
				break;
				
				case "christmas": 
				case "xmas": 
				case "christmasday":
				case "december25":
				case "25december":

					
				if (month == 12 && day >= 25) {
					year = year + 1;
				}
				countDownDate = new Date("December 25, " + year + " 00:00:00");
				document.getElementById("image").style.opacity = "1";
				document.getElementById("image").src = "images/christmas.jpg"

					break;

			
				case "newyear'sday": 
				case "newyear": 
				case "newyear's": 
				case "newyears": 
				case "1january": 
				case "january1":
					
					// A year is always added as the new year will always be in the next year.
					year = year + 1;
				
				countDownDate = new Date("January 1, " + year + " 00:00:00");
				document.getElementById("image").src = "images/fireworks.jpg";
				document.getElementById("image").style.opacity = "1";

					break;

				case "valentine'sday":
				case "valentines":
				case "valentine's":
				case "valentinesday":
				case "valentine":

					
					if (month >= 2 && day >= 14) {
						year = year + 1;
					}
					
				countDownDate = new Date("February 14, " + year + " 00:00:00");
				document.getElementById("image").style.opacity = "1";
				document.getElementById("image").src = "images/valentines.jpg";

				break;
					
				case "stpatrick'sday":
				case "stpatricksday":
				case "stpaddys":
				case "stpaddy'sday":
				case "stpaddy's":
					
					if (month >= 3 && day >= 17) {
						year = year + 1;
					}
					
				countDownDate = new Date("March 17, " + year + " 00:00:00");
				document.getElementById("image").style.opacity = "1";
				document.getElementById("image").src = "images/patrick.jpg";
				
				break;
					
				case "aprilfools":
				case "aprilfool's":
				case "april1":
				case "1april":
					
					if (month >= 4 && day >= 1) {
						year = year + 1;
					}
				
				countDownDate = new Date("April 1, " + year + " 00:00:00");
				document.getElementById("image").style.opacity = "1";
				document.getElementById("image").src = "images/april.jpg";
				
				break;
					
				// The default case - what happens when a user enters their own date.
				default:
					
					// Splits the input at every slash, leading to list with day, month and year.
					var slashdatelist = input.split("/");
					
					// Checks that the day, month and year are all integers.
					if (!((isNaN(parseInt(slashdatelist[0]))) && isNaN(parseInt(slashdatelist[1])) && isNaN(parseInt(slashdatelist[2]))  )) {
						
						// If the length of the year value is 4, put it straight into new Date().
						if (slashdatelist[2].length == 4) {
							countDownDate = new Date(slashdatelist[1] + " " + slashdatelist[0] + ", " + slashdatelist[2]);
						}
						
						// Else calculate the year by adding 2000 to their entry.
						else {
							var yearint = parseInt(slashdatelist[2])+2000;
							countDownDate = new Date(slashdatelist[1] + " " + slashdatelist[0] + ", " + yearint);

							console.log(countDownDate)
						}
						
					} else {
						
						// Else if they don't follow that date format, attempt to enter it anyway, if it doesn't work it will ask to use the correct format.
						countDownDate = new Date(input);
						
					}
				
				// Sets the background to the default mountain image.
				document.getElementById("image").style.opacity = "1";
				document.getElementById("image").src = "images/mountain.jpg";





				
			}
			
			// This code runs once every second to calculate the time correctly.
			var x = setInterval(function() {
			
			// Gets the current time.
  			var now = new Date().getTime();
			
			// Calculates the distance between the given date and the current time.
  			var distance = countDownDate - now;
			
			// Calculates the days, hours, minutes and seconds.
  			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  			var seconds = Math.floor((distance % (1000 * 60)) / 1000);
			
			// If the format is incorrect, display this message.
			if (isNaN(days)) {
			  		document.getElementById("time").innerHTML = "Please follow the correct format!"; 
			} 
			// If the date is in the past, display this message.
			else if (seconds < 0) {
			  		document.getElementById("time").innerHTML = "That date is in the past!"; 
			}
			// Else, display the countdown.
			else {
						document.getElementById("time").innerHTML = days + "d " + hours + "h "
  				+ minutes + "m " + seconds + "s ";			
			}
			
			
		}, 1000);
			
			
		}
		
		// Starting 
		document.getElementById("time").innerHTML = "...";
		
		}
		
		
		countdown()
		
		document.getElementById("cover").style.backgroundImage = "url('images/mountain.jpg')";
		document.getElementById("cover").style.backgroundSize = "cover";
		document.getElementById("cover").style.setProperty("-webkit-transition", "background-image 1s ease-in-out");
		document.getElementById("cover").style.backgroundRepeat = "no-repeat";