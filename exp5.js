<html>

<head>
<center>
<title> variables useage in javascript</title>

</head>

<body bgcolor="yellow">

<h1>Enter your marks:</h1>

<label for="m1"><b>Mathematics 1:</b></label><br><br><br>

<input type="number" id="m1"><br>



<label for="e1"><b>english:</b></label><br><br><br>

<input type="number" id="e1"><br>



<label for="p1"><b>physics:</b></label><br><br><br>

<input type="number" id="p1"><br>

<label for="c1"><b>chemistry:</b></label><br><br><br>

<input type="number" id="c1"><br><br><br><br>

<button onclick="result()">Get Result</button>

<script>
function result(){
var m1,e1,p1,c1;
m1=document.getElementById("m1").value;
m2=document.getElementById("e1").value;
m3=document.getElementById("p1").value;
m4=document.getElementById("c1").value;
document.write("Mathematics 1="+m1 );
document.write("english="+e1 );
document.write("physics="+p1 );
document.write("chemistry="+c1);}
</script>
</center>

</body>

</html>