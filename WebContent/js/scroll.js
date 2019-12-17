/* 메뉴바 FIXED */
		if (jQuery(window).width() > 0) {
			jQuery(window).on(
					"scroll",
					function(ev) {
						var scrollTop = window.scrollY
								|| document.documentElement.scrollTop;
						console.log(scrollTop)
						var $el = $('.show-on-scroll');
						if (jQuery(window).scrollTop() > 80) { /* 해당 높이를 벗어나면 fixed 클래스 추가 */
							jQuery('.menu_box').addClass('fixed');
						} else {
							jQuery('.menu_box').removeClass('fixed');
						}

						if (jQuery(window).scrollTop() >= 1420) {
							jQuery('single-skill').addClass('circlechart');
						} else {
							jQuery('single-skill').removeClass('circlechart');
						}

						/* about 높이에서 애니메이션 */
						$(document).ready(function() {
							$('.about').horizon();
						});

						/* divider 높이에서 애니메이션 */
						$(document).ready(function() {
							$('.divider').horizon();
						});

						/* selfimg 높이에서 애니메이션 */
						$(document).ready(function() {
							$('.selfimg').horizon();
						});

						/* profile 높이에서 애니메이션 */
						$(document).ready(function() {
							$('.profile').horizon();
						});

						/* skills 높이에서 애니메이션 */
						$(document).ready(function() {
							$('.single-skill').horizon();
						});

						/* project 높이에서 애니메이션 */
						$(document).ready(function() {
							$('.col-md-4').horizon();
						});

						/* info 높이에서 애니메이션 */
						$(document).ready(function() {
							$('.info').horizon();
						});

						/* contact-form 높이에서 애니메이션 */
						$(document).ready(function() {
							$('.contact-form').horizon();
						});
						return false;
					});
		}
		/* 해당위치로 스크롤링 */
		$(function() {
			$('a[href^=#]').click(function() {
				var speed = 500; /* 스크롤 속도 */
				var href = $(this).attr("href");
				var target = $(href == "#" || href == "" ? 'html' : href);
				var position = target.offset().top;
				$('body,html').animate({
					scrollTop : position
				}, speed, 'swing');
				return false;
			});
		});