function searching() {
	var filter,input,li,ul,a,i;
	input=document.getElementById("search2");
	filter=input.value.toUpperCase();
	ul=document.getElementById("myul");
	li=ul.getElementsByTagName("li");
	for(i = 0; i < li.length; i++)
	{
		a=li[i].getElementsByTagName("a")[0];
		if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display="";
		}
		else
		{
			li[i].style.display="none";
		}
	}
}
function option1()
{	
	var g=document.getElementById("myul");
	g.style.display="";
	g.style.transitionDuration=".7s";
	

}
function option2()
{	
	var h=document.getElementById("myul");
	
	h.style.display="none";
	h.style.transitionDuration=".7s";
	

}
