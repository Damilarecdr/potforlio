/***************************************************
==================== JS INDEX ======================
****************************************************
// Data js
// Sidebar Navigation
// Sticky Header
// Hamburger Menu
// Scroll To Section
// OnePage Active Class
// Nice Select
// ALL Popup
// Preloader
// Sidebar Hover BG Color
// Services Hover BG
// Portfolio Filter BG Color
// WoW Js

****************************************************/

(function ($) {
	"use strict";

	/*------------------------------------------------------
  /  Data js
  /------------------------------------------------------*/
	$("[data-bg-image]").each(function () {
		$(this).css(
			"background-image",
			"url(" + $(this).attr("data-bg-image") + ")"
		);
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	/*------------------------------------------------------
  / Meanmenu
  /------------------------------------------------------*/
	$("#headerMenu").meanmenu({
		meanMenuContainer: ".mobile-menu",
		meanScreenWidth: "991",
		meanExpand: [
			"<i class='fa-light fa-plus'></i> <i class='fa-light fa-minus'></i>",
		],
	});

	/*------------------------------------------------------
  	/  Hamburger Menu
  	/------------------------------------------------------*/
	$(".menu-bar").on("click", function () {
		$(".menu-bar").toggleClass("menu-bar-toggeled");
		$(".mobile-menu").toggleClass("opened");
		$("body").toggleClass("overflow-hidden");
	});

	$(".mobile-menu ul li a")
		.not(".mean-expand")
		.on("click", function () {
			$(".menu-bar").removeClass("menu-bar-toggeled");
			$(".mobile-menu").removeClass("opened");
			$("body").removeClass("overflow-hidden");
		});

	/*------------------------------------------------------
  	/  OnePage Active Class
  	/------------------------------------------------------*/
	var activeSection = null;
	function updateActiveSection() {
		var windowHeight = $(window).height();
		var windowMiddle = windowHeight / 2;

		$(".elementor-element.e-con.e-parent").each(function () {
			var section = $(this);
			var sectionTop = section.offset().top;

			// Check if the top of the section is in the middle of the screen
			if (sectionTop <= $(window).scrollTop() + windowMiddle) {
				activeSection = section.attr("id");
			}
		});

		updateActiveListItem();
	}

	function updateActiveListItem() {
		$(".header-menu ul li a").each(function () {
			var anchor = $(this);
			var listItem = anchor.closest(".menu-item");
			if (anchor.attr("href") === "/#" + activeSection) {
				listItem.addClass("current");
			} else {
				listItem.removeClass("current");
			}
		});
	}

	$(window).on("scroll", function () {
		updateActiveSection();
	});

	// Initial call to set active section on page load
	updateActiveSection();

	$(document).ready(function ($) {
		/*------------------------------------------------------
  	/  Sticky Header
  	/------------------------------------------------------*/
		var lastScrollTop = 0;
		$(window).scroll(function () {
			var scroll = $(window).scrollTop();

			if (scroll > 300) {
				$(".tj-header-area.header-sticky").addClass("sticky");
				$(".tj-header-area.header-sticky").removeClass("sticky-out");
			} else if (scroll < lastScrollTop) {
				if (scroll < 500) {
					$(".tj-header-area.header-sticky").addClass("sticky-out");
					$(".tj-header-area.header-sticky").removeClass("sticky");
				}
			} else {
				$(".tj-header-area.header-sticky").removeClass("sticky");
			}

			lastScrollTop = scroll;
		});

		/*------------------------------------------------------
  	/ Post Gallery Carousel
  	/------------------------------------------------------*/
		$(".tj-post__gallery.owl-carousel").owlCarousel({
			items: 1,
			loop: true,
			margin: 30,
			dots: false,
			nav: true,
			navText: [
				'<i class="fal fa-arrow-left"></i>',
				'<i class="fal fa-arrow-right"></i>',
			],
			autoplay: false,
			smartSpeed: 1000,
			autoplayTimeout: 3000,
		});

		/*------------------------------------------------------
  	/  Nice Select
  	/------------------------------------------------------*/
		$("select").niceSelect();

		/*------------------------------------------------------
  	/  ALL Popup
  	/------------------------------------------------------*/
		if ($(".popup_video").length > 0) {
			$(`.popup_video`).magnificPopup({
				disableOn: 10,
				type: "iframe",
				mainClass: "mfp-fade",
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false,
			});
		}

		$(".modal-popup").magnificPopup({
			type: "inline",
			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: "auto",
			closeBtnInside: true,
			preloader: false,
			midClick: true,
			removalDelay: 300,
			mainClass: "popup-mfp",
		});
	});

	$(window).on("load", function () {
		/*------------------------------------------------------
  	/  WoW Js
  	/------------------------------------------------------*/
		var wow = new WOW({
			boxClass: "wow", // default
			animateClass: "animated", // default
			offset: 100, // default
			mobile: true, // default
			live: true, // default
		});
		wow.init();

		/*------------------------------------------------------
  	/  Preloader
  	/------------------------------------------------------*/
		const svg = document.getElementById("preloaderSvg");
		const svgText = document.querySelector(
			".hero-section .intro_text svg text"
		);
		const tl = gsap.timeline({
			onComplete: startStrokeAnimation,
		});
		const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
		const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

		tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
			delay: 1.5,
			y: -100,
			opacity: 0,
		});
		tl.to(svg, {
			duration: 0.5,
			attr: { d: curve },
			ease: "power2.easeIn",
		}).to(svg, {
			duration: 0.5,
			attr: { d: flat },
			ease: "power2.easeOut",
		});
		tl.to(".preloader", {
			y: -1500,
		});
		tl.to(".preloader", {
			zIndex: -1,
			display: "none",
		});

		function startStrokeAnimation() {
			if (svgText) {
				// Add a class or directly apply styles to trigger the stroke animation
				svgText.classList.add("animate-stroke");
			}
		}
	});

	/*------------------------------------------------------
  	/  Portfolio Filter
  	/------------------------------------------------------*/
	var $grid = $(".portfolio-box").isotope({
		// options
		masonry: {
			columnWidth: ".portfolio-box .portfolio-sizer",
			gutter: ".portfolio-box .gutter-sizer",
		},
		itemSelector: ".portfolio-box .portfolio-item",
		percentPosition: true,
	});

	// filter items on button click
	$(".filter-button-group").on("click", "button", function () {
		$(".filter-button-group button").removeClass("active");
		$(this).addClass("active");

		var filterValue = $(this).attr("data-filter");
		$grid.isotope({ filter: filterValue });
	});

	/*------------------------------------------------------
  	/  Services Hover BG
  	/------------------------------------------------------*/
	function service_animation() {
		var active_bg = $(".services-widget .active-bg");
		var element = $(".services-widget .current");
		$(".services-widget .service-item").on("mouseenter", function () {
			var e = $(this);
			activeService(active_bg, e);
		});
		$(".services-widget").on("mouseleave", function () {
			element = $(".services-widget .current");
			activeService(active_bg, element);
			element.closest(".service-item").siblings().removeClass("mleave");
		});
		activeService(active_bg, element);
	}
	service_animation();

	function activeService(active_bg, e) {
		if (!e.length) {
			return false;
		}
		var topOff = e.offset().top;
		var height = e.outerHeight();
		var menuTop = $(".services-widget").offset().top;
		e.closest(".service-item").removeClass("mleave");
		e.closest(".service-item").siblings().addClass("mleave");
		active_bg.css({ top: topOff - menuTop + "px", height: height + "px" });
	}

	$(".services-widget .service-item").on("click", function () {
		$(".services-widget .service-item").removeClass("current");
		$(this).addClass("current");
	});

	/*------------------------------------------------------
  	/  Portfolio Filter BG Color
  	/------------------------------------------------------*/
	function filter_animation() {
		var active_bg = $(".portfolio-filter .button-group .active-bg");
		var element = $(".portfolio-filter .button-group .active");
		$(".portfolio-filter .button-group button").on("click", function () {
			var e = $(this);
			activeFilterBtn(active_bg, e);
		});
		activeFilterBtn(active_bg, element);
	}
	filter_animation();

	function activeFilterBtn(active_bg, e) {
		if (!e.length) {
			return false;
		}
		var leftOff = e.offset().left;
		var width = e.outerWidth();
		var menuLeft = $(".portfolio-filter .button-group").offset().left;
		e.siblings().removeClass("active");
		e.closest("button").siblings().addClass(".portfolio-filter .button-group");
		active_bg.css({ left: leftOff - menuLeft + "px", width: width + "px" });
	}

	// backToTop
	var geroldScrollTop = document.querySelector(".gerold-scroll-top");
	if (geroldScrollTop != null) {
		var scrollProgressPatch = document.querySelector(".gerold-scroll-top path");
		var pathLength = scrollProgressPatch.getTotalLength();
		var offset = 50;
		scrollProgressPatch.style.transition =
			scrollProgressPatch.style.WebkitTransition = "none";
		scrollProgressPatch.style.strokeDasharray = pathLength + " " + pathLength;
		scrollProgressPatch.style.strokeDashoffset = pathLength;
		scrollProgressPatch.getBoundingClientRect();
		scrollProgressPatch.style.transition =
			scrollProgressPatch.style.WebkitTransition =
				"stroke-dashoffset 10ms linear";
		window.addEventListener("scroll", function (event) {
			var scroll =
				document.body.scrollTop || document.documentElement.scrollTop;
			var height =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;
			var progress = pathLength - (scroll * pathLength) / height;
			scrollProgressPatch.style.strokeDashoffset = progress;
			var scrollElementPos =
				document.body.scrollTop || document.documentElement.scrollTop;
			if (scrollElementPos >= offset) {
				geroldScrollTop.classList.add("progress-done");
			} else {
				geroldScrollTop.classList.remove("progress-done");
			}
		});
		geroldScrollTop.addEventListener("click", function (e) {
			e.preventDefault();
			window.scroll({
				top: 0,
				left: 0,
				behavior: "smooth",
			});
		});
	}
})(jQuery);
