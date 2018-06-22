layui.use(['admin', 'whui', 'element', 'laydate', 'dateformat'], function() {
	var whui = layui.whui;
	var whconfig = layui.whconfig;

	var dateformat = layui.dateformat;

	var vm = new Vue({
		el: "#main-index",
		data: {
			pieData: [],
			barList0: [],
			barList1: [],
			orderList: [],
			accountList: [],
			messageList: [],
			weatherInfo: [],
			barColorList: [{
					"color": "linear-gradient(left,rgb(40, 240, 163), rgb(18, 206, 186))",
					"webkitColor": "-webkit-linear-gradient(left,rgb(40, 240, 163), rgb(18, 206, 186))"
				},
				{
					"color": "linear-gradient(left,rgb(255, 199, 79), rgb(249, 170, 45))",
					"webkitColor": "-webkit-linear-gradient(left,rgb(255, 199, 79), rgb(249, 170, 45))"
				},
				{
					"color": "linear-gradient(left,rgb(255, 118, 58), rgb(255, 166, 80))",
					"webkitColor": "-webkit-linear-gradient(left,rgb(255, 118, 58), rgb(255, 166, 80))"
				},
				{
					"color": "linear-gradient(left,rgb(252, 116, 74), rgb(225, 66, 61))",
					"webkitColor": "-webkit-linear-gradient(left,rgb(252, 116, 74), rgb(225, 66, 61))"
				},
				{
					"color": "linear-gradient(left,rgb(255, 109, 157), rgb(255, 53, 53))",
					"webkitColor": "-webkit-linear-gradient(left,rgb(255, 109, 157), rgb(255, 53, 53))"
				},
				{
					"color": "linear-gradient(left,rgb(254, 35, 221), rgb(254, 35, 128))",
					"webkitColor": "-webkit-linear-gradient(left,rgb(254, 35, 221), rgb(254, 35, 128))"
				},
				{
					"color": "linear-gradient(left,rgb(236, 35, 254), rgb(174, 35, 254))",
					"webkitColor": "-webkit-linear-gradient(left,rgb(236, 35, 254), rgb(174, 35, 254))"
				},
				{
					"color": "linear-gradient(left,rgb(83, 16, 253), rgb(153, 35, 254))",
					"webkitColor": "-webkit-linear-gradient(left,rgb(83, 16, 253), rgb(153, 35, 254))"
				},
				{
					"color": "linear-gradient(left,rgb(92, 128, 246), rgb(15, 110, 253))",
					"webkitColor": "-webkit-linear-gradient(left,rgb(92, 128, 246), rgb(15, 110, 253))"
				},
				{
					"color": "linear-gradient(left,rgb(27, 211, 233), rgb(15, 173, 253,))",
					"webkitColor": "-webkit-linear-gradient(left,rgb(27, 211, 233), rgb(15, 173, 253,))"
				}
			],
			echartsColorList: [{
					itemStyle: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0,
								color: '#1bd3e9' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#0fadfd' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				},
				{
					itemStyle: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 1,
							y2: 1,
							colorStops: [{
								offset: 0,
								color: '#5c80f6' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#0f6efd' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				},
				{
					itemStyle: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 1,
							y2: 1,
							colorStops: [{
								offset: 0,
								color: '#5310fd' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#9923fe' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				},
				{
					itemStyle: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 1,
							y2: 1,
							colorStops: [{
								offset: 0,
								color: '#ec23fe' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#ae23fe' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				},
				{
					itemStyle: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 1,
							y2: 1,
							colorStops: [{
								offset: 0,
								color: '#fe23dd' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#fe2380' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				},
				{
					itemStyle: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 1,
							y2: 1,
							colorStops: [{
								offset: 0,
								color: '#ff6d9d' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#ff3535' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				},
				{
					itemStyle: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 1,
							y2: 1,
							colorStops: [{
								offset: 0,
								color: '#fc744a' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#e1423d' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				},
				{
					itemStyle: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 1,
							y2: 1,
							colorStops: [{
								offset: 0,
								color: '#ff763a' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#ffa650' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				},
				{
					itemStyle: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 1,
							y2: 1,
							colorStops: [{
								offset: 0,
								color: '#ffc74f' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#f9aa2d' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				},
				{
					itemStyle: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 1,
							y2: 1,
							colorStops: [{
								offset: 0,
								color: '#28f0a3' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#12ceba' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				}
			],
			dataTable: {
				"totalList": [{
					"roomType": "",
					"num": ""
				}],
				"bussList": [{
					"columnName": "",
					"roomNum": "",
					"personNum": ""
				}],
				"forecastList": [{
					"columnName": "",
					"roomNum": "",
					"personNum": ""
				}]
			},
			showDatePicker: false,
			topTabSelectIndex: 1,
			echartsTabSelectIndex: 0,
			statisticInfo: {},
			dataTableDate: ""
		},
		methods: {
			moreClick: function() {
				var more = document.getElementById('more_img');
				var top = more.getBoundingClientRect().top + 31 + 20 + 'px';
				var left = more.getBoundingClientRect().left + 3 + 5 + 24 - 142 + 'px';
				console.log("1111");
				layui.layer.open({
					type: 1,
					title: '',
					content: '<link rel="stylesheet" type="text/css" href="../../main/main-index/home_pop_view.css" /><div id="wh-pop-view"><div class="triangle_border_up"></div><div class="pop-view"><div class="pop-view-item" @click="settingClick"><img src="../../../assets/img/header-settings.png" />用户设置</div><div class="pop-view-item" @click="pwdClick"><img src="../../../assets/img/header-updatepwd.png" />密码修改</div><div class="pop-view-item" @click="aboutClick"><img src="../../../assets/img/header-about.png" />关于我们</div></div></div><script src="../../main/main-index/home_pop_view.js" type="text/javascript" charset="utf-8"></script>',
					offset: [top, left],
					shadeClose: true,
				});

				jQuery(".layui-layer-shade").css("opacity", "0");
				jQuery(".layui-layer-page").css("border-radius", "5px");

			},
			topTapClick: function(index) {
				console.log("topTapClick", index);
				if(vm.topTabSelectIndex == index) {
					console.log("点击的是选中的");
					return false;
				}
				vm.topTabSelectIndex = index;
				vm.orderList = [];
				getDayList();
			},
			echartsTabClick: function(index) {
				console.log("echartsTabClick", index);
				if(vm.echartsTabSelectIndex == index) {
					console.log("点击的是选中的");
					return false;
				}

				vm.echartsTabSelectIndex = index;
				vm.showDatePicker = false;
				if(index == 0) {
					getGuestRoomStatusGraph();
				} else if(index == 1) {
					getInStatusGraph();
				} else {
					vm.showDatePicker = true;
					getDataTableData();
				}

			},
			tableChangeClick: function() {
				console.log("tableChangeClick");
			},
			datePickClick: function() {
				layui.laydate.show;
			}
		}
	})
	
	
	vm.dataTableDate = dateformat.format(new Date(), 'yyyy-MM-dd');
	
	jQuery('#main-index #weather-time').html(dateformat.format(new Date(), 'hh:mm'));
	jQuery('#main-index #weather-date').html(dateformat.format(new Date(), 'M月d日'));
	jQuery('#main-index #weather-week').html(dateformat.getWeek(new Date(), 0));

	setInterval(function() {
		jQuery('#main-index #weather-time').html(dateformat.format(new Date(), 'hh:mm'));
		jQuery('#main-index #weather-date').html(dateformat.format(new Date(), 'M月d日'));
		jQuery('#main-index #weather-week').html(dateformat.getWeek(new Date(), 0));
	}, 1000);

	//获取账户余额信息及留言
	getTotalPayMessages();

	function getTotalPayMessages() {

		var url = whconfig.bizurl.mainIndex.totalPayMessages;
		var params = {
			"hotelGroupId": 2,
			"hotelId": 9
		}
		whui.request(url, params, function(res) {
			console.log(JSON.stringify(res));
			vm.messageList = res.messagesList;
			vm.accountList = res.indexTotal;
		}, function(e) {
			console.log(JSON.stringify(e));
		});

	}

	//获取当日入住列表
	getDayList();

	function getDayList() {

		var url = whconfig.bizurl.mainIndex.dayList;
		var params = {
			"hotelGroupId": 2,
			"hotelId": 9,
			"statusType": vm.topTabSelectIndex
		}
		whui.request(url, params, function(res) {
			console.log(JSON.stringify(res));
			vm.statisticInfo = {
				"noLeaveNums": res.noLeaveNums,
				"inNums": res.inNums,
				"leavedNums": res.leavedNums,
				"noInNums": res.noInNums
			}

			var list = res.orderList;

			for(var i in list) {
				var item = list[i];
				var startArr = item.planStart.split(' ');
				var startDateArr = item.planStart.split('-');
				var endArr = item.planEnd.split(' ');
				var endDateArr = endArr[0].split('-');
				item.planStartSub = startArr.length > 1 ? startArr[1] : startArr[0];
				item.planEndSub = endArr.length > 1 ? endArr[1] : endArr[0];
				item.planStartSubDate = startDateArr.length > 2 ? startDateArr[1] + "-" + startDateArr[2] : startDateArr[0];
				item.planEndSubDate = endDateArr.length > 2 ? endDateArr[1] + "-" + endDateArr[2] : endDateArr[0];
			}

			vm.orderList = list;
		}, function(e) {
			console.log(JSON.stringify(e));
		});

	}

	//客房状态图
	getGuestRoomStatusGraph();

	function getGuestRoomStatusGraph() {
		var url = whconfig.bizurl.mainIndex.roomGraph;
		var params = {
			"hotelGroupId": 2,
			"hotelId": 9
		}
		whui.request(url, params, function(res) {
			console.log(JSON.stringify(res));
			var tempPieChart = res.roomPieChart;
			var tempBarChart = res.roomTypeBarChart;

			for(var i in tempPieChart) {
				var item = tempPieChart[i];
				var pieColor = vm.echartsColorList[i];
				item.itemStyle = pieColor.itemStyle;
			}

			for(var i in tempBarChart) {
				var item = tempBarChart[i];
				var barColor = vm.barColorList[i];
				item.color = barColor.color;
				item.webkitColor = barColor.webkitColor;
			}

			vm.pieData = tempPieChart;
			vm.barList0 = tempBarChart;

			renderEchartsDataView(0, vm.pieData);

		}, function(e) {
			console.log(JSON.stringify(e));
		});

	}

	//在住分布图
	function getInStatusGraph() {

		var url = whconfig.bizurl.mainIndex.inStatusGraph;
		var params = {
			"hotelGroupId": 2,
			"hotelId": 9
		}
		whui.request(url, params, function(res) {
			console.log("1111");
			console.log(JSON.stringify(res));
			var tempPieChart = res.inRoomPieChart;
			var tempBarChart = res.roomTypeBarChart;

			for(var i in tempPieChart) {
				var item = tempPieChart[i];
				var pieColor = vm.echartsColorList[i];
				item.itemStyle = pieColor.itemStyle;
			}

			for(var i in tempBarChart) {
				var item = tempBarChart[i];
				var barColor = vm.barColorList[i];
				item.color = barColor.color;
				item.webkitColor = barColor.webkitColor;
			}

			vm.pieData = tempPieChart;
			vm.barList1 = tempBarChart;

			renderEchartsDataView(1, vm.pieData);

		}, function(e) {
			console.log(JSON.stringify(e));
		});

	}

	//获取账户余额信息及留言
	//	getDataTableData();

	function getDataTableData() {
		var url = whconfig.bizurl.mainIndex.datatable;
		var params = {
			"hotelGroupId": 2,
			"hotelId": 9,
			"date": vm.dataTableDate
		}
		console.log(JSON.stringify(params));
		whui.request(url, params, function(res) {
			console.log(JSON.stringify(res));
			vm.dataTable = res;
		}, function(e) {
			console.log("!111")
		});

	}

	whui.request("http://wthrcdn.etouch.cn/weather_mini?city=武汉", {}, function(res) {
		console.log(JSON.stringify(res));

		vm.weatherInfo = res.data.forecast;
	}, function(e) {
		console.log(JSON.stringify(e));
	}, {
		"type": "GET",
		"dealresp": false,
		'noheader': true
	});

	var echartsApp = [];

	function renderEchartsDataView(index, data) {
		var options = {
			tooltip: {
				trigger: 'item',
				formatter: "<span style='color:#27263F'>{b}</span> <br/> <div style='color:#5950E7;margin-top:12px;'>{c}</div>",
				backgroundColor: 'white',
				padding: 20,
				extraCssText: 'box-shadow: 0 0 60px #48587f;border-radius: 5px;',
			},
			legend: {
				orient: 'horizontal',
				top: 320,
				itemWidth: 14,
				itemHeight: 14,
				icon: 'circle',
				formatter: function(name) {
					var total = 0;
					var target;
					for(var i = 0, l = data.length; i < l; i++) {
						total += data[i].value;
						if(data[i].name == name) {
							target = data[i].value;
						}
					}
					var arr = [
						'{a|' + name + '}',
						'{b|' + target + '}',
					]

					return arr.join('\n')
				},
				textStyle: {
					rich: {
						a: {
							fontSize: 12,
							verticalAlign: 'top',
							padding: [0, 0, 20, 0],
							width: 50,
						},
						b: {
							fontSize: 12,
							height: 20,
							lineHeight: 20,
							//								padding: [0, 10, 0, 0],
							color: '#A8B5CB',
							width: 50
						}
					}
				},
				data: data
			},
			series: [{
				name: '访问来源',
				type: 'pie',
				radius: ['30%', '70%'],
				avoidLabelOverlap: false,
				center: ['50%', '42%'],
				hoverOffset: 15,
				itemStyle: {
					normal: {
						label: {
							show: false //隐藏标示文字
						},
						labelLine: {
							show: false //隐藏标示线
						}
					}
				},
				data: data
			}]
		};
		var elemDataView = $('#LAY-index-dataview' + index).children('div');
		echartsApp[index] = echarts.init(elemDataView[0], layui.echartsTheme);
		echartsApp[index].setOption(options);
		window.onresize = echartsApp[index].resize;
	};

	//监听侧边伸缩
	layui.admin.on('side', function() {
		console.log("side");
		layui.layer.closeAll();

		if(vm.echartsTabSelectIndex < 2) {
			renderEchartsDataView(vm.echartsTabSelectIndex, vm.pieData);
		}
	});

	//常规用法
	layui.laydate.render({
		elem: '#datePick',
		format: 'yyyy年M月d日',
		value: new Date(),
		min: dateformat.format(new Date(), 'yyyy-MM-dd'),
		isInitValue: true,
		showBottom: false,
		done: function(value, date, endDate) {
			console.log(value); 
			console.log(JSON.stringify(date));
			value = value.replace('年','-').replace('月','-').replace('日','')
			vm.dataTableDate = dateformat.format(new Date(value), 'yyyy-MM-dd');
			getDataTableData();
		}
	});

});