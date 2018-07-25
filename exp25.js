<html>

<head>

<title> JS VALIDATION FOR E-MAIL</title>

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

</head>

<body>

<h1> js email validation</h1><br><br>

<form name="form"  >

Email: <input type="text" name="email"><br><br><br>

<button onclick="validateForm()">Validate</button>

</form>

</body>

</html>