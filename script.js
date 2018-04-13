<!DOCTYPE html>
<html>
<head>
	<title>Profile</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">

	<script src="script.js"></script>
	<link rel="stylesheet" href="style.css">
	<style>
        .user{
    position: absolute;width: 140px;height: 140px;border-radius: 80px;background-image: url(images/login1.png);background-size: contain;top: 190px;left:30%;border: 2px solid white;z-index: 0;
              transition-duration: .7s;
        
        }
        .usern
        {
            color: white; position: absolute;left: 110%;top: 19%;z-index: 0;
            transition-duration: .7s;
        }
        @media only screen and (max-width:600px)
        {
            .usern
        {
            color: #075060; position: absolute;left:5%;top: 99%;z-index: 0;
            transition-duration: .7s;
            transform: scale(1.50) ;
            
        } 
            .user
            {
                left: 30%;
                transform: scale(.75) rotateY(360deg);
                 transition-duration: .7s;
            }
        }
    </style>
</head>
<body onload="option2(),slidestop(),togglemenu()">
<div id="nav" class="nav">
	<a id="hide" onclick="togglemenu()"><img id="logo1" src="images/three.png" alt="Logo"></a>
	<a id="tg" class="drop" href=""><img id="logo" src="images/mainlogo5.png" alt="Logo"></a>
	<a id="tg1" class="drop" href="index.html" >Home</a>
	<a id="tg2" class="drop" href="news.html">News</a>
	<a id="tg3" class="drop" href="forum.html" >Forum</a>
	<a id="tg6" class="drop" href="">About Us</a>
	<a id="tg4" class="drop" href="sign.html" style="color: #00ffcb">Username</a>
	<a href="" class="drop" id="tg5">Activity</a>
	<input list="search" placeholder="" title="Search">
	<datalist id="search">
	   <option ><i>Redmi 2 Prime</i></option>
    <option value="Redmi 3"></option>
    <option value="Redmi 3 Prime"></option>
    <option value="Redmi 3s"></option>
    <option value="Redmi 3s Prime"></option>
    <option value="Redmi 4"></option>
	</datalist>
</div>
<div class="filler"></div>
    
    <div style="margin-top: 30px">
        <div class="container" style="height: 160px; background:linear-gradient(to bottom right,brown,brown,brown,red,brown)"></div>
        <div class="container user" ><h2 class="usern">Username</h2></div>
        
        <div class="container procon" style="height: auto;padding-bottom: 30px; background-color:white;margin-top: 2px;">
            <div class="flex" >
                <div class="container profile flex2" style="margin-top: 100px"><button>About</button><button>Activity</button>
                <button>New</button></div>
                <div class="container profile2"><i class="material-icons" style="float: right;cursor: pointer;">&#xe150;</i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis omnis id fugiat temporibus soluta, velit nam itaque culpa amet delectus placeat, quisquam alias, error natus mollitia pariatur excepturi minus. Aliquid. <br>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis deposition: absolute;width: 140px;height: 140px;border-radius: 80px;background-image: url(images/login1.png);background-size: contain;top: 190px;left:30%;border: 2px solid white;z-index: 0;serunt est odio repellat iusto asperiores libero molestias, error, laudantium iure tempore dignissimos quos magni, doloribus sapiente expedita optio esse dicta! <br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum porro libero optio, officia suscipit molestias necessitatibus voluptas aspernatur harum nisi voluptates praesentium esse architecto aliquid minus, consequatur nulla repellat natus!</div>
            </div>
        </div>
    </div>
    
    
    
    
<div id="footer">
	<a href="">Contact Us</a>
	<a href="">About Us</a>
	<a href="index.html">Home</a>
	<a href="" id="fb" title="Facebook Page"></a>
	<a href="" id="twitter" title="Twitter Handle"></a>
	<a href="" id="github" title="Github"></a>
</div>
</body>
</html>
