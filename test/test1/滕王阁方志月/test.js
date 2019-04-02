var i=0;
  function move(i)
  {
	  var ele=i%4;
	  var box=document.getElementById("change_box");
	  var array=box.getElementsByTagName("div");
	  if(ele>0){
	  array[ele-1].style.display="none";
	  }
	  if(ele==0){
		  array[3].style.display="none";
	  }
	  array[ele].style.display="block";
	  
	  
  }
  
 function change(){
	  i++;
	move(i);
  }
  function index(){
	  move(i);
	  window.setInterval(change, 3000);
  }
  
 /*
 下面是对头部菜单的下拉菜单进行处理 
 
 */
 //-----------------------------------------------------
 function drop_list_one(obj,flog){
	 
	 if(flog==1){
	   var ele=document.getElementById(obj);
	   ele.style.fontStyle="italic";
	   var divs=ele.getElementsByTagName("div");
		divs[0].style.display="block";  
	 }else if(flog==0){
		 var ele=document.getElementById(obj);
		 ele.style.fontStyle="";
		   var divs=ele.getElementsByTagName("div");
			divs[0].style.display="none";  
	 } 
		
 }
 /*
 function shrink_list(){
	 var ele=document.getElementById("list_one");
	   var divs=ele.getElementsByTagName("div");
		divs[0].style.display="none";       
 }
 */
 function change_tab(id){
	 
	 var click_box=document.getElementById(id);//这里拿到的是点击的div
	 
	 var click_parent=document.getElementById("top_display_list");
	 var click_boxs=click_parent.getElementsByTagName("div");
	 for(var j=0;j<click_boxs.length;j++){
		 click_boxs[j].style.backgroundColor="#00CC33";
		 click_boxs[j].style.fontStyle="italic";
		 click_boxs[j].style.fontSize="17px";
	 }
	 //关闭之前展开的box;
	 var div_displays=document.getElementById("div_display");
	 var boxs=div_displays.getElementsByTagName("div");
	for(var i=0;i<boxs.length;i++){
		boxs[i].style.display="none";
	}
	
	 //打开点击后需要打开的box
	 if(click_box.id=="click1"){
		boxs[0].style.display="block"; 
	 }
	 if(click_box.id=="click2"){
			boxs[1].style.display="block"; 
		 }
	 if(click_box.id=="click3"){
			boxs[2].style.display="block"; 
		 }
	 if(click_box.id=="click4"){
			boxs[3].style.display="block"; 
		 }
	 click_box.style.background="#FFCC00";
	 click_box.style.fontStyle="";
	 click_box.style.fontSize="";
 }
   function index1(){
	   var men=document.getElementById("menu");
	   men.style.fontStyle="italic";
   }
   function index1_alter(){
	   var men=document.getElementById("menu");
	   men.style.fontStyle="normal";
   }
 
   function getTitle(){
	   
	   var ele=document.getElementById("company");
	   var span=ele.getElementsByTagName("span");
	   span[0].style.fontSize="30px";
	   span[0].style.fontStyle="italic";
	  // var peed=5;
	   //var timer=null;
	   //alert(peed);
	  // timer=setInterval(move_company(peed,ele),200);	   	    
   }
   
   function getTitle_alert(){
	   var ele=document.getElementById("company");
	   var span=ele.getElementsByTagName("span");
	   span[0].style.fontSize="25px";
	   span[0].style.fontStyle="normal";
   }
   
   
   /*
   function move_company(peed,ele){
	   var count+=peed;
	   alert(count);
		  if(count>5){
			  ele.style.left=(ele.offsetLeft-peed)+"px"; 
			  window.clearInterval(timer);
		  }
ele.style.left=(ele.offsetLeft+peed)+"px"; 
   }
   */
   
   
   /*
    * 接下面来处理的是第二章网页的效果，
    * history
    */
   function history_div_change(id){
	   var ele=document.getElementById("history_center_right");
	   var array=ele.getElementsByTagName("div");
	   /**
	    * 在下面时关闭所有打开的div
	    */
	   for(var i=0;i<array.length;i++){
	    array[i].style.display="none";
	   }
	   //下面是依据点击的对象打开相应的div盒子显示内容
	   var click=document.getElementById(id);//获得左边的集合
	  if(click.id=="history_center_left_id1"){
		  array[0].style.display="block";
	  }
	  if(click.id=="history_center_left_id2"){
		  array[1].style.display="block";
	  }
	  if(click.id=="history_center_left_id3"){
		  array[2].style.display="block";
	  }
	  if(click.id=="history_center_left_id4"){
		  array[3].style.display="block";
	  }
	  if(click.id=="history_center_left_id5"){
		  array[4].style.display="block";
	  }
   }
   
   
  /*
   * 下面是对选车线路的表格的切换进行处理
   * 我们默认只处理前三个，
   * 
   */ 
   function select_car_tab_change(id,flog){
	   
	   /*
	    * flog是标志位，当为0时，代表得是点击下一个，消除之前的标记
	    */
	   var ele=document.getElementById("car_road_tab_title");  
		  var arry=ele.getElementsByTagName("div");
		  
		  for(var c=0;c<arry.length;c++){
				  arry[c].style.backgroundColor="#fff";
				  if(c==3||c==4){
					  arry[c].style.backgroundColor="#05a2e5";
				  }
		  }
	   
	   var cha=document.getElementById("car_road_tab_content");
	  var child_divs=cha.childNodes;
	  //关闭所有的内容的div
	 for(var j=0;j<child_divs.length;j++){
		 if(child_divs[j].style){
			child_divs[j].style.display="none";
		 }
	 }
	   
	  //根据传入的id，打开相应的div 
	  for(var i=0;i<arry.length;i++){
		if(arry[i].id==id){
			child_divs[i*2+1].style.display="block";
			arry[i].style.backgroundColor="#C6FDCE";
		}
	  }
   }
   
   function open_city_list(){
	   
	   var ele=document.getElementById("china_city_list"); 
	   ele.style.display="block";
   }
   
   function close_city_list(){
	   var ele=document.getElementById("china_city_list"); 
	   ele.style.display="none";  
   }
   
   /*
    * 对换乘显示进度文件做处理
    */
   
   function progressBar_display(id){
	   var progrssBar=document.getElementById("car_road_tab_content_one_progressBar");
	   var imgs=progrssBar.getElementsByTagName("img");
	   //alert(imgs.length);
	     var menu=document.getElementById(id);

	     
	   var menu_box_car=document.getElementById("menu_box_car");
	    var items=menu_box_car.getElementsByTagName("div");
	   for(var item=0;item<items.length-2;item++){
		   items[item].style.fontSize="";
		   items[item].style.fontStyle="normal"
		   items[item].style.color="#111";	 
	   }
	    
	 
	   for(var i=0;i<imgs.length;i++){
		   imgs[i].style.display="none";
		   
	   }
	   
	   if(id=="change_take"){
		   imgs[0].style.display="block";
//		   imgs[0].style.left="100px";
	   }
	   
	   if(id=="road_query"){
		   imgs[1].style.display="block";
		   imgs[1].style.left="100px";
	   }
	   
	   if(id=="stand_query"){
		   imgs[2].style.display="block";
		   imgs[2].style.left="200px";
	   }
	   menu.style.fontSize="16px";
	   menu.style.fontStyle="italic"
	   menu.style.color="#FFCC00";	   
   }
   