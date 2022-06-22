function chkname() {
	var myname = f.name;
	var pos = myname.value.search(
		/^[A-Z][a-z]+ ?[A-Z][a-z]+ ?[A-Z]\.?$/);
	if (pos != 0)
		{
		alert("the name you entered (" + myname.value + ")is not in the correct form . /n" + "the correct form is :" + "last name _ first name _middle-initial /n" + "please go back and fix your name");
	myname.focus();
	
	return false;
}
	else
	return
	true;
	
}
function chknum() {
	
	var x = f.number;
	
	if (f.number.value!=f.number.value*1) {
		alert("error input the number");
		x.focus();
		return false;
	}
	else 
		return true;
	
	
	
}
function chkdate()
{
	var x = f.date;
	var serch = x.value.search(/^\d{2}-\d{2}-\d{4}$/);
	if (serch != 0) {
		alert("error input date example 22-22-2022");
		x.focus();
		return false;
	}
	else 
		return true;
	
	}

function chknumphon()
{
	
	var x = f.numberph;
	var serch = x.value.search(/^\d{3}\d{3}\d{4}$/);
	if (serch != 0) {
		alert("error input the 10number");
		x.focus();
		return false;
	}
	else 
		return true;
	
	
	}
function chkemail() {
	var x = f.email.value;
	var atpos = x.indexOf("@");
	var dotpos = x.lastIndexOf(".");
	if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
		alert("error input email");
		return false;
	}
	else
		return true;
}

 function chkd()
 {
	 if (f.kd.value == f.kd.value * 1) {
		 alert("input the text")
		 f.kd.focus();
		 return false;
	 }
	 else
		 return true;

 }

function send()
{
	 var s = document.getElementById("name");
	location.href = "result.html";
	encodeURI(s.value);
}
 let submitButton = document.getElementById("submit-button");
        let userInput = document.getElementById("user-input");
        let canvas = document.getElementById("canvas");
        let reloadButton = document.getElementById("reload-button");
        let text = "";

        //Generate Text
        const textGenerator = () => {
            let generatedText = "";
            /* String.fromCharCode gives ASCII value from a given number */
            // total 9 letters hence loop of 3
            for (let i = 0; i < 3; i++) {
                //65-90 numbers are capital letters
                generatedText += String.fromCharCode(randomNumber(65, 90));
                //97-122 are small letters
                generatedText += String.fromCharCode(randomNumber(97, 122));
                //48-57 are numbers from 0-9
                generatedText += String.fromCharCode(randomNumber(48, 57));
            }
            return generatedText;
        };

        //Generate random numbers between a given range
        const randomNumber = (min, max) =>
            Math.floor(Math.random() * (max - min + 1) + min);

        //Canvas part
        function drawStringOnCanvas(string) {
            //The getContext() function returns the drawing context that has all the drawing properties and functions needed to draw on canvas
            let ctx = canvas.getContext("2d");
            //clear canvas
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            //array of text color
            const textColors = ["rgb(0,0,0)", "rgb(130,130,130)"];
            //space between letters
            const letterSpace = 150 / string.length;
            //loop through string
            for (let i = 0; i < string.length; i++) {
                //Define initial space on X axis
                const xInitialSpace = 25;
                //Set font for canvas element
                ctx.font = "20px Roboto Mono";
                //set text color
                ctx.fillStyle = textColors[randomNumber(0, 1)];
                ctx.fillText(
                    string[i],
                    xInitialSpace + i * letterSpace,
                    randomNumber(25, 40),
                    100
                );
            }
        }

        //Initial Function
        function triggerFunction() {
            //clear Input
            userInput.value = "";
            text = textGenerator();
            console.log(text);
            //Randomize the text so that everytime the position of numbers and small letters is random
            text = [...text].sort(() => Math.random() - 0.5).join("");
            drawStringOnCanvas(text);
        }

        //call triggerFunction for reload button
        reloadButton.addEventListener("click", triggerFunction);

        //call triggerFunction when page loads
        window.onload = () => triggerFunction();

        //When user clicks on submit
        submitButton.addEventListener("click", () => {
            //check if user input  == generated text
            if (userInput.value === text) {
                alert("Success");
            } else {
                alert("Incorrect");
                triggerFunction();
            }
        });