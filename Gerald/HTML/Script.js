function Creview()
{
	console.log(C);
	document.getElementById("C").style.display = "block";
	document.getElementById("J").style.display = "none";
	document.getElementById("A").style.display = "none";
}

function Areview()
{
	console.log(A);
	document.getElementById("C").style.display = "none";
	document.getElementById("J").style.display = "none";
	document.getElementById("A").style.display = "block";
}

function Jreview()
{
	console.log(J);
	document.getElementById("C").style.display = "none";
	document.getElementById("J").style.display = "block";
	document.getElementById("A").style.display = "none";
}
