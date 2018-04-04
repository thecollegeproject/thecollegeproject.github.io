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
	var myvar=setInterval(slide,3000);
	h.style.display="none";
	h.style.transitionDuration=".7s";
}


var count=0;
/*function slide() {

	if(count==0)
	{	
		document.getElementById("slideshow").style.backgroundImage="url(images/9.jpg)";
		count++;
		
	}
	else
	{
		if(count==1)
		{	
			document.getElementById("slideshow").style.backgroundImage="url(images/10.jpg)";
			count++;
		}
		else
		{
			
			document.getElementById("slideshow").style.backgroundImage="url(images/12.jpg)";
		count=0;
		}
	}
}*/
function slide(){
	switch(count)
	{
		case 0:
		document.getElementById("slideshow").style.backgroundImage="url(images/9.jpg)";
		break;
		case 1:
		document.getElementById("slideshow").style.backgroundImage="url(images/10.jpg)";
		break;
		case 2:
		document.getElementById("slideshow").style.backgroundImage="url(images/12.jpg)";
		break;
		default:
		document.getElementById("slideshow").style.backgroundImage="url(images/3.jpg)";
		count=-1;
	}
	count++;
}
