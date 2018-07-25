<html>

<head>

<title>date</title>

</head>

<body bgcolor="yellow">

<h2>Tap on click button to display date</h2>

<p id="demo">time and date </p>

<button onclick="getdate()">Date is</button>

<script>
function getdate(){
var d=new Date();
document.getElementById("demo").innerHTML=d;
}
</script>

</body>

</html>