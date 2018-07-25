<html>

<head>

<title>Prompt</title>

</head>

<body>
<h1>login prompt in javascript</h1>

<button onclick="getname()">Click me to login</button>

<p id="name"></p>

<script>
function getname(){
var name=prompt("Enter your name");
if (name!= null){
document.getElementById("name").innerHTML=name+" has logged in successfully";
}
}
</script>

</body>

</html>