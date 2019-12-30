window.onload = function(){
		
//		左侧:
	var shouye = document.getElementById("shouye");
	var tuijian = document.getElementById("tuijian");
	var shoucang = document.getElementById("shoucang");
	var globalq = document.getElementById("globalq");
	var science = document.getElementById("science");
	var sports = document.getElementById("sports");
	var enter = document.getElementById("enter");
	var finance = document.getElementById("finance");
	var release = document.getElementById("release");
	//			首页鼠标事件
	shouye.onmouseover=function(){
		shouye.style.backgroundColor='#dcdcdc';
		tuijian.style.backgroundColor='#f5f5f5';
		shoucang.style.backgroundColor='#f5f5f5';
		globalq.style.backgroundColor='#f5f5f5';
		science.style.backgroundColor='#f5f5f5';
		sports.style.backgroundColor='#f5f5f5';
		enter.style.backgroundColor='#f5f5f5';
		finance.style.backgroundColor='#f5f5f5';
		release.style.backgroundColor='#f5f5f5';
   };
   shouye.onmouseout=function(){
		shouye.style.backgroundColor='#dcdcdc';


   };
   //			为您推荐鼠标事件
	tuijian.onmouseover=function(){
		tuijian.style.backgroundColor='#dcdcdc';
		shoucang.style.backgroundColor='#f5f5f5';
		globalq.style.backgroundColor='#f5f5f5';
		science.style.backgroundColor='#f5f5f5';
		sports.style.backgroundColor='#f5f5f5';
		enter.style.backgroundColor='#f5f5f5';
		finance.style.backgroundColor='#f5f5f5';
		release.style.backgroundColor='#f5f5f5';
   };
   tuijian.onmouseout=function(){
		tuijian.style.backgroundColor='#f5f5f5';
		tuijian.style.color='black';
		tuijain.style.SVGColor='#707070';
   };
   //			收藏夹鼠标事件
	shoucang.onmouseover=function(){
		tuijian.style.backgroundColor='#f5f5f5';
		shoucang.style.backgroundColor='#dcdcdc';
		globalq.style.backgroundColor='#f5f5f5';
		science.style.backgroundColor='#f5f5f5';
		sports.style.backgroundColor='#f5f5f5';
		enter.style.backgroundColor='#f5f5f5';
		finance.style.backgroundColor='#f5f5f5';
		release.style.backgroundColor='#f5f5f5';
   };
   shoucang.onmouseout=function(){
		shoucang.style.backgroundColor='#f5f5f5';
   };
   //			全球鼠标事件
	globalq.onmouseover=function(){
		tuijian.style.backgroundColor='#f5f5f5';
		shoucang.style.backgroundColor='#f5f5f5';
		globalq.style.backgroundColor='#dcdcdc';
		science.style.backgroundColor='#f5f5f5';
		sports.style.backgroundColor='#f5f5f5';
		enter.style.backgroundColor='#f5f5f5';
		finance.style.backgroundColor='#f5f5f5';
		release.style.backgroundColor='#f5f5f5';
   };
   globalq.onmouseout=function(){
		globalq.style.backgroundColor='#f5f5f5';
   };
   //			科学与技术鼠标事件
	science.onmouseover=function(){
		tuijian.style.backgroundColor='#f5f5f5';
		shoucang.style.backgroundColor='#f5f5f5';
		globalq.style.backgroundColor='#f5f5f5';
		science.style.backgroundColor='#dcdcdc';
		sports.style.backgroundColor='#f5f5f5';
		enter.style.backgroundColor='#f5f5f5';
		finance.style.backgroundColor='#f5f5f5';
		release.style.backgroundColor='#f5f5f5';
   };
   science.onmouseout=function(){
		science.style.backgroundColor='#f5f5f5';
   };
   //			体育鼠标事件
	sports.onmouseover=function(){
		tuijian.style.backgroundColor='#f5f5f5';
		shoucang.style.backgroundColor='#f5f5f5';
		globalq.style.backgroundColor='#f5f5f5';
		science.style.backgroundColor='#f5f5f5';
		sports.style.backgroundColor='#dcdcdc';
		enter.style.backgroundColor='#f5f5f5';
		finance.style.backgroundColor='#f5f5f5';
		release.style.backgroundColor='#f5f5f5';
   };
   sports.onmouseout=function(){
		sports.style.backgroundColor='#f5f5f5';
   };
   //			娱乐鼠标事件
	enter.onmouseover=function(){
		tuijian.style.backgroundColor='#f5f5f5';
		shoucang.style.backgroundColor='#f5f5f5';
		globalq.style.backgroundColor='#f5f5f5';
		science.style.backgroundColor='#f5f5f5';
		sports.style.backgroundColor='#f5f5f5';
		enter.style.backgroundColor='#dcdcdc';
		finance.style.backgroundColor='#f5f5f5';
		release.style.backgroundColor='#f5f5f5';
   };
   enter.onmouseout=function(){
		enter.style.backgroundColor='#f5f5f5';
   };
   //			财经鼠标事件
	finance.onmouseover=function(){
		tuijian.style.backgroundColor='#f5f5f5';
		shoucang.style.backgroundColor='#f5f5f5';
		globalq.style.backgroundColor='#f5f5f5';
		science.style.backgroundColor='#f5f5f5';
		sports.style.backgroundColor='#f5f5f5';
		enter.style.backgroundColor='#f5f5f5';
		finance.style.backgroundColor='#dcdcdc';
		release.style.backgroundColor='#f5f5f5';
   };
   finance.onmouseout=function(){
		finance.style.backgroundColor='#f5f5f5';
   };
   //			发布新闻鼠标事件
	release.onmouseover=function(){
		tuijian.style.backgroundColor='#f5f5f5';
		shoucang.style.backgroundColor='#f5f5f5';
		globalq.style.backgroundColor='#f5f5f5';
		science.style.backgroundColor='#f5f5f5';
		sports.style.backgroundColor='#f5f5f5';
		enter.style.backgroundColor='#f5f5f5';
		finance.style.backgroundColor='#f5f5f5';
		release.style.backgroundColor='#dcdcdc';
   };
	release.onmouseout=function(){
		release.style.backgroundColor='#f5f5f5';
	};

//		导航栏功能
	var hide_show = document.getElementById("hide_show");
	var home_page = document.getElementById("home_page");
	var zhengwen = document.getElementById("zhengwen");
	var yaowen = document.getElementById("yaowen");
	var redian = document.getElementById("redian");

//			导航功能事件
	hide_show.onclick=function(){
		setTimeout(function() {
			Show_Hidden(home_page,zhengwen,yaowen,redian);
		}, 150);
	}


	function Show_Hidden(obj,zhengwen,yaowen,redian)
	{
	 if(obj.style.display=="block")
	 {
	  obj.style.display='none';
	  zhengwen.style.marginLeft='10%';
	  zhengwen.style.width='92%';
	  yaowen.style.width='60%';

	 }
	 else
	 {
	  obj.style.display='block';
	  zhengwen.style.marginLeft='18%';
	  zhengwen.style.width='75%';
	  yaowen.style.width='618px';

	 }
	}






//		正文:
   <!--科技-->
   var keji_title1 = document.getElementById("keji_title1");
   var keji_title2 = document.getElementById("keji_title2");
   var keji_connect1 = document.getElementById("keji_connect1");
   var keji_connect2 = document.getElementById("keji_connect2");
   keji_title1.onmouseover=function(){
		keji_connect2.style.display='none';
		keji_connect1.style.display='block';
		keji_title1.style.borderTop='2px solid red';
		keji_title2.style.borderTop='none';
   };
   keji_title1.onmouseout=function(){
		keji_title1.style.borderTop='2px solid red';
		keji_title2.style.borderTop='none';
   };
   keji_title2.onmouseover=function(){

		keji_connect1.style.display='none';
		keji_connect2.style.display='block';
		keji_title1.style.borderTop='none';
		keji_title2.style.borderTop='2px solid red';
   };
   keji_title2.onmouseout=function(){
		keji_title1.style.borderTop='none';
		keji_title2.style.borderTop='2px solid red';
   };
   <!--体育-->;
   var tiyu_title1 = document.getElementById("tiyu_title1");
   var tiyu_title2 = document.getElementById("tiyu_title2");
   var nba = document.getElementById("nba");
   var cba = document.getElementById("cba");
   var tiyu_title3 = document.getElementById("tiyu_title3");
   var zhongchao = document.getElementById("zhongchao");
   var guoji = document.getElementById("guoji");
   var tiyu_connect1 = document.getElementById("tiyu_connect1");
   var tiyu_connect2 = document.getElementById("tiyu_connect2");

   tiyu_title1.onmouseover=function(){
		tiyu_connect2.style.display='none';
		tiyu_connect1.style.display='block';
		tiyu_connect3.style.display='none';
		tiyu_connect4.style.display='none';
		tiyu_connect5.style.display='none';

		tiyu_title1.style.borderTop='2px solid red';
		tiyu_title2.style.borderTop='none';
		tiyu_title3.style.borderTop='none';
   };
   tiyu_title1.onmouseout=function(){
		tiyu_title1.style.borderTop='2px solid red';
   };
   tiyu_title2.onmouseover=function(){
		tiyu_connect1.style.display='none';
		tiyu_connect2.style.display='block';
		tiyu_connect3.style.display='none';
		tiyu_connect4.style.display='none';
		tiyu_connect5.style.display='none';

		tiyu_title2.style.borderTop='2px solid red';
		tiyu_title1.style.borderTop='none';
		tiyu_title3.style.borderTop='none';
   };
   tiyu_title2.onmouseout=function(){
		tiyu_title1.style.borderTop='none';
		tiyu_title2.style.borderTop='2px solid red';
		tiyu_title3.style.borderTop='none';
   };
   tiyu_title3.onmouseover=function(){
		tiyu_connect1.style.display='none';
		tiyu_connect3.style.display='block';
		tiyu_connect2.style.display='none';
		tiyu_connect4.style.display='none';
		tiyu_connect5.style.display='none';

		tiyu_title3.style.borderTop='2px solid red';
		tiyu_title2.style.borderTop='none';
		tiyu_title1.style.borderTop='none';
   };
   tiyu_title3.onmouseout=function(){

		tiyu_title3.style.borderTop='2px solid red';

   };
   <!--娱乐-->
   var yule_title1 = document.getElementById("yule_title1");
   var yule_title2 = document.getElementById("yule_title2");
   var yule_connect1 = document.getElementById("yule_connect1");
   var yule_connect2 = document.getElementById("yule_connect2");
   yule_title1.onmouseover=function(){
		yule_connect2.style.display='none';
		yule_connect1.style.display='block';
		yule_title1.style.borderTop='2px solid red';
		yule_title2.style.borderTop='none';
   };
   yule_title1.onmouseout=function(){
		yule_title1.style.borderTop='2px solid red';
   };
   yule_title2.onmouseover=function(){

		yule_connect1.style.display='none';
		yule_connect2.style.display='block';
		yule_title2.style.borderTop='2px solid red';
		yule_title1.style.borderTop='none';
   };
   yule_title2.onmouseout=function(){
		yule_title2.style.borderTop='2px solid red';
   };
   <!--财经-->
   var caijing_title1 = document.getElementById("caijing_title1");
   var caijing_title2 = document.getElementById("caijing_title2");
   var caijing_title3 = document.getElementById("caijing_title3");

   var caijing_connect1 = document.getElementById("caijing_connect1");
   var caijing_connect2 = document.getElementById("caijing_connect2");
   var caijing_connect3 = document.getElementById("caijing_connect3");

   caijing_title1.onmouseover=function(){//财经标题1---鼠标移入
		caijing_connect3.style.display='none';
		caijing_connect2.style.display='none';
		caijing_connect1.style.display='block';
		caijing_title1.style.borderTop='2px solid red';
		caijing_title2.style.borderTop='none';
		caijing_title3.style.borderTop='none';
   };
   caijing_title1.onmouseout=function(){//财经标题1---鼠标移出
		caijing_title1.style.borderTop='2px solid red';
   };
   caijing_title2.onmouseover=function(){//财经标题2---鼠标移入
		caijing_connect3.style.display='none';
		caijing_connect1.style.display='none';
		caijing_connect2.style.display='block';
		caijing_title2.style.borderTop='2px solid red';
		caijing_title1.style.borderTop='none';
		caijing_title3.style.borderTop='none';
   };
   caijing_title2.onmouseout=function(){//财经标题2---鼠标移出
		caijing_title2.style.borderTop='2px solid red';
   };
   caijing_title3.onmouseover=function(){//财经标题3---鼠标移入
		caijing_connect1.style.display='none';
		caijing_connect2.style.display='none';
		caijing_connect3.style.display='block';
		caijing_title3.style.borderTop='2px solid red';
		caijing_title1.style.borderTop='none';
		caijing_title2.style.borderTop='none';
   };
   caijing_title3.onmouseout=function(){//财经标题3---鼠标移出
		caijing_title3.style.borderTop='2px solid red';
   };


}