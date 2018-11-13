$(document).ready(function(){
  /*搜索框的事件*/
  $(".sousuo .wenben").click(function(){
  	/*鼠标单击搜索框需要输入内容是触发的事件*/
  	$(".sousuo .wenben")[0].value="";
  	$(".sousuo .tishi").css({"display":"block"});
  })
  $(".sousuo .tishi").mouseover(function(){
  	/*鼠标移动到提示框上触发的事件*/
  	$(".sousuo .tishi").css({"display":"block"});
  	$(".sousuo .neirong").css({"display":"block"});
  })
  $(".sousuo .tishi").mouseout(function(){
  	/*鼠标离开提示框上触发的事件*/
  	$(".sousuo .tishi").css({"display":"none"});
  	$(".sousuo .neirong").css({"display":"none"});
  })
  $(".sousuo .neirong").mouseover(function(){
  	/*鼠标移动到内容框上触发的事件*/
  	$(".sousuo .tishi").css({"display":"block"});
  	$(".sousuo .neirong").css({"display":"block"});
  })
  $(".sousuo .neirong").mouseout(function(){
  	/*鼠标离开内容框上触发的事件*/
  	$(".sousuo .tishi").css({"display":"none"});
  	$(".sousuo .neirong").css({"display":"none"});
  })
  /*鼠标在提示框的链接上移动，内容框显示相应的内容*/
/*  	$(".sousuo .tishi a").mouseover(function(){
  		$(".sousuo .neirong ul").removeClass("one");
  		alert($(this).index());
  		$($(".sousuo .neirong ul")[$(this).index()]).addClass("one");
  	})*/
  	/*在此处开始使用的是直接通过$(this).index()来获取的下标，但是出现里面不是a标签的也会获取到，因此产生获取到的下标与实际需要的下标不符。*/
  $(".sousuo .tishi a").each(function(index,obj){
  	if(index<$(".sousuo .tishi a").length-2){
		$(this).hover(function(){
			$(".sousuo .neirong ul").removeClass("one");
  			$($(".sousuo .neirong ul")[index]).addClass("one");
  			},function(){

		});
  	}else if(index==$(".sousuo .tishi a").length-2){
  		$(this).click(function(){
  			$(".sousuo .tishi .lishi").css({"display":"none"});
  		})
  	}
  	else if (index==$(".sousuo .tishi a").length-1) {
  		$(this).click(function(){
  			$(".sousuo .tishi").css({"display":"none"});
  			$(".sousuo .neirong").css({"display":"none"});
  		})
  	}
	});

  	/*移动框下面的品牌的事件*/
  	$(".center .yidong .neirong .pinpai dd").hover(function(){
  		$(".center .yidong .neirong .pinpai dd").removeClass("one");
  		$($(".center .yidong .neirong .pinpai dd")[$(this).index()-1]).addClass("one");
  	},function(){
  		$(".center .yidong .neirong .pinpai dd").removeClass("one");
  	})

  	/*移动框的鼠标事件*/
    var a;
  	$(".center .yidong .move li").hover(function(){
  		var ydwidth=$(".center .yidong").width();//获取移动框的宽度
  		var nrwidth=$(".center .yidong .neirong").outerWidth();//获取内容框的宽度,包含边框
  		var pvwidth=$(window).width();//获取屏幕的宽度
  		var ydleft=(pvwidth-ydwidth)/2;
  		var left=$(".center .yidong .move li a").outerWidth();//获取移动框中单个li的宽度，包含边框。
  		var index=$(this).index();
  		if(index==0||index==1){
  			$(".center .yidong .neirong").css({"display":"block","left":+ydleft+index*left+"px"});
        $($(".center .yidong .move li a")[index]).css({"backgroundColor":"#fff","color":"#CC0000"});
        a=index;
  		}else if(index==3||index==4){
  			$(".center .yidong .neirong").css({"display":"block","left":+(ydleft+ydwidth-nrwidth)+"px"});
        $($(".center .yidong .move li a")[index]).css({"backgroundColor":"#fff","color":"#CC0000"});
        a=index;
  			}else{
          $($(".center .yidong .move li a")[index]).css({"backgroundColor":"#B71717","color":"#fff"});
        }
  		},function(){
				$(".center .yidong .neirong").css({"display":"none"});
        $(".center .yidong .move li a").css({"backgroundColor":"#CC0000","color":"#fff"});
  			})

  	/*移动框中的内容框的事件*/
  	$(".center .yidong .neirong").hover(function(){
  		$(".center .yidong .neirong").css({"display":"block"});
      $($(".center .yidong .move li a")[a]).css({"backgroundColor":"#fff","color":"#CC0000"});
  	},function(){
      $(".center .yidong .neirong").css({"display":"none"});
      $(".center .yidong .move li a").css({"backgroundColor":"#CC0000","color":"#fff"});
  	})

  	/*图片的轮播事件*/

  	/*初始化某些盒子的宽度*/
  	function resize(){
  		var xbleft=$(".center .yidong .smallbox").width()-$(".center .yidong .smallbox .xiabiao li").length*$(".center .yidong .smallbox .xiabiao .one").outerWidth();//获取下标的left值
  		var marginwidth=4*$(".center .yidong .smallbox .xiabiao li").length;//获取下标和图片的边距值
  		$(".center .yidong .smallbox .xiabiao").css({"left":+(xbleft-marginwidth)+"px"});//初始化下标的left值
  		var imgleft=$(".center .yidong .smallbox").width()-$(".center .yidong .smallbox .xuanze li").length*$(".center .yidong .smallbox .xuanze .one").outerWidth();//获取img的left值
  		$(".center .yidong .smallbox .xuanze ul").css({"left":+(imgleft-marginwidth)+"px"})//初始化下面小图片的left值
  		var bigboxwidth=$(".center .yidong .smallbox").width()*$(".center .yidong .smallbox .bigbox img").length;
  		$(".center .yidong .smallbox .bigbox").css({"width":+(bigboxwidth+110)+"px"})//初始化存放所有图片盒子的width
  	}
  	resize();


  	$(".center .yidong .smallbox").hover(function(){
  		$(".center .yidong .smallbox .xuanze").css({"display":"block"})
  	},function(){
		$(".center .yidong .smallbox .xuanze").css({"display":"none"})
  	})

	$(".center .yidong .smallbox .xuanze li").mouseover(function(){
		var i=$(this).index();
		//$($(".center .yidong .smallbox .bigbox a")[i-1]).fadeOut(500);
		//$($(".center .yidong .smallbox .bigbox a")[i]).fadeIn(500);
    $($(".center .yidong .smallbox .bigbox a")[i]).fadeIn(500).siblings().fadeOut(500);
		$(".center .yidong .smallbox .xuanze li").removeClass("one");
		$($(".center .yidong .smallbox .xuanze li")[i]).addClass("one");
		$(".center .yidong .smallbox .xiabiao li").removeClass("one");
		$($(".center .yidong .smallbox .xiabiao li")[i]).addClass("one");		
	})
  	
  	/*下拉图片的事件*/
  	$(".center .yidong .maxbox").animate({top:'+295px'},3000);


  	/*迷你店铺特惠区事件*/
  	$(".center .yidong .maxbox .zhanshi .subscript a").mouseover(function(){
  		var i=$(this).index();
  		$(".center .yidong .maxbox .zhanshi .subscript a").removeClass("one");
  		$($(".center .yidong .maxbox .zhanshi .subscript a")[i]).addClass("one");
  		$(".center .yidong .maxbox .zhanshi .minbox ul").removeClass("first");
   		$($(".center .yidong .maxbox .zhanshi .minbox ul")[i]).addClass("first");
  	})
  	
    /*畅销精品事件*/

    var t;
    function insertIndex(){
      clearInterval(t);
      var numberlength=$(".center .yidong .maxbox .bestseller .disbox .smbox .number").width();
      //初始化jpbox的宽度
      $(".center .yidong .maxbox .bestseller .disbox .one").css({"width":+(131*numberlength)+"px"})

      //图片的动画
      var j=0;
      var smboxwidth=$(".center .yidong .maxbox .bestseller .disbox .one .smbox").width();
      var smboxlength=$(".center .yidong .maxbox .bestseller .disbox .one .smbox").length;
      function yundong(){
        j++;
        if(j==smboxlength-1){
           $(".center .yidong .maxbox .bestseller .disbox .one").animate({left:'-'+j*smboxwidth+'px'},1000,function(){
             $(".center .yidong .maxbox .bestseller .disbox .one").css({"left":"0"});
           })
           j=0;
        }
        $(".center .yidong .maxbox .bestseller .disbox .one").animate({left:'-'+j*smboxwidth+'px'},1000)
      }
      t=setInterval(yundong,4000);


      //右边的按钮
      $(".center .yidong .maxbox .bestseller .right").click(function(){
        $(".center .yidong .maxbox .bestseller .disbox .one").stop();
        clearInterval(t);
        yundong();
      })
      $(".center .yidong .maxbox .bestseller .right").mouseover(function(){
        clearInterval(t);
      })
      $(".center .yidong .maxbox .bestseller .right").mouseout(function(){
        t=setInterval(yundong,4000);
      })

      //左边的按钮
    $(".center .yidong .maxbox .bestseller .left").click(function(){
    $(".center .yidong .maxbox .bestseller .disbox .one").stop();
        clearInterval(t);
        if(j==0){
          $(".center .yidong .maxbox .bestseller .disbox .one").css({"left":+(-(smboxlength-1)*smboxwidth)+"px"});
          j=smboxlength-1;
          j--
           $(".center .yidong .maxbox .bestseller .disbox .one").animate({left:'-'+j*smboxwidth+'px'},1000);
        }else{
        j--;
        $(".center .yidong .maxbox .bestseller .disbox .one").animate({left:'-'+j*smboxwidth+'px'},1000);
        }
      })

      $(".center .yidong .maxbox .bestseller .left").mouseover(function(){
        clearInterval(t);
      })
      $(".center .yidong .maxbox .bestseller .left").mouseout(function(){
        t=setInterval(yundong,4000);
      })

    $(".center .yidong .maxbox .bestseller .disbox .jpbox img").hover(function(){
      clearInterval(t);
    },function(){
      t=setInterval(yundong,4000);
    })

    }
    insertIndex();
    

    $(".center .yidong .maxbox .bestseller .subscript ul li").mouseover(function(){
      var i=$(this).index()
        $(".center .yidong .maxbox .bestseller .subscript ul li a").removeClass("first");
        $($(".center .yidong .maxbox .bestseller .subscript ul li a")[i]).addClass("first");
        $(".center .yidong .maxbox .bestseller .disbox .jpbox").removeClass("one");
        $($(".center .yidong .maxbox .bestseller .disbox .jpbox")[i]).addClass("one");  
    })
    


    /*畅销精品事件结束*/

    /*限时折扣事件*/
     $(".center .yidong .maxbox .section_column .column .deal_list li").mouseover(function(){
        var i=$(this).index();//鼠标在li上的索引值
        //取到鼠标在li上父元素div的class值
        var str=$(this).parent().parent().attr("class");
        var str2=str.split(" ");
        $(".center .yidong .maxbox .section_column ."+str2[1]+" .deal_list li").removeClass("major");
        $($(".center .yidong .maxbox .section_column ."+str2[1]+" .deal_list li")[i]).addClass("major");
      })

     /*特色品牌事件*/
     $(".center .yidong .maxbox .characteristic .spot .slt li").hover(function(){
      var i=$(this).index();
      $($(".center .yidong .maxbox .characteristic .spot .slt li img")[i]).css({"border":"1px solid #E00A0A"});
      $($(".center .yidong .maxbox .characteristic .spot .slt li a")[i]).css({"border":"1px solid #E00A0A"})
     },function(){
      var i=$(this).index();
      $($(".center .yidong .maxbox .characteristic .spot .slt li img")[i]).css({"border":"1px solid #C3C5C7"});
      $($(".center .yidong .maxbox .characteristic .spot .slt li a")[i]).css({"border":"1px solid #fff"})
     })


    /* 精选女装事件*/
     $(".center .yidong .maxbox .ladies .img li").hover(function(){
          $(this).find("img").css({"opacity":"1","filter":"alpha(opacity=100)"});
          $(this).find(".info").stop().animate({bottom:'0'},300);
     },function(){
          $(this).find("img").css({"opacity":".9","filter":"alpha(opacity=90)"});
          $(this).find(".info").stop().animate({bottom:'-40px'},100);
        
     })




     /*悬浮框事件*/
     // $(window).scroll(function(){
     //  if($(window).scrollTop()>=100){
     //    $(".suspension").css({"top":(24+$(window).scrollTop())+"px"})
     //  }else{
     //     $(".suspension").css({"top":"124px"})
     //  }
     // })

     $(".suspension .top").click(function(){
      $(window).scrollTop(0);
     })


});