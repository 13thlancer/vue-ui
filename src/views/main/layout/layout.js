layui.use(['dateformat', 'element'], function() {

	var dateformat = layui.dateformat;
	var a = dateformat.format(new Date(), 'yyyy-MM-dd hh:mm');
	var aa = a.split(' ');
	var b = dateformat.getWeek(new Date(), 0);
	jQuery('#header-timer').html(aa[0] + '&emsp;' + b + '&emsp;' + aa[1]);
	setInterval(function() {
		var a = dateformat.format(new Date(), 'yyyy-MM-dd hh:mm');
		var aa = a.split(' ');
		var b = dateformat.getWeek(new Date(), 0);
		jQuery('#header-timer').html(aa[0] + '&emsp;' + b + '&emsp;' + aa[1]);
	}, 1000);

	jQuery('#header-btn-query-show').click(function() {
		jQuery('#whhms-header-query-border').removeClass('fadeOutRight').addClass('fadeInRight');
		jQuery('#whhms-header-query-border').show();

	});
	jQuery('#header-btn-query-close').click(function() {
		jQuery('#whhms-header-query-border').removeClass('fadeInRight').addClass('fadeOutRight');
		setTimeout(function() {
			jQuery('#whhms-header-query-border').css({
				display: 'none'
			});
		}, 500);
	});

	jQuery('#menu-btn-dianzhang').click(function() {
		jQuery.get('../../main/dianzhang/dianzhang.html',function(html) {
			layer.open({
			  type: 1,
			  title: false,
			  closeBtn: 0,
			  shadeClose: true,
			  shade:[0.1, '#ffffff'],
			  id: 'main-dianzhang',
			  resize :false,
			  offset: ['620px', '140px'],
			  area: ['426px', '426px'],
			  content: html
			});
		});
	});
});