<!DOCTYPE html>
<html>
<body><h1>if else in JS</h1>
<p>note: customers can check whether they can get gifts by entering their total bill amount:</p><br><br>
<p>Check for gifts:</p>
<input id="off" type="number" >
<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    var m=document.getElementById("off").value; 
    var greeting;
    if (m > 500) {
        greeting = "Gift generated";
    } else {
        greeting = "no gifts";
    }
    document.getElementById("demo").innerHTML = greeting;
}
</script>

</body>
</html>