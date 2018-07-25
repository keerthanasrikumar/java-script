<html>

<head>

<title>Alphabet and number check in js</title>

</head>

<body>
<h1> check for only letters and numbers in the textbox</h1>

<label for="numb">Enter letters and numbers only</label>



<input id="word">



<button type="button" onclick="myFunction()">checkfield</button>





<script>
function myFunction() {
    var x, text;
    // Get the value of the input field with id="numb"
    x = document.getElementById("word").value;
    if (!x.match(/^[a-zA-Z0-9]+$/)) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    alert(text);
}
</script>



</body>

</html> 