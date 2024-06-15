(function ($) {
	"use strict";
	/**
	 * @param $scope The Widget wrapper element as a jQuery element
	 * @param $ The jQuery alias
	 */
	// Make sure you run this code under Elementor.
	$(window).on("elementor/frontend/init", function () {
		// tj-page-header
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tj-page-header.default",

			function ($scope, $) {
				let headerBg = $scope.find(".breadcrumb_area");

				if (headerBg.length > 0) {
					let dataImage = headerBg.attr("data-bg-image");

					if (dataImage.length < 0) {
						return;
					}

					headerBg.each(function () {
						$(this).css(
							"background-image",
							"url( " + $(this).attr("data-bg-image") + "  )"
						);
					});
				}
			}
		);

		// tj-counter
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tj-counter.default",

			function ($scope, $) {
				var $counterItem = $scope.find(".funfact-item");

				if ($counterItem.length > 0) {
					var $counter = $counterItem.find(".odometer");

					if ($counter.length > 0) {
						$counter.appear(function () {
							var odo = $counter;
							odo.each(function () {
								var countNumber = $(this).attr("data-count");
								$(this).html(countNumber);
							});
						});
					}
				}
			}
		);

		// tj-testimonials
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tj-testimonials.default",

			function ($scope, $) {
				let wrap = $scope.find(".carouselWrap");

				var loop = wrap.attr("data-loop") == "yes" ? true : false;
				var dots = wrap.attr("data-dot") == "yes" ? true : false;
				var autoplay = wrap.attr("data-autoplay") == "yes" ? true : false;
				var delay = wrap.attr("data-delay") ? wrap.attr("data-delay") : "5000";

				let testimonialCarousel = $scope.find(
					".testimonial-carousel.owl-carousel"
				);

				if (testimonialCarousel.length > 0) {
					let carouselId = testimonialCarousel.attr("id");

					if (carouselId.length < 0) {
						return;
					}

					$(`#${carouselId}`).owlCarousel({
						loop: loop,
						margin: 30,
						nav: false,
						autoWidth: true,
						dots: dots,
						autoplay: autoplay,
						active: true,
						smartSpeed: 1000,
						autoplayTimeout: delay,
						responsive: {
							0: {
								items: 1,
								autoWidth: false,
							},
							600: {
								items: 2,
								autoWidth: false,
							},
							1000: {
								items: 2,
							},
						},
					});
				}

				// carousel 2
				let testimonial2Carousel = $scope.find(
					".testimonial-carousel2.owl-carousel"
				);

				if (testimonial2Carousel.length > 0) {
					let carouselId = testimonial2Carousel.attr("id");

					if (carouselId.length < 0) {
						return;
					}

					$(`#${carouselId}`).owlCarousel({
						loop: loop,
						margin: 30,
						nav: false,
						// autoWidth: true,
						dots: dots,
						autoplay: autoplay,
						active: true,
						smartSpeed: 1000,
						autoplayTimeout: delay,
						responsive: {
							0: {
								items: 1,
							},
							600: {
								items: 2,
							},
							1000: {
								items: 2,
							},
						},
					});
				}
			}
		);

		// tj-brands-carousel
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tj-brands-carousel.default",

			function ($scope, $) {
				let wrap = $scope.find(".carouselWrap");

				var loop = wrap.attr("data-loop") == "yes" ? true : false;
				var autoplay = wrap.attr("data-autoplay") == "yes" ? true : false;
				var delay = wrap.attr("data-delay") ? wrap.attr("data-delay") : "5000";

				let brandsCarousel = $scope.find(".brand-slider");

				if (brandsCarousel.length > 0) {
					let carouselId = brandsCarousel.attr("id");

					if (carouselId.length < 0) {
						return;
					}

					var brand = new Swiper(`#${carouselId}`, {
						slidesPerView: 2,
						spaceBetween: 30,
						loop: loop,
						...(autoplay
							? {
									autoplay: {
										delay: delay,
									},
							  }
							: {}),
						breakpoints: {
							576: {
								slidesPerView: 3,
							},
							640: {
								slidesPerView: 3,
							},
							768: {
								slidesPerView: 4,
							},
							992: {
								slidesPerView: 5,
							},
							1024: {
								slidesPerView: 6,
							},
						},
					});
				}
			}
		);

		// tj-gallery-slider
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tj-gallery-slider.default",

			function ($scope, $) {
				let wrap = $scope.find(".carouselWrap");

				var loop = wrap.attr("data-loop") == "yes" ? true : false;
				var dots = wrap.attr("data-dot") == "yes" ? true : false;
				var autoplay = wrap.attr("data-autoplay") == "yes" ? true : false;
				var delay = wrap.attr("data-delay") ? wrap.attr("data-delay") : "5000";

				let galleryCarousel = $scope.find(".portfolio_gallery.owl-carousel");

				if (galleryCarousel.length > 0) {
					let carouselId = galleryCarousel.attr("id");

					if (carouselId.length < 0) {
						return;
					}

					$(`#${carouselId}`).owlCarousel({
						items: 2,
						loop: loop,
						lazyLoad: true,
						center: true,
						// autoWidth: true,
						autoplay: autoplay,
						autoplayTimeout: delay,
						smartSpeed: 800,
						margin: 30,
						nav: false,
						dots: dots,
						responsive: {
							// breakpoint from 0 up
							0: {
								items: 1,
								margin: 0,
							},
							// breakpoint from 768 up
							768: {
								items: 2,
								margin: 20,
							},
							992: {
								items: 2,
								margin: 30,
							},
						},
					});

					$(`#${carouselId}`).owlCarousel({
						loop: loop,
						margin: 30,
						nav: false,
						autoWidth: true,
						dots: dots,
						autoplay: autoplay,
						active: true,
						smartSpeed: 1000,
						autoplayTimeout: delay,
						responsive: {
							0: {
								items: 1,
							},
							600: {
								items: 2,
							},
							1000: {
								items: 2,
							},
						},
					});
				}
			}
		);

		// tj-portfolios
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tj-portfolios.default",

			function ($scope, $) {
				let portfolioBox = $scope.find(".portfolio-box");

				let filterItems = $scope.find(".filter-button-group");
				let filterItem = $scope.find(".filter-button-group button");

				if (portfolioBox.length > 0) {
					if (portfolioBox.length < 0) {
						return;
					}

					let grid = portfolioBox.isotope({
						// options
						masonry: {
							columnWidth: ".portfolio-sizer",
							gutter: ".gutter-sizer",
						},
						itemSelector: ".portfolio-item",
						percentPosition: true,
					});

					// filter items on button click
					filterItems.on("click", "button", function () {
						filterItem.removeClass("active");
						$(this).addClass("active");

						var filterValue = $(this).attr("data-filter");
						grid.isotope({ filter: filterValue });
					});

					// active animation
					function filter_animation() {
						var active_bg = $(".portfolio-filter .button-group .active-bg");
						var element = $(".portfolio-filter .button-group .active");
						$(".portfolio-filter .button-group button").on(
							"click",
							function () {
								var e = $(this);
								activeFilterBtn(active_bg, e);
							}
						);
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
						e.closest("button")
							.siblings()
							.addClass(".portfolio-filter .button-group");
						active_bg.css({
							left: leftOff - menuLeft + "px",
							width: width + "px",
						});
					}
				}
			}
		);

		// tj-services
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tj-services.default",

			function ($scope, $) {
				let serviceItem = $scope.find(".service-item");

				if (serviceItem.length > 0) {
					if (serviceItem.length < 0) {
						return;
					}

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
						e.closest(serviceItem).removeClass("mleave");
						e.closest(serviceItem).siblings().addClass("mleave");
						active_bg.css({
							top: topOff - menuTop + "px",
							height: height + "px",
						});
					}

					serviceItem.on("click", function () {
						serviceItem.removeClass("current");
						$(this).addClass("current");
					});
				}
			}
		);
	});
})(jQuery);
