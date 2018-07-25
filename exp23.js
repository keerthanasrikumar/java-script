<html>

<head>

<title> js Length Check</title>

</head>

<body>
<h1> check for length of the characters in textbox</h1>

<label for="word">Enter a Sentence:</label>



<input id="word">



<button type="button" onclick="myFunction()">checkfield</button>





<script>
function myFunction() {
    var x, text;
    // Get the value of the input field with id="numb"
    x = document.getElementById("word").value;
    if (x.length>10) {
        text = "Input is too large";
    } else {
        text = "Input OK";
    }
    alert(text);
}
</script>



</body>

</html> 