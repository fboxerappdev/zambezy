

		$(document).ready(function(){

			$("body").show();


			$(".nav-toggle").on("click",function(){
				if($(".menu-bar").is(":visible"))
				{
					$(".menu-bar").hide();
				}
				else{
					$(".menu-bar").show();
				}
			});

			var winwid = window.innerWidth;

			$('.bxslider').bxSlider({
				mode: 'fade',
				auto: false,
				autoControls: false,
				pager:false
			});

			$('.markitslider').bxSlider({
				minSlides: 1,
				maxSlides: 3,
				moveSlides:1,
				slideWidth: 360,
				slideMargin: 10
			});



			function myscrool(){
				if(topval>0)
				{
					winheight = $(".slider-area").height();

					$(".slider-area").css({
						"height":winheight,
						"position":"relative",
					});
					$(".rel-box").css({
						"height":"0",
					});
				}
				else{
					$(".slider-area").css({
						"height":"100%",
						"position":"fixed",
					});
					$(".rel-box").css({
						"height":winheight,
					});
				}
			};



			var topval = $(this).scrollTop();

			var winheight = $(".slider-area").height();


			function runcode() {
				var imgheight = $(".imgs").height();
				var winw = window.innerWidth;


				if (winheight > imgheight || winw < 768) {

					$(".slider-area").css({
						"height": imgheight,
						"position": "relative",
					});

				}
				else {

					$(window).resize(function () {
						if (screen.width > window.innerWidth) {
							var winheight = $(".slider-area").height();
						} else {
							var winheight = $(".slider-area").height();
						}
					});
					if (!$( ".rel-box" ).length ) {

						$("<div class='rel-box'></div>").insertBefore(".slider-area").css("height", winheight);

					}


					$(".main-slider>.bx-wrapper").css("height", winheight);


					myscrool();

					$(window).scroll(function () {
						topval = $(this).scrollTop();
						myscrool();

					});
				}
			}

			$(".imgs").ready(function(){
				runcode();
				setTimeout(function(){
					runcode()
				}, 300);

			});

		});