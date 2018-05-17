var leftBar=document.getElementById('block');
var wrap;
var leftBar1=document.getElementById('copy1').innerHTML;
var myListInnerHtml;
var list02=document.getElementById('copy3').innerHTML;
var list01= document.getElementById('copy2').innerHTML;

var i=0,j=0,k=0;
var myList=[];
var myList1=[];
var myList2=[];


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
            if(olList.parentElement.id=="myList")
                {
                    myList[i]=inputTD;
                    i++;
                }
            else if(olList.parentElement.id=="list01")
                {
                    myList1[j]=inputTD;
                    j++;
                }
            else if(olList.parentElement.id=="list02")
                {
                    myList2[k]=inputTD;
                    k++;
                }
            else{
                
            }
        }
  
}

function rm(e)
{
    var id=e.parentElement.parentElement.parentElement.id;
    var co =e.parentElement;
    e.remove();
   var po=co.textContent;
    var ol =document.getElementById('completedList');
   down=down+25;
    var new1 = document.createElement('li');
            new1.innerHTML=po+"<button id='restore' onclick=restore(this) style='position:absolute;left:80vw;top:'"+down+"'>R</botton>";
            ol.appendChild(new1);
    
     co.remove();
    
     if(id=="myList")
                {
                   var a= myList.length;
    
 
    for(var x=0;x<a;x++)
        {
           if(myList[x]==po)
               {
                  myList.splice(x,1);
                   i--;
                   break;
               }
        }
                    
                }
            else if(id=="list01")
                {
                    var a= myList1.length;
    
 
    for(var x=0;x<a;x++)
        {
           if(myList1[x]==po)
               {
                   myList1.splice(x,1);
                   j--;
                   break;
               }
        }
                 
                }
            else if(id=="list02")
                {
                     var a= myList2.length;
    
 
    for(var x=0;x<a;x++)
        {
           if(myList2[x]==po)
               {
                   myList2.splice(x,1);
                   k--;
                   break;
               }
        }
                 
                }
            else{
                
            }
    
    
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
     if(olList.parentElement.id=="myList")
                {
                    myList[i]=inputTD;
                    i++;
                }
            else if(olList.parentElement.id=="list01")
                {
                    myList1[j]=inputTD;
                    j++;
                }
            else if(olList.parentElement.id=="list02")
                {
                    myList2[k]=inputTD;
                    k++;
                }
            else{
                
            }
            obj.remove();
    down=down-25;
  
}

function list1()
{

    wrap=document.getElementById('wrap');
    var chId=wrap.childNodes[3].id;
    
       if(chId=="myList")
        {
            myListInnerHtml=wrap.innerHTML;
        }
    else if(chId=="list01")
        {
            list01=wrap.innerHTML;
        }
    else if(chId=="list02")
        {
            list02=wrap.innerHTML;
        }
    else
        {
            
        }
    wrap.innerHTML=list01;
    allUnset();
}

function myLis()
{
    wrap=document.getElementById('wrap');
     var chId=wrap.childNodes[3].id;
    if(chId=="myList")
        {
            myListInnerHtml=wrap.innerHTML;
        }
    else if(chId=="list01")
        {
            list01=wrap.innerHTML;
        }
    else if(chId=="list02")
        {
            list02=wrap.innerHTML;
        }
    else
        {
            
        }

    wrap.innerHTML=myListInnerHtml;
    allUnset();
}


function list2()
{
    wrap=document.getElementById('wrap');
     var chId=wrap.childNodes[3].id;
    if(chId=="myList")
        {
            myListInnerHtml=wrap.innerHTML;
        }
    else if(chId=="list01")
        {
            list01=wrap.innerHTML;
        }
    else if(chId=="list02")
        {
            list02=wrap.innerHTML;
        }
    else
        {
            
        }

    wrap.innerHTML=list02;
    allUnset();
}

function displayArray()
{
    var a= myList.length;
    
 
    for(var x=0;x<a;x++)
        {
            document.getElementById('array').innerHTML=document.getElementById('array').innerHTML+"*"+myList[x];
        }
    var b= myList1.length;
    
     for(var y=0;y<b;y++)
        {
            document.getElementById('array').innerHTML=document.getElementById('array').innerHTML+" "+myList1[y];
        }
     var c= myList2.length;
     for(var z=0;z<c;z++)
        {
            document.getElementById('array').innerHTML=document.getElementById('array').innerHTML+" "+myList2[z];
        }
   // document.getElementById('array').innerHTML="hh";
    
}
//
//window.onbeforeunload = function() {
//    
//        return "Dus!";
//}



















