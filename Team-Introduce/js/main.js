$(function(){
	$('#dowebok').fullpage({
		// sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
		// continuousVertical: true,
		anchors: ['page1', 'page2', 'page3', 'page4','page5'],
		menu: '#menu',
		'navigation': true,
		afterLoad: function(anchorLink, index){
			if (index == 1) {
				$('.section1').find('.statement').css({visibility:"visible"});
				$('.section1').find('.statement').delay(500).animate({
					top:'0'
				},1500,'easeOutExpo');
			}
			if(index == 2){
				$('.section2').find('#banner1-move').css({visibility:"visible"});
				$('.section2').find('#banner2-move').css({visibility:"visible"});
				$('.section2').find('#banner1-move').delay(0).animate({
					top: '0'
				}, 1500, 'easeOutExpo');

				$('.section2').find('#banner2-move').delay(0).animate({
					bottom: '0'
				}, 1500, 'easeOutExpo');
				$('.section2').find('.girl-spring').delay(2000).fadeIn(2000);
				$('.section2').find('.profile-spring').delay(2000).fadeIn(2000);
			}
			if(index == 3){
				$(".section3 .myphoto").delay(0).fadeIn(500);
				$('.section3').find('p').delay(500).animate({
					left: '9%'
				}, 1500, 'easeOutExpo');
				$('.section3').find('#sum-p2').delay(0).animate({
					bottom: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 4){
				$('.section4').find('#p1').delay(500).animate({
					bottom: '-10'
				}, 1500, 'easeOutExpo');
			}
			if(index == 5){
				//$('.section5').find('div').fadeIn(2000);

				$(".section5 .person").fadeIn(500);
				$(".section5 .person").animate({
					left:'50%',
					opacity:'1'
				},1500,'easeOutExpo');
				$(".section5 .speech1").delay(2500).fadeIn(500);
				$(".section5 .speech2").delay(5000).fadeIn(500);
				$(".section5 .speech3").delay(7500).fadeIn(500);
				$(".section5 .person").delay(7000).fadeOut(500);
				$(".section5 .gloria_wrapper").delay(9000).animate({
					opacity:'1',
				},500,function(){

				});
			}
		},
		onLeave: function(index, direction){
			if (index == 1) {
				$('.section1').find('.statement').css({visibility:"hidden"});
				$('.section1').find('.statement').delay(0).animate({
					top:'300'
				},1500,'easeOutExpo');
			}
			if(index == '2'){
				$('.section2').find('#banner1-move').css({visibility:"hidden"});
				$('.section2').find('#banner2-move').css({visibility:"hidden"});

				$('.section2').find('#banner1-move').delay(0).animate({
					top: '-300'
				}, 1500, 'easeOutExpo');
				$('.section2').find('#banner2-move').delay(0).animate({
					bottom: '-300'
				}, 1500, 'easeOutExpo');
				$('.section2').find('.girl-spring').delay(0).fadeOut(0);
				$('.section2').find('.profile-spring').delay(0).fadeOut(0);
			}
			if(index == '3'){
				$(".section3 .myphoto").fadeOut(500);
				$('.section3').find('p').delay(0).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
				$('.section3').find('#sum-p2').delay(0).animate({
					bottom: '-100px'
				}, 1500, 'easeOutExpo');
			}
			if(index == '4'){
				$('.section4').find('#p1').delay(500).animate({
					bottom: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == '5'){
				//$('.section5').find('.gloria_wrapper').fadeOut(2000);
				$(".section5 .person").fadeOut(500);
				$(".section5 .speech").fadeOut(500);
				$(".section5 .person").animate({
					left:'-200',
					opacity:'0'
				},1500,function(){
					$(".section5 .gloria_wrapper").animate({
						opacity:'0'
					},500);
				});

			}
		}
	});
});
