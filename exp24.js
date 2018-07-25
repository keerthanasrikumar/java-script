<html>

<head>

<title> JS VALIDATION FOR SELECTION MODE</title>

</head>

<body>

<h1> JS validation for selection mode</h1>

<label>Select your state:</label>

<select id="state"  >

<option value="none">NONE</option>

<option value="Tamilnadu">Tamilnadu</option>

<option value="Kerala">Kerala</option>

<option value="Karnataka">Karnataka</option>

<option value="Andhrapradesh">Andhrapradesh</option>

</select><br><br><br><br>

<button onclick="mystate()">Submit</button>

<script>
function mystate(){
var m=document.getElementById("state").value;
if(m =="none"){alert("Please select a option")}}
</script>

</body>

</html>