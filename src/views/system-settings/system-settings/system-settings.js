//数据概览
layui.use(['admin', 'whui', 'element', 'form','dateformat'], function() {
	var whui = layui.whui;
	var whconfig = layui.whconfig;
	var form = layui.form;
	var dateformat = layui.dateformat;

	var vm = new Vue({
		el: "#wh-system-settings",
		data: {
			navList: [{
					"imgDesSrc": "../../../assets/img/setting_icon_iserver.png",
					"imgSecSrc": "../../../assets/img/setting_icon_iserver_sec.png",
					"title": "iServer参数"
				},
				{
					"imgDesSrc": "../../../assets/img/setting_icon_xitongyuyan.png",
					"imgSecSrc": "../../../assets/img/setting_icon_xitongyuyan_sec.png",
					"title": "系统语言"
				},
				{
					"imgDesSrc": "../../../assets/img/setting_icon_kuyuyan.png",
					"imgSecSrc": "../../../assets/img/setting_icon_kuyuyan_sec.png",
					"title": "库语言"
				},
				{
					"imgDesSrc": "../../../assets/img/setting_icon_daimapeizhi.png",
					"imgSecSrc": "../../../assets/img/setting_icon_daimapeizhi_sec.png",
					"title": "代码配置"
				},
				{
					"imgDesSrc": "../../../assets/img/setting_icon_xitongcanshu.png",
					"imgSecSrc": "../../../assets/img/setting_icon_xitongcanshu_sec.png",
					"title": "系统参数"
				},
				{
					"imgDesSrc": "../../../assets/img/setting_icon_danjushezhi.png",
					"imgSecSrc": "../../../assets/img/setting_icon_danjushezhi_sec.png",
					"title": "单据设置"
				},
				{
					"imgDesSrc": "../../../assets/img/setting_icon_xitongyuyan.png",
					"imgSecSrc": "../../../assets/img/setting_icon_xitongyuyan_sec.png",
					"title": "其它设置"
				}
			],
			navSelectIndex: 0,
			codeTitleList: [{
				"name": "楼栋",
				"path": "listBuilding",
			}, {
				"name": "楼层",
				"path": "listFloor",
			}, {
				"name": "房型",
				"path": "listRoomtype",
			}, {
				"name": "房号",
				"path": "listRoom"
			}, {
				"name": "付款码",
				"path": "listPayCode",
			}, {
				"name": "费用码",
				"path": "listConsumeCode",
			}, {
				"name": "市场码",
				"path": "listMarketCode",
			}, {
				"name": "房价码",
				"path": "listPriceCode",
			}, {
				"name": "协议单位",
				"path": "listRsvMan",
			}, {
				"name": "销售员名称",
				"path": "listSalesMan",
			}, {
				"name": "佣金码",
				"path": "listCommissionCode",
			}],
			codeTitleWebList: [],
			codeHeadList: [
				["代码", "中文描述", "英文描述", "是否停用", "排序"],
				["代码", "中文描述", "英文描述", "是否停用", "排序"],
				["代码", "中文描述", "英文描述", "是否停用", "排序"],
				["房号", "楼号", "楼层", "房型", "排序"],
				["代码", "中文描述", "英文描述", "是否停用", "排序"],
				["代码", "中文描述", "英文描述", "是否停用", "排序"],
				["代码", "中文描述", "英文描述", "是否停用", "排序"],
				["房价码", "房价码名称", "房价码类型", "是否停用", "备注"],
				["协议单位代码", "协议单位名称", "手机号", "团队领队", "联系人"],
				["销售员代码", "名称", "性别", "电话", "备注"],
				["代码", "中文描述", "英文描述", "是否停用", "排序"]
			],
			codeContentList: [],
			codeInputList: [
				[{
					"title": "代码",
					"type": 1,
					"key": "buildingCode",
				}, {
					"title": "中文描述",
					"type": 1,
					"key": "buildingName",
				}, {
					"title": "英文描述",
					"type": 1,
					"key": "buildingEnName",
				}, {
					"title": "是否停用",
					"type": 2,
					"key": "stopped",
				}, {
					"title": "排序",
					"type": 1,
					"key": "seq",
				}],
				[{
					"title": "代码",
					"type": 1
				}, {
					"title": "中文描述",
					"type": 1
				}, {
					"title": "英文描述",
					"type": 1
				}, {
					"title": "是否停用",
					"type": 2
				}, {
					"title": "排序",
					"type": 1
				}],
				[{
					"title": "代码",
					"type": 1
				}, {
					"title": "中文描述",
					"type": 1
				}, {
					"title": "英文描述",
					"type": 1
				}, {
					"title": "是否停用",
					"type": 2
				}, {
					"title": "排序",
					"type": 1
				}],
				[{
					"title": "代码",
					"type": 1
				}, {
					"title": "中文描述",
					"type": 1
				}, {
					"title": "英文描述",
					"type": 1
				}, {
					"title": "是否停用",
					"type": 2
				}, {
					"title": "排序",
					"type": 1
				}],
				[{
					"title": "代码",
					"type": 1
				}, {
					"title": "中文描述",
					"type": 1
				}, {
					"title": "英文描述",
					"type": 1
				}, {
					"title": "是否停用",
					"type": 2
				}, {
					"title": "排序",
					"type": 1
				}],
				[{
					"title": "代码",
					"type": 1
				}, {
					"title": "中文描述",
					"type": 1
				}, {
					"title": "英文描述",
					"type": 1
				}, {
					"title": "是否停用",
					"type": 2
				}, {
					"title": "排序",
					"type": 1
				}],
				[{
					"title": "代码",
					"type": 1
				}, {
					"title": "中文描述",
					"type": 1
				}, {
					"title": "英文描述",
					"type": 1
				}, {
					"title": "是否停用",
					"type": 2
				}, {
					"title": "排序",
					"type": 1
				}],
				[{
					"title": "代码",
					"type": 1
				}, {
					"title": "中文描述",
					"type": 1
				}, {
					"title": "英文描述",
					"type": 1
				}, {
					"title": "是否停用",
					"type": 2
				}, {
					"title": "排序",
					"type": 1
				}],
				[{
					"title": "代码",
					"type": 1
				}, {
					"title": "中文描述",
					"type": 1
				}, {
					"title": "英文描述",
					"type": 1
				}, {
					"title": "是否停用",
					"type": 2
				}, {
					"title": "排序",
					"type": 1
				}],
				[{
					"title": "代码",
					"type": 1
				}, {
					"title": "中文描述",
					"type": 1
				}, {
					"title": "英文描述",
					"type": 1
				}, {
					"title": "是否停用",
					"type": 2
				}, {
					"title": "排序",
					"type": 1
				}],
				[{
					"title": "代码",
					"type": 1
				}, {
					"title": "中文描述",
					"type": 1
				}, {
					"title": "英文描述",
					"type": 1
				}, {
					"title": "是否停用",
					"type": 2
				}, {
					"title": "排序",
					"type": 1
				}]
			],
			systemContentList: [{
				"configName": "111111",
				"configValue": "1",
				"notice": "嘻嘻嘻嘻嘻",
				"inputConfigValue": "1"
			}, {
				"configName": "222222",
				"configValue": "2",
				"notice": "呵呵额呵呵呵呵",
				"inputConfigValue": "2"
			}],
			selectCodeItem: {},
			selectCodeContentItem: {},
			selectSystemItem: {
				"configName": "111111",
				"configValue": "1",
				"notice": "嘻嘻嘻嘻嘻",
				"inputConfigValue": "1"
			},
			codeItemSelectIndex: 0,
			codeContentSelectIndex: 0,
			lastCodeContentSelectIndex:0,
			systemItemSelectIndex: 0,
			systemSearchText: "",
			selectContentDetialItem: {},
			lastSelectContentDetialItem: {},
			codeItemModify:false,
			isAddCodeItem:false,
			systemItemModify:false
		},
		updated:function(){
			form.render();
		},
		methods: {
			navItemClick: function(index) {
				if(vm.navSelectIndex == index) {
					console.log("点击的是选中的");
					return false;
				}
				vm.navSelectIndex = index;

				switch(index) {
					case 0:
						break;
					case 1:
						break;
					case 2:
						break;
					case 3:
						{
							getCodeSettingList();
						}
						break;
					case 4:
						{
							getListFirstSystem();
						}
						break;
					case 5:
						break;
					case 6:
						break;
					default:
						break;
				}
			},
			codeItemClick: function(item, index) {
				if(vm.codeItemSelectIndex == index) {
					console.log("点击的是选中的");
					return false;
				}
				console.log(index);
				vm.codeItemSelectIndex = index;
				vm.selectCodeItem = vm.codeTitleWebList[index];

				getCodeContentList();
			},
			codeContentItemClick: function(item, index) {
				if(vm.codeContentSelectIndex == index) {
					console.log("点击的是选中的");
					return false;
				}
				vm.codeItemModify = false;
				vm.codeContentSelectIndex = index;
				vm.lastCodeContentSelectIndex = index;
				vm.selectCodeContentItem = vm.codeContentList[index];
				
				getSelectContentItemDetial();
				
			},
			addCodeContentItem: function(){
				console.log("addCodeContentItem");
				vm.codeItemModify = true;
				vm.isAddCodeItem = true;
				vm.codeContentSelectIndex = null;
				vm.selectContentDetialItem = {};
				vm.selectContentDetialItem.stopped = "N";
			},
			cancelCodeContentItem: function(){
				console.log("addCodeContentItem");
				vm.codeItemModify = false;
				vm.isAddCodeItem = false;
				vm.codeContentSelectIndex = vm.lastCodeContentSelectIndex;
				console.log(JSON.stringify(vm.codeContentList[0]));
				vm.selectContentDetialItem = vm.lastSelectContentDetialItem;
			},
			saveContentItem: function(){
				if(vm.isAddCodeItem){
					InsertContentItem();
				}else{
					updateContentItem();
				}
			},
			modifyCodeContentItem: function(){
				console.log("addCodeContentItem");
				vm.codeItemModify = true;
				vm.isAddCodeItem = false;
				vm.codeContentSelectIndex = vm.lastCodeContentSelectIndex;
				console.log(JSON.stringify(vm.codeContentList[0]));
				vm.selectContentDetialItem = vm.lastSelectContentDetialItem;
			},
			deleteCodeContentItem: function(){
				deleteContentItem();
			},
			modifySystemContentItem: function(){
				vm.systemItemModify = true;
			},
			cancelSystemContentItem:function(){
				vm.systemItemModify = false;
			},
			systemItemClick: function(item, index) {
				if(vm.systemItemSelectIndex == index) {
					console.log("点击的是选中的");
					return false;
				}
				vm.systemItemSelectIndex = index;
				vm.selectSystemItem = vm.systemContentList[index];
			},
			systemSearchClick: function() {
				console.log("systemSearchClick");
				getListFirstSystem();
			}
		}
	})

	form.render();

	form.on('submit(systemSave)', function() {
		updateSystemConfig();
	});

	form.on('radio', function(e) {
		console.log('radio');
		console.log(e.value);
		
		if(vm.selectContentDetialItem.stopped == e.value){
			console.log("点击的是选中的");
			return false;
		}
		
		if(!vm.codeItemModify){
			console.log("非修改状态下,修改无效");
			return false;
		}
		
		vm.selectContentDetialItem.stopped = e.value;
	});

	//监听侧边伸缩
	layui.admin.on('side', function() {
		console.log("side");
	});

	function getCodeSettingList() {
		vm.codeTitleWebList = [];
		vm.codeItemSelectIndex = 0;
		vm.selectCodeItem = {};
		var url = whconfig.bizurl.systemSettings.listFirstConfig;
		var params = {
			"hotelGroupId": 2,
			"hotelId": 9
		}
		console.log(url);
		console.log(JSON.stringify(params));
		whui.request(url, params, function(res) {
			console.log(JSON.stringify(res));
			if(!whui.isEmptyObject(res)) {
				var fixList = vm.codeTitleList;
				vm.codeTitleWebList = fixList.concat(res);
				vm.selectCodeItem = vm.codeTitleWebList[0];

				for(var i in res) {
					var inputList = [{
						"title": "代码",
						"type": 1
					}, {
						"title": "中文描述",
						"type": 1
					}, {
						"title": "英文描述",
						"type": 1
					}, {
						"title": "是否停用",
						"type": 2
					}, {
						"title": "排序",
						"type": 1
					}];
					var headList = ["代码", "中文描述", "英文描述", "是否停用", "排序"];
					vm.codeInputList.push(inputList);
					vm.codeHeadList.push(headList);
				}

				getCodeContentList();
			}
		}, function(e) {
			console.log('error:' + JSON.stringify(e));
		});
	}

	function getCodeContentList() {
		vm.codeContentList = [];
		vm.codeContentSelectIndex = 0;
		vm.selectCodeContentItem = {};

		var url = whconfig.bizurl.systemSettings.codeListHeadUrl + vm.selectCodeItem.path;
		var params = {
			"hotelGroupId": 2,
			"hotelId": 9,
			"configCode": vm.selectCodeItem.configCode
		}
		console.log(url);
		console.log(JSON.stringify(params));
		whui.request(url, params, function(res) {
			console.log(JSON.stringify(res));

			if(!whui.isEmptyObject(res.list)) {
				vm.codeContentList = res.list;
				vm.selectCodeContentItem = res.list[0];
				
				vm.codeContentDatailPath = res.path;
				getSelectContentItemDetial();
			}

		}, function(e) {
			console.log('error:' + JSON.stringify(e));
		});
	}

	function getSelectContentItemDetial() {
		vm.selectContentDetialItem = {};

		var url = whconfig.bizurl.systemSettings.codeListHeadUrl + vm.codeContentDatailPath.pathSelect;
		var params = {
			"hotelGroupId": 2,
			"hotelId": 9,
			"id": vm.selectCodeContentItem.id
		}
		console.log(url);
		console.log(JSON.stringify(params));
		whui.request(url, params, function(res) {
			console.log(JSON.stringify(res));
			
			res.createDate = dateformat.format(new Date(res.createDate), 'yyyy-MM-dd hh:mm');
			res.updateDate = dateformat.format(new Date(res.updateDate), 'yyyy-MM-dd hh:mm');
			vm.selectContentDetialItem = res;
			
			vm.lastSelectContentDetialItem = res;
			

		}, function(e) {
			console.log('error:' + JSON.stringify(e));
		});
	}
	
	function InsertContentItem() {

		var url = whconfig.bizurl.systemSettings.codeListHeadUrl + vm.codeContentDatailPath.pathInsert;
		var params = {
			"hotelGroupId": 2,
			"hotelId": 9,
		}
		
		params = jQuery.extend(params,vm.selectContentDetialItem);
		
		console.log(url);
		console.log(JSON.stringify(params));
		whui.request(url, params, function(res) {
			console.log(JSON.stringify(res));
			
			vm.codeItemModify = false;
			vm.isAddCodeItem = false;
			
			getCodeContentList();

		}, function(e) {
			console.log('error:' + JSON.stringify(e));
		});
	}
	
	function updateContentItem() {

		var url = whconfig.bizurl.systemSettings.codeListHeadUrl + vm.codeContentDatailPath.pathUpdate;
		var params = {
			"hotelGroupId": 2,
			"hotelId": 9,
		}
		
		params = jQuery.extend(params,vm.selectContentDetialItem);
		
		console.log(url);
		console.log(JSON.stringify(params));
		whui.request(url, params, function(res) {
			console.log(JSON.stringify(res));
			vm.codeItemModify = false;
			vm.isAddCodeItem = false;
			getCodeContentList();

		}, function(e) {
			console.log('error:' + JSON.stringify(e));
		});
	}
	
	function deleteContentItem() {

		var url = whconfig.bizurl.systemSettings.codeListHeadUrl + vm.codeContentDatailPath.pathDelete;
		var params = {
			"hotelGroupId": 2,
			"hotelId": 9,
			"id": vm.selectCodeContentItem.id
		}
		
		console.log(url);
		console.log(JSON.stringify(params));
		whui.request(url, params, function(res) {
			console.log(JSON.stringify(res));
			getCodeContentList();
			
		}, function(e) {
			console.log('error:' + JSON.stringify(e));
		});
	}
	

	function getListFirstSystem() {
		var url = whconfig.bizurl.systemSettings.listFirstSystem;
		var params = {
			"hotelGroupId": 2,
			"hotelId": 9,
			"configName": vm.systemSearchText
		}
		console.log(url);
		console.log(JSON.stringify(params));
		whui.request(url, params, function(res) {
			console.log(JSON.stringify(res));
			if(!whui.isEmptyObject(res)) {
				var dataList = res;

				for(var i in dataList) {
					var item = dataList[i];
					item.inputConfigValue = item.configValue;
				}

				vm.systemContentList = dataList;
				vm.selectSystemItem = dataList[0];
			}
		}, function(e) {
			console.log('error:' + JSON.stringify(e));
		});

	}

	function updateSystemConfig() {
		var url = whconfig.bizurl.systemSettings.updateFirstSystem;
		var params = {
			"hotelGroupId": 2,
			"hotelId": 9,
			"tbpp01Id": vm.selectSystemItem.tbpp01Id,
			"configValue": vm.selectSystemItem.inputConfigValue
		}
		console.log(url);
		console.log(JSON.stringify(params));
		whui.request(url, params, function(res) {
			console.log(JSON.stringify(res));
			vm.systemSearchText = "";
			getListFirstSystem();
		}, function(e) {
			console.log('error:' + JSON.stringify(e));
		});
	}

});