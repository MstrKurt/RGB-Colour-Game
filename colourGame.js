var numSquares = 6;
var colour = [];
var pickedColour;
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById('colourDisplay');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init()
{
	//mode button event listeners
	setupModeButtons();
	setupSquares();
	reset();
}

function setupSquares()
{
	for(var i=0; i<squares.length;i++)
	{
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
		//grab colour of clicked square
		var clickedColour = this.style.backgroundColor;
		console.log(clickedColour, pickedColour);
		//compare colour to pickedColour
		if(clickedColour === pickedColour)
		{
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColours(clickedColour);
			h1.style.backgroundColor = clickedColour;
		} 
		else
		{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again";
		}

		});
	}
}

function setupModeButtons()
{
	for(var i = 0; i < modeButtons.length; i++)
	{
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;		//ternary operator (short if statement)
			reset();

		});

	}	
}

function reset(){
	colour = generateRandomColours(numSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colours";
	messageDisplay.textContent = "";
	for(var i=0; i<squares.length;i++)
	{
		if(colour[i])
		{
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colour[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
		
	}
}

resetButton.addEventListener("click", function(){
	reset();
});

colourDisplay.textContent = pickedColour;



function changeColours(colourIn)
{
	for(var i=0; i<colour.length; i++)
	{
		squares[i].style.backgroundColor = colourIn;
	}
	
	
}

function pickColour()
{
	var random = Math.floor(Math.random() * colour.length);
	return colour[random];
}

function generateRandomColours(num)
{
	var arr = [];

	for(var i = 0; i < num; i++)
	{
		arr.push(randomColour());
	}

	return arr;
}

function randomColour()
{
	//pick red from 0-255
	var r = Math.floor((Math.random()) * 256);
	//pick green from 0 to 255
	var g = Math.floor((Math.random()) * 256);
	//pick blue from 0 to 255
	var b = Math.floor((Math.random()) * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}