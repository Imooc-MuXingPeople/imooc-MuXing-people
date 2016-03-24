

  $(document).ready(function(){
    var $loadBar = $('#loadBar');
    var $load = $('#load');
    var re = /stage_\d/g ;
    var $main_content = $('#main-content');
    var total = $('img').length ;
    var loadedNum = 0;
    var nowPercent = 0;
    var timer;
    var totalTime = setTimeout(function(){
        $loadBar.addClass("satge_4");
        var timer1 = setTimeout(function(){
          $load.fadeOut();
          $main_content.fadeIn();
        },1500);
    },10000);
    $('img').load(function(){
      //$loadBar.removeClass();
      loadedNum++;
      nowPercent = loadedNum / total;
      if(nowPercent<=0.25){
        $loadBar.addClass("stage_1");
      }
      if(nowPercent>0.25 && nowPercent<=0.5){

        $loadBar.addClass("stage_2");
      }
      if(nowPercent>0.5 && nowPercent<=0.75){

        $loadBar.addClass("stage_3");
      }
      if(nowPercent>0.75 && nowPercent<=1){
        $loadBar.addClass("stage_4");
        if(nowPercent===1){
            timer = setTimeout(function(){
            $load.fadeOut();
            $main_content.fadeIn();
            console.log('finish');
          },1500);
        }
        //console.log(nowPercent);
      }
    });
  });
