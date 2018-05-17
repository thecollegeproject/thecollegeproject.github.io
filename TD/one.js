var leftBar=document.getElementById('block');
var leftBar1=document.getElementById('copy1').innerHTML;

var count=0;
var dcount=0;
var down=0;

function menu()

{
    var threerp =document.getElementById('threerp');
    var one1= leftBar.style.width;
    if(count%2==0)
        {
    leftBar.innerHTML=leftBar1;
    leftBar.style.width="75%";
    leftBar.style.padding="10px";
    leftBar.style.border="";
    leftBar.style.backgroundColor="white";
    leftBar.style.marginLeft="-12px";
    leftBar.style.boxShadow="2px 2px 14px 1px grey";
    threerp.src="back.png";   
        }
    else{
        leftBar.style.width="11px";
        leftBar.innerHTML='';
        leftBar.style.border="none";
        leftBar.style.backgroundColor="transparent";
        leftBar.style.boxShadow="";
        threerp.src="three.png";
    }
    count++;   
}


function menu1()

{
    var one2= leftBar.style.width;
    if(one2=="11px")
        {
    leftBar.innerHTML=leftBar1;
    leftBar.style.width="75%";
    leftBar.style.padding="10px";
    leftBar.style.border="2px solid black";
    leftBar.style.backgroundColor="white";
    leftBar.style.marginLeft="-12px";
             leftBar.style.boxShadow="2px 2px 14px 1px grey";
            count++;
        }
}


function allUnset()
{
   
   var one1= leftBar.style.width;
    var cl=document.getElementById('cList');
    var cll=cl.style.height;
    
    var s=one1=="75%";
    if(s)
        {
            menu();
        }
    var c=cll=="20px";
    if(!c)
        {
           
            showCompleted();
             
        }
}

function td()
{
 
    var item=document.getElementById('listItem');
      
var inputTD=item.value;
    
    var olList =document.getElementById('toDoList');
    if(inputTD!='')
        {
            var new1 = document.createElement('li');
            new1.innerHTML=inputTD+"<button id='cross' onclick=rm(this) style='float:right'>x</botton>";
            olList.appendChild(new1);
            item.value='';
        }
  
}

function rm(e)
{
    var co =e.parentElement;
    e.remove();
   var po=co.textContent;
    var ol =document.getElementById('completedList');
   down=down+25;
    var new1 = document.createElement('li');
            new1.innerHTML=po+"<button id='restore' onclick=restore(this) style='position:absolute;left:80vw;top:'"+down+"'>R</botton>";
            ol.appendChild(new1);
     co.remove();
    
}

function etd(event)
{
    if(event.keyCode == 13)
        {
            td();
        }
}

function showCompleted()
{
    if(dcount%2!=0)
        {
    var cl=document.getElementById('cList');
    cl.style.height=down+20+"px";}
    else
        {
              var cl=document.getElementById('cList');
    cl.style.height="20px";
        }
    dcount++;
}



function restore(e)
{
  var obj=e.parentElement;
   e.remove();
    var inputTD=obj.textContent;
    
            var olList =document.getElementById('toDoList');
            var new1 = document.createElement('li');
            new1.innerHTML=inputTD+"<button id='cross' onclick=rm(this) style='float:right'>x</botton>";
            olList.appendChild(new1);
            obj.remove();
    down=down-25;
  
}
























//#block
//{
//    width:11px;
//    position:fixed;
//   margin-left: -6px;
//    margin-bottom: -102px;
//    top: 0;
//    margin-top:0px;
//   
//    height: 100vh;
//    transition-duration: .4s;
//    z-index: 2;
//    
//    
//}

//#block:hover
//{
//    padding: 10px;
//    border: 2px solid black;
//height:100vh;
//    width: 75%;
//    
//    
//    margin-top: -2px;
//    background-color: red;
//    transition-duration: .4s;
//    opacity: 0.4;
///*display: none;*/
//}