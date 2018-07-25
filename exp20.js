<html>

<head>

<title> JS Number Check</title>

</head>

<body>
<h1>check for only numbers in textbox</h1><br><br>

<label for="numb">Enter a number</label>



<input id="numb">



<button type="button" onclick="myFunction()">checkfield</button>





<script>
function myFunction() {
    var x, text;
    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) ) {
        text = "Input should be numbers";
    } else {
        text = "Input OK";
    }
    alert(text);
}
</script>



</body>

</html> 