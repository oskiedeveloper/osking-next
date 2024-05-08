$(document).ready(function() {

    var vW = $(window).width();
	var vH = $(window).height();
	var resizeTimer;
	var pageTransitionPathPoints;
	var transitionOffsetX, transitionOffsetY;

	var handleAnimation = false;
	var transitionAnimation = false;

    $('.page-transition path').attr('d', pageTransitionPathPoints);

    $(window).on('resize', function(e) {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {

			vW = $(window).width();
			vH = $(window).height();

		}, 250);
	});

    var getRectanglePaths = function(top,right,bottom,left) {

		pageTransitionPathPoints = {
			'default': 'M0,0 C0,0 '+vW/4+',0 '+vW/2+',0 C'+vW/4*3+',0 '+vW+',0 '+vW+',0 C'+vW+',0 '+vW+','+vH/4+' '+vW+','+vH/2+' C'+vW+','+vH/4*3+' '+vW+','+vH+' '+vW+','+vH+' C'+vW+','+vH+' '+vW/4*3+','+vH+' '+vW/2+','+vH+' C'+vW/4+','+vH+' 0,'+vH+' 0,'+vH+' C0,'+vH+' 0,'+vH/4*3+' 0,'+vH/2+' C0,'+vH/4+' 0,0 0,0 Z',

			'inner': 'M0,0 C0,0 '+vW/4+','+top+' '+vW/2+','+top+' C'+vW/4*3+','+top+' '+vW+',0 '+vW+',0 C'+vW+',0 '+(vW-right)+','+vH/4+' '+(vW-right)+','+vH/2+' C'+(vW-right)+','+vH/4*3+' '+vW+','+vH+' '+vW+','+vH+' C'+vW+','+vH+' '+vW/4*3+','+(vH-bottom)+' '+vW/2+','+(vH-bottom)+' C'+vW/4+','+(vH-bottom)+' 0,'+vH+' 0,'+vH+' C0,'+vH+' '+left+','+vH/4*3+' '+left+','+vH/2+' C'+left+','+vH/4+' 0,0 0,0 Z',

			'outer': 'M0,0 C0,0 '+vW/4+','+(-top)+' '+vW/2+','+(-top)+' C'+vW/4*3+','+(-top)+' '+vW+',0 '+vW+',0 C'+vW+',0 '+(vW-(-right))+','+vH/4+' '+(vW-(-right))+','+vH/2+' C'+(vW-(-right))+','+vH/4*3+' '+vW+','+vH+' '+vW+','+vH+' C'+vW+','+vH+' '+vW/4*3+','+(vH-(-bottom))+' '+vW/2+','+(vH-(-bottom))+' C'+vW/4+','+(vH-(-bottom))+' 0,'+vH+' 0,'+vH+' C0,'+vH+' '+(-left)+','+vH/4*3+' '+(-left)+','+vH/2+' C'+(-left)+','+vH/4+' 0,0 0,0 Z'
		};

	};

    var pageTransition = function(from, element) {

		var container = $('.page-transition');
		var handlePath = element.find('path');
		var bgColor = handlePath.css('fill');
		var isBack = element.attr('data-permalink') == 'back';

		container.find('svg').remove();
		container.css(from, '-100%').width(vW).height(vH);
		transitionOffsetX = vW / (Math.floor(Math.random() * 10) + 6);
		transitionOffsetY = vH / (Math.floor(Math.random() * 10) + 6);

		function creator(tag, attrs) {
		  var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
		  for (var k in attrs)
		    el.setAttribute(k, attrs[k]);
		  return el;
		}

		function handleAnimations() {
			$('.handle').not('.handle[data-permalink="back"]').each(function() {

				if (isBack) {
					$(this).removeClass('out');
				} else {
					$(this).addClass('out');
				}

				path = $(this).find('path');
				handleAnimation = true;

				anime({
					targets: path[0],
					duration: 500,
					easing: 'easeOutBack',
					d: (isBack) ? path.attr('hover-default') : path.attr('hover-default'),
					complete: function(anim) {
						handleAnimation = false;
					}
				});

			});
		}

		function backHandleAnimation() {
			backHandle =  $('.handle[data-permalink="back"]');
			backHandle.attr('data-position', from);
			backHandlePath =  backHandle.find('path');
			handleAnimation = true;

			anime({
				targets: backHandlePath[0],
				duration: 500,
				easing: 'easeOutBack',
				d: (isBack) ? backHandlePath.attr('hover-default') : backHandlePath.attr('hover-default'),
				complete: function(anim) {
					handleAnimation = false;
				}
			});
		}

		var svg = creator('svg', {
			width: vW,
			height: vH,
			class: 'shape',
			preserveAspectRatio: 'none',
			viewBox: '0 0 ' + vW + ' ' + vH,
			fill: bgColor
		});

		getRectanglePaths(
			(from == 'bottom') ? transitionOffsetX : 0,
			(from == 'left') ? transitionOffsetY : 0,
			(from == 'top') ? transitionOffsetX : 0,
			(from == 'right') ? transitionOffsetY : 0
		);

		var path = creator('path', {
		  d: pageTransitionPathPoints.default
		});

		svg.append(path);
		container.append(svg);

		if (isBack) {
			backHandleAnimation();
		} else {
			handleAnimations();
		}

		anime({
			targets: container[0],
			duration: 1300,
			easing: 'easeInQuad',
			top: (from == 'top') ? 0 : false,
			right: (from == 'right') ? 0 : false,
			bottom: (from == 'bottom') ? 0 : false,
			left: (from == 'left') ? 0 : false
		});

		anime({
			targets: $('.page-transition svg path')[0],
			duration: 600,
			easing: 'linear',
			d: pageTransitionPathPoints.inner,
			complete: function(anim) {

				anime({
					targets: $('.page-transition svg path')[0],
					duration: 300,
					easing: 'linear',
					d: pageTransitionPathPoints.outer,
					complete: function(anim) {
                        
						anime({
							targets: $('.page-transition svg path')[0],
							duration: 400,
							easing: 'easeInCubic',
							d: pageTransitionPathPoints.default,
							complete: function(anim) {

								container.remove();
								$('nav').append('<div class="page-transition z-0"></div>');

								if (isBack) {
                                    $('main').removeClass('dark');
									handleAnimations();
								} else {
                                    $('main').addClass('dark');
									backHandleAnimation();
								}
								transitionAnimation = false;
							}
						});

					}
				});

			}
		});

	}


    function checkCursor(action, elem) {
		isHover = $(elem).is(":hover");

		if (action == 'mouseenter') {
			if (!isHover) {
				elem.trigger('mouseleave');
			}
		} else {
			if (isHover) {
				elem.trigger('mouseenter');
			}
		}
	}

	$('svg.shape path')
    .on('click', function() {

		if (!transitionAnimation) {

			handleAnimation = true;
			transitionAnimation = true;
			handle = $(this).closest('.handle');
			position = handle.attr('data-position');

			pageTransition(position, handle);
		}

	})
	.on('mouseenter', function() {

		handle = $(this).closest('.handle');
		path = $(this);

		if (!handleAnimation && !handle.hasClass('out') && !transitionAnimation) {
			handleAnimation = true;

			anime({
				targets: path[0],
				duration: 300,
				easing: 'easeOutBack',
				d: path.attr('hover-2'),
				complete: function(anim) {
					handleAnimation = false;
					checkCursor('mouseenter', path);
				}
			});
		}
	})
	.on('mouseleave', function() {

		handle = $(this).closest('.handle');
		path = $(this);

		if (!handleAnimation && !handle.hasClass('out') && !transitionAnimation) {
			handleAnimation = true;

			anime({
				targets: $(this)[0],
				duration: 300,
				easing: 'easeOutBack',
				d: $(this).attr('hover-default'),
				complete: function(anim) {
					handleAnimation = false;
					checkCursor('mouseleave', path);
				}
			});
		}
	});

});
