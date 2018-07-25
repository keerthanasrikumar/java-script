<html>

<head>

<title> JS VALIDATION FOR WEBPAGE</title>

<script>
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}
</script>

</head>

<body>

<h1> js validation for webpage</h1>


<form name="myForm" action="/action_page.php"
onsubmit="return validateForm()" method="post">
Name: <input type="text" name="fname">
<input type="submit" value="checkfield">
</form>






<label for="numb">contact number:</label>


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
</script><br><br>







<label for="numb">Address:</label>



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
</script><br><br>






<script>
function validateForm() {
    var x = document.forms["form"]["email"].value;
    var at = x.indexOf("@");
    var dot = x.lastIndexOf(".");
    if (at<1 || dot<at+2 || dot+2>=x.length) {
        alert("Please enter a valid e-mail address");
    }
	else{alert(" logged in successfully ");}
}
</script>



<body>



<form name="form"  >

Email: <input type="text" name="email">

<button onclick="validateForm()">checkfield</button>

</form>





<body>


<label> Gender:</label>

<select id="Gender"  >

<option value="none">NONE</option>

<option value=male">male</option>
<option value="female">female</option>
<option value="transgender">transgender</option>
</select>
<button onclick="mystate()">checkfield</button>
<script>
function mystate(){
var m=document.getElementById("state").value;
if(m =="none"){alert("Please select a option")}}
</script><br><br>
<button type="button" onclick="submit">submit</button>
</body>
</html>
