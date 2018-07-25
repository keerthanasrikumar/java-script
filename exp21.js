<html>

<head>

<title> JS Alphabet Check</title>

</head>

<body>
<h1>check for only alphabets in textbox</h1><br><br>

<label for="numb">Enter a Word</label>



<input id="word">



<button type="button" onclick="myFunction()">checkfield</button>





<script>
function myFunction() {
    var x, text;
    // Get the value of the input field with id="numb"
    x = document.getElementById("word").value;
    if (!x.match(/^[a-zA-Z]+$/)) {
        text = "Input should be letters";
    } else {
        text = "Input OK";
    }
    alert(text);
}
</script>



</body>

</html> 
