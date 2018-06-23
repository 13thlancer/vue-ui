//数据概览
layui.use(['admin', 'whui', 'element', 'form', 'laydate', 'dateformat'], function() {
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
				"path": "listRoomType",
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
				["销售员代码", "名称", "性别", "电话", "是否停用"],
				["代码", "中文描述", "英文描述", "是否停用", "排序"]
			],
			codeContentList: [],
			codeInputList: [
				[{
					"title": "代码",
					"type": 1,
					"nameKey": "buildingCode",
				}, {
					"title": "中文描述",
					"type": 1,
					"nameKey": "buildingName",
				}, {
					"title": "英文描述",
					"type": 1,
					"nameKey": "buildingEnName",
				}, {
					"title": "是否停用",
					"type": 2,
					"nameKey": "stopped",
				}, {
					"title": "排序",
					"type": 1,
					"nameKey": "seq",
				}],
				[{
					"title": "代码",
					"type": 1,
					"nameKey": "floorCode",
				}, {
					"title": "中文描述",
					"type": 1,
					"nameKey": "floorName",
				}, {
					"title": "英文描述",
					"type": 1,
					"nameKey": "floorEnName",
				}, {
					"title": "楼号",
					"type": 3,
					"nameKey": "buildingName",
					"codeKey": "buildingCode"
				}, {
					"title": "是否停用",
					"type": 2,
					"nameKey": "stopped",
				}, {
					"title": "排序",
					"type": 1,
					"nameKey": "seq",
				}],
				[{
						"title": "代码",
						"type": 1,
						"nameKey": "roomTypeCode"
					}, {
						"title": "中文描述",
						"type": 1,
						"nameKey": "roomTypeName"
					}, {
						"title": "英文描述",
						"type": 1,
						"nameKey": "roomTypeEnName"
					},
					{
						"title": "房型数量",
						"type": 1,
						"nameKey": "num"
					}, {
						"title": "最大可住人数",
						"type": 1,
						"nameKey": "maxPerson"
					}, {
						"title": "是否停用",
						"type": 2,
						"nameKey": "stopped"
					}, {
						"title": "排序",
						"type": 1,
						"nameKey": "seq"
					}
				],
				[{
						"title": "房号",
						"type": 1,
						"nameKey": "roomCode"
					}, {
						"title": "楼号",
						"type": 3,
						"nameKey": "buildingName",
						"codeKey": "buildingCode"
					}, {
						"title": "楼层",
						"type": 3,
						"nameKey": "floorName",
						"codeKey": "floorCode"
					}, {
						"title": "房类",
						"type": 3,
						"nameKey": "roomTypeName",
						"codeKey": "roomTypeCode"
					}, {
						"title": "床数",
						"type": 1,
						"nameKey": "beds"
					}, {
						"title": "客房特征",
						"type": 3,
						"nameKey": "roomSpecNames",
						"codeKey": "roomSpec",
						"configCode": "ROOM_LOCATION",
						"popType": 1
					}, {
						"title": "电话长号",
						"type": 1,
						"nameKey": "tel"
					}, {
						"title": "电话短号",
						"type": 1,
						"nameKey": "telShort"
					}, {
						"title": "门锁锁号",
						"type": 1,
						"nameKey": "lockRoomNo"
					}, {
						"title": "备注",
						"type": 4,
						"nameKey": "remark"
					},
					{
						"title": "是否停用",
						"type": 2,
						"nameKey": "stopped",
					},
					{
						"title": "是否可用于钟点房",
						"type": 2,
						"nameKey": "hourFlag",
					}, {
						"title": "排序",
						"type": 1,
						"nameKey": "seq"
					}
				],
				[{
					"title": "代码",
					"type": 1,
					"nameKey": "payCode",
				}, {
					"title": "中文描述",
					"type": 1,
					"nameKey": "zhName",
				}, {
					"title": "英文描述",
					"type": 1,
					"nameKey": "enName",
				}, {
					"title": "适用范围",
					"type": 3,
					"nameKey": "areasName",
					"codeKey": "areas",
					"configCode": "AREARS"
				}, {
					"title": "付款类别",
					"type": 3,
					"nameKey": "payTypeName",
					"codeKey": "payType",
					"configCode": "PAYTYPE"
				}, {
					"title": "内部码",
					"type": 3,
					"nameKey": "innerCodeName",
					"codeKey": "innerCode",
					"configCode": "INNERCODE"
				}, {
					"title": "退款码",
					"type": 3,
					"nameKey": "backpayCodeName",
					"codeKey": "backpayCode",
					"configCode": "BACKPAY_CODE"
				}, {
					"title": "是否停用",
					"type": 2,
					"nameKey": "stopped",
				}, {
					"title": "排序",
					"type": 1,
					"nameKey": "seq",
				}, {
					"title": "是否信用卡",
					"type": 2,
					"nameKey": "creditFlag",
				}, {
					"title": "只能做结账付款，不能做定金",
					"type": 2,
					"nameKey": "earnestFlag",
				}],
				[{
					"title": "代码",
					"type": 1,
					"nameKey": "consumeCode",
				}, {
					"title": "中文描述",
					"type": 1,
					"nameKey": "zhName",
				}, {
					"title": "英文描述",
					"type": 1,
					"nameKey": "enName",
				}, {
					"title": "适用范围",
					"type": 3,
					"nameKey": "areasName",
					"codeKey": "areas",
					"configCode": "AREARS"
				}, {
					"title": " 费用类别",
					"type": 3,
					"nameKey": "costTypeName",
					"codeKey": "costType",
					"configCode": "COSTTYPE"
				}, {
					"title": "营业部门",
					"type": 3,
					"nameKey": "opDivisionName",
					"codeKey": "opDivision",
					"configCode": "OP_DIVISION"
				}, {
					"title": "记账类别",
					"type": 3,
					"nameKey": "ioAccountTypeName",
					"codeKey": "ioAccountType",
					"configCode": "IO_ACCOUNT_TYPE"
				}, {
					"title": "余额表",
					"type": 3,
					"nameKey": "balanceTableName",
					"codeKey": "balanceTable",
					"configCode": "BALANCE_TABLE"
				}, {
					"title": "业绩统计",
					"type": 3,
					"nameKey": "achievementCountName",
					"codeKey": "achievementCount",
					"configCode": "ACHIEVEMENT_COUNT"
				}, {
					"title": "是否停用",
					"type": 2,
					"nameKey": "stopped",
				}, {
					"title": "排序",
					"type": 1,
					"nameKey": "seq",
				}],
				[{
					"title": "代码",
					"type": 1,
					"nameKey": "marketCode",
				}, {
					"title": "中文描述",
					"type": 1,
					"nameKey": "zhName",
				}, {
					"title": "英文描述",
					"type": 1,
					"nameKey": "enName",
				}, {
					"title": "标记",
					"type": 3,
					"nameKey": "signTypeName",
					"codeKey": "signType",
					"configCode": "SIGN_TYPE"
				}, {
					"title": "房价类别",
					"type": 3,
					"nameKey": "roomPriceTypeName",
					"codeKey": "roomPriceType",
					"configCode": "ROOM_PRICE_TYPE"
				}, {
					"title": "是否停用",
					"type": 2,
					"nameKey": "stopped",
				}, {
					"title": "排序",
					"type": 1,
					"nameKey": "seq",
				}],
				[{
						"title": "房价码",
						"type": 1,
						"nameKey": "priceCode"
					}, {
						"title": "房价码名称",
						"type": 1,
						"nameKey": "priceName"
					}, {
						"title": "房价码类型",
						"type": 3,
						"nameKey": "priceType"
					},
					{
						"title": "生效开始时间",
						"type": 6,
						"nameKey": "startTime",
					}, {
						"title": "生效结束时间",
						"type": 6,
						"nameKey": "endTime"
					}, {
						"title": "是否停用",
						"type": 2,
						"nameKey": "stopped"
					}, {
						"title": "备注",
						"type": 4,
						"nameKey": "remark"
					}
				],
				[{
					"title": "代码",
					"type": 1,
					"nameKey": "memberNo"
				}, {
					"title": "协议单位名称",
					"type": 1,
					"nameKey": "rsvCompany"
				}, {
					"title": "协议单位类型",
					"type": 3,
					"nameKey": "memberTypeName",
					"codeKey": "memberType",
					"configCode": "MEMBER_TYPE"
				}, {
					"title": "团队领队",
					"type": 1,
					"nameKey": "groupManager"
				}, {
					"title": "地址",
					"type": 1,
					"nameKey": "address"
				}, {
					"title": "联系人",
					"type": 1,
					"nameKey": "contactPerson"
				}, {
					"title": "手机号",
					"type": 1,
					"nameKey": "mobile"
				}, {
					"title": "银行号",
					"type": 1,
					"nameKey": "bankNo"
				}],
				[{
					"title": "代码",
					"type": 1,
					"nameKey": "code"
				}, {
					"title": "姓名",
					"type": 1,
					"nameKey": "name"
				}, {
					"title": "性别",
					"type": 5,
					"nameKey": "sex"
				}, {
					"title": "证件类型",
					"type": 3,
					"nameKey": "idTypeName",
					"codeKey": "idType",
					"configCode": "ID_TYPE"
				}, {
					"title": "证件号",
					"type": 1,
					"nameKey": "idNo"
				}, {
					"title": "地址",
					"type": 1,
					"nameKey": "address"
				}, {
					"title": "电话",
					"type": 1,
					"nameKey": "mobile"
				}, {
					"title": "部门",
					"type": 1,
					"nameKey": "dept"
				}, {
					"title": "销售区域",
					"type": 3,
					"nameKey": "salesZoneName",
					"codeKey": "salesZone",
					"configCode": "SALES_ZONE"
				}, {
					"title": "是否停用",
					"type": 2,
					"nameKey": "stopped"
				}],
				[{
					"title": "代码",
					"type": 1,
					"nameKey": "commissionCode"
				}, {
					"title": "中文描述",
					"type": 1,
					"nameKey": "notice"
				}, {
					"title": "英文描述",
					"type": 1,
					"nameKey": "enNotice"
				}, {
					"title": "是否阶梯分房类",
					"type": 2,
					"nameKey": "ladderRoom"
				}, {
					"title": "阶梯时段",
					"type": 3,
					"nameKey": "ladderTimeName",
					"codeKey": "ladderTime",
					"configCode": "LADDER_TIME"
				}, {
					"title": "开始时间",
					"type": 6,
					"nameKey": "startTime"
				}, {
					"title": "结束时间",
					"type": 6,
					"nameKey": "endTime"
				}, {
					"title": "是否私有",
					"type": 2,
					"nameKey": "privated"
				}, {
					"title": "是否停用",
					"type": 2,
					"nameKey": "stopped"
				}, {
					"title": "排序",
					"type": 1,
					"nameKey": "seq"
				}, {
					"title": "备注",
					"type": 4,
					"nameKey": "remark"
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
			selectCodeContentIdArr:[],
			selectSystemItem: {
				"configName": "111111",
				"configValue": "1",
				"notice": "嘻嘻嘻嘻嘻",
				"inputConfigValue": "1"
			},
			codeItemSelectIndex: 0,
			codeContentSelectIndex: 0,
			ctrlIndex:0,
			systemItemSelectIndex: 0,
			systemSearchText: "",
			selectContentDetialItem: {},
			selectContentDetialItemPath: {},
			lastSelectContentDetialItem: {},
			codeItemModify: false,
			isAddCodeItem: false,
			systemItemModify: false
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
				vm.codeItemModify = false;
				vm.isAddCodeItem = false;
				vm.codeItemSelectIndex = index;
				vm.selectCodeItem = vm.codeTitleWebList[index];
				console.log(JSON.stringify(vm.selectCodeItem));
				getCodeContentList();
			},
			codeContentItemClick: function(item, index, e) {
				if(!e.ctrlKey && !e.shiftKey) {
					if(item.selected == true) {
						console.log("点击的是选中的");
//						return false;
					}
					vm.codeItemModify = false;
					vm.isAddCodeItem = false;
					for(var i in vm.codeContentList){
						vm.codeContentList[i].selected = false;
					}
					vm.selectCodeContentIdArr = [];
					item.selected = true;
					vm.selectCodeContentItem = item;
					vm.selectCodeContentIdArr.push(item.id);
					vm.codeContentSelectIndex = index;
					getSelectContentItemDetial();
				}
			},
			codeContentMultipleCtrlClick: function(item, index) {
				console.log("codeContentMultipleCtrlClick");
				
				if(vm.codeItemSelectIndex != 3){
					return false;
				}

				if(vm.codeItemModify || vm.isAddCodeItem) {
					vm.codeItemModify = false;
					vm.isAddCodeItem = false;
					vm.selectCodeContentItem.selected = true;
					getSelectContentItemDetial();
				}
				
				
				if(item.selected){
					if(vm.selectCodeContentIdArr.length == 1){
						console.log("剩余1条无法反选");
						return false;
					}
					item.selected = false;
					removeByValue(vm.selectCodeContentIdArr,item.id);
					if(vm.selectCodeContentIdArr.length == 1){
						vm.selectCodeContentItem = item;
						vm.codeContentSelectIndex = index;
						getSelectContentItemDetial();
					}
				}else{
					item.selected = true;
					vm.selectCodeContentIdArr.push(item.id);
					vm.ctrlIndex = index;
				}
				

			},
			codeContentMultipleShiftClick: function(item, index) {
				console.log("codeContentMultipleShiftClick");
				
				if(vm.codeItemSelectIndex != 3){
					return false;
				}
				
				
				if(vm.codeItemModify || vm.isAddCodeItem) {
					vm.codeItemModify = false;
					vm.isAddCodeItem = false;
					vm.selectCodeContentItem.selected = true;
					getSelectContentItemDetial();
				}
				
				for(var i in vm.codeContentList){
					vm.codeContentList[i].selected = false;
				}
				vm.selectCodeContentIdArr = [];
				console.log(vm.ctrlIndex,index);
				if(vm.ctrlIndex > index){
					for(var i in vm.codeContentList){
						if(i>=index && i<=vm.ctrlIndex){
							vm.codeContentList[i].selected = true;
							vm.selectCodeContentIdArr.push(vm.codeContentList[i].id);
						}
					}
				}else if(vm.ctrlIndex < index){
					for(var i in vm.codeContentList){
						if(i<=index && i>=vm.ctrlIndex){
							vm.codeContentList[i].selected = true;
							vm.selectCodeContentIdArr.push(vm.codeContentList[i].id);
						}
					}
				}else{
					vm.ctrlIndex = index;
					item.selected = true;
					vm.selectCodeContentItem = item;
					vm.codeContentSelectIndex = index;
					vm.selectCodeContentIdArr.push(item.id);
					getSelectContentItemDetial();
				}
				
			},
			codeRadioClick: function(type, keyStr) {

				console.log(keyStr);
				if(vm.selectContentDetialItem[keyStr] == type) {
					console.log("点击的是选中的");
					return false;
				}

				if(!vm.codeItemModify) {
					console.log("非修改状态下,修改无效");
					return false;
				}

				vm.selectContentDetialItem[keyStr] = type;
				console.log(JSON.stringify(vm.selectContentDetialItem));

			},
			codeShowPopView: function(subPath, inputItem) {
				console.log("codeShowPopView");
				console.log(JSON.stringify(inputItem));
				var layerId = 'codeSinglePopView';

				if(inputItem.popType == 1) {
					jQuery.get('../../system-settings/system-settings-subwindow/system-subwindow-checkbox.html', function(html) {
						layer.open({
							content: html,
							id: layerId,
							type: 1,
							shadeClose: true,
							title: false,
							offset: ['244px', '800px'],
							area: ['541px', '560px'],
							success: function() {
								var vm1 = new Vue({
									el: "#" + layerId,
									data: {
										dataList: [],
										isSelectAll: false,
										selectNameArr: [],
										selectCodeArr: [],
									},
									methods: {
										selectAllClick: function() {
											vm1.selectNameArr = [];
											vm1.selectCodeArr = [];
											if(vm1.isSelectAll) {
												for(var i in vm1.dataList) {
													vm1.dataList[i].selected = false;
												}
											} else {

												for(var i in vm1.dataList) {
													var temp = vm1.dataList[i];
													temp.selected = true;
													vm1.selectNameArr.push(temp.text);
													vm1.selectCodeArr.push(temp.id);
												}
											}

											vm1.isSelectAll = !vm1.isSelectAll;

										},
										selectItemClick: function(item) {
											if(item.selected) {

												removeByValue(vm1.selectNameArr, item.text);
												removeByValue(vm1.selectCodeArr, item.id);
											} else {
												vm1.selectNameArr.push(item.text);
												vm1.selectCodeArr.push(item.id);
											}

											if(vm1.selectNameArr.length == vm1.dataList.length) {
												vm1.isSelectAll = true;
											} else {
												vm1.isSelectAll = false;
											}

											item.selected = !item.selected
										},
										cancelBtnClick: function() {
											layer.closeAll();
										},
										confirmBtnClick: function() {
											var codeStr = vm1.selectCodeArr.join(",");
											var nameStr = vm1.selectNameArr.join(",");

											vm.selectContentDetialItem[inputItem.nameKey] = nameStr;
											vm.selectContentDetialItem[inputItem.codeKey] = codeStr;
											layer.closeAll();
										}
									}
								})
								var params = {
									"hotelGroupId": 2,
									"hotelId": 9,
									"configCode": inputItem.configCode
								}
								console.log(JSON.stringify(params));
								var url = whconfig.bizurl.systemSettings.codeListHeadUrl + subPath;
								console.log(url);
								whui.request(url, params,
									function(res) {
										console.log(JSON.stringify(res));
										console.log(JSON.stringify(inputItem));
										var nameStr = vm.selectContentDetialItem[inputItem.nameKey];
										vm1.selectNameArr = nameStr.split(",");
										var codeStr = vm.selectContentDetialItem[inputItem.codeKey];
										vm1.selectCodeArr = codeStr.split(",");
										for(var i in res) {
											var temp = res[i];
											temp.selected = false;
											for(var j in vm1.selectCodeArr) {
												var code = vm1.selectCodeArr[j];
												if(temp.id == code) {
													temp.selected = true;
												}

											}
										}

										vm1.dataList = res;

									}
								);
							}
						});
						jQuery(".layui-layer-shade").css("opacity", "0");
					});

				} else {
					jQuery.get('../../system-settings/system-settings-subwindow/system-subwindow-regular.html', function(html) {
						layer.open({
							content: html,
							id: layerId,
							type: 1,
							shadeClose: true,
							title: false,
							offset: ['244px', '800px'],
							area: ['541px', '540px'],
							success: function() {
								var vm1 = new Vue({
									el: "#" + layerId,
									data: {
										dataList: [],
										selectItemCode: ""
									},
									methods: {
										selectItemClick: function(item) {
											if(vm1.selectItemCode == item.id) {
												console.log("点击的是选中的")
												return false;
											}

											vm1.selectItemCode = item.id;
											vm.selectContentDetialItem[inputItem.nameKey] = item.text;
											vm.selectContentDetialItem[inputItem.codeKey] = item.id;
											layer.closeAll();
										}
									}
								})
								var params = {
									"hotelGroupId": 2,
									"hotelId": 9,
									"configCode": inputItem.configCode
								}
								console.log(JSON.stringify(params));
								var url = whconfig.bizurl.systemSettings.codeListHeadUrl + subPath;
								console.log(url);
								whui.request(url, params,
									function(res) {
										console.log(JSON.stringify(res));

										vm1.dataList = res;
										vm1.selectItemCode = vm.selectContentDetialItem[inputItem.codeKey];
									}
								);
							}
						});
						jQuery(".layui-layer-shade").css("opacity", "0");
					});
				}

			},
			addCodeContentItem: function() {
				console.log("addCodeContentItem");
				vm.codeItemModify = true;
				vm.isAddCodeItem = true;
				vm.selectCodeContentItem.selected = false;

				for(var i in vm.selectContentDetialItem) {

					vm.selectContentDetialItem[i] = ""
					vm.selectContentDetialItem.stopped = "N";

					if(vm.codeItemSelectIndex == 4) {
						vm.selectContentDetialItem.creditFlag = "N";
						vm.selectContentDetialItem.earnestFlag = "N";
					} else if(vm.codeItemSelectIndex == 9) {
						vm.selectContentDetialItem.sex = "0";
					} else if(vm.codeItemSelectIndex == 10) {
						vm.selectContentDetialItem.ladderRoom = "N";
						vm.selectContentDetialItem.privated = "N";
					}

				}

			},
			multipleAddCodeContentItem: function() {
				vm.codeItemModify = false;
				vm.isAddCodeItem = false;
				console.log("multipleAddCodeContentItem");
				var layerId = "mutipleAddId"
				jQuery.get('../../system-settings/system-settings-subwindow/system-subwindow-multiple-add.html', function(html) {
					layer.open({
						content: html,
						id: layerId,
						title: "批量增加",
						type: 1,
						shadeClose: true,
						title: false,
						area: ['620px', '878px'],
						success: function() {
							var vm1 = new Vue({
								el: "#" + layerId,
								data: {
									multipleInputList: [{
											"title": "楼栋",
											"type": 2,
											"nameKey": "buildingName",
											"codeKey": "buildingCode",
										},
										{
											"title": "楼层",
											"type": 2,
											"nameKey": "floorName",
											"codeKey": "floorCode",
										}, {
											"title": "房型",
											"type": 2,
											"nameKey": "roomTypeName",
											"codeKey": "roomTypeCode",
										}, {
											"title": "客房特征",
											"type": 2,
											"nameKey": "roomSpecNames",
											"codeKey": "roomSpec",
											"configCode": "ROOM_LOCATION",
											"popType": 1
										}, {
											"title": "房号前缀",
											"type": 1,
											"nameKey": "roomPrefix",
										}, {
											"title": "房号范围",
											"type": 3,
											"nameKey1": "roomStart",
											"nameKey2": "roomEnd",
										}, {
											"title": "分机号前缀",
											"type": 1,
											"nameKey": "mobilePrefix",
										}, {
											"title": "锁号前缀",
											"type": 1,
											"nameKey": "lockPrefix",
										}
									],
									multipleParams: {
										"hotelGroupId": 2,
										"hotelId": 9,
										"buildingName": "",
										"buildingCode": "",
										"floorName": "",
										"floorCode": "",
										"roomTypeName": "",
										"roomTypeCode": "",
										"roomSpecNames": "",
										"roomSpec": "",
										"roomPrefix": "",
										"roomStart": "",
										"roomEnd": "",
										"mobilePrefix": "",
										"lockPrefix": "",
									}
								},
								methods: {
									closeImgClick: function() {
										layer.closeAll();
									},
									multiplePopCancelClick: function() {
										console.log("multiplePopCancelClick");
										layer.closeAll();
									},
									multiplePopConfirmClick: function() {
										console.log("multiplePopConfirmClick");
										var url = whconfig.bizurl.systemSettings.insertRooms;
										console.log(url);
										console.log(JSON.stringify(vm1.multipleParams));
										whui.request(url, vm1.multipleParams,
											function(res) {
												console.log(JSON.stringify(res));
												getCodeContentList();
												layer.closeAll();
											}
										);
									},
									multipleInputClick: function(inputItem, index, idStr) {
										var layerId = 'codeSinglePopView';
										var cTarget = document.getElementById(idStr);
										var top = cTarget.getBoundingClientRect().top + "px";
										var left = cTarget.getBoundingClientRect().left + 315 + "px";
										if(inputItem.popType == 1) {
											jQuery.get('../../system-settings/system-settings-subwindow/system-subwindow-checkbox.html', function(html) {
												var multipleLayer = layer.open({
													content: html,
													id: layerId,
													type: 1,
													shadeClose: true,
													title: false,
													offset: [top, left],
													area: ['541px', '560px'],
													success: function() {
														var vm2 = new Vue({
															el: "#" + layerId,
															data: {
																dataList: [],
																isSelectAll: false,
																selectNameArr: [],
																selectCodeArr: [],
															},
															methods: {
																selectAllClick: function() {
																	vm2.selectNameArr = [];
																	vm2.selectCodeArr = [];
																	if(vm2.isSelectAll) {
																		for(var i in vm2.dataList) {
																			vm2.dataList[i].selected = false;
																		}
																	} else {

																		for(var i in vm2.dataList) {
																			var temp = vm2.dataList[i];
																			temp.selected = true;
																			vm2.selectNameArr.push(temp.text);
																			vm2.selectCodeArr.push(temp.id);
																		}
																	}

																	vm2.isSelectAll = !vm2.isSelectAll;

																},
																selectItemClick: function(item) {
																	if(item.selected) {

																		removeByValue(vm2.selectNameArr, item.text);
																		removeByValue(vm2.selectCodeArr, item.id);
																	} else {
																		vm2.selectNameArr.push(item.text);
																		vm2.selectCodeArr.push(item.id);
																	}

																	if(vm2.selectNameArr.length == vm2.dataList.length) {
																		vm2.isSelectAll = true;
																	} else {
																		vm2.isSelectAll = false;
																	}

																	item.selected = !item.selected
																},
																cancelBtnClick: function() {
																	layer.close(multipleLayer);
																},
																confirmBtnClick: function() {
																	var codeStr = vm2.selectCodeArr.join(",");
																	var nameStr = vm2.selectNameArr.join(",");

																	vm1.multipleParams[inputItem.nameKey] = nameStr;
																	vm1.multipleParams[inputItem.codeKey] = codeStr;
																	layer.close(multipleLayer);
																}
															}
														})
														var params = {
															"hotelGroupId": 2,
															"hotelId": 9,
															"configCode": inputItem.configCode
														}
														console.log(JSON.stringify(params));
														var url = whconfig.bizurl.systemSettings.codeListHeadUrl + vm.selectContentDetialItemPath[inputItem.nameKey];
														console.log(url);
														whui.request(url, params,
															function(res) {
																console.log(JSON.stringify(res));
																console.log(JSON.stringify(inputItem));

																var nameStr = vm1.multipleParams[inputItem.nameKey];
																if(whui.isNotEmpty(nameStr)) {
																	vm2.selectNameArr = nameStr.split(",");
																}
																var codeStr = vm1.multipleParams[inputItem.codeKey];
																if(whui.isNotEmpty(nameStr)) {
																	vm2.selectCodeArr = codeStr.split(",");
																}
																for(var i in res) {
																	var temp = res[i];
																	temp.selected = false;
																	for(var j in vm2.selectCodeArr) {
																		var code = vm2.selectCodeArr[j];
																		if(temp.id == code) {
																			temp.selected = true;
																		}

																	}
																}

																vm2.dataList = res;

															}
														);
													}
												});
												jQuery(".layui-layer-shade").css("opacity", "0");
											});

										} else {
											jQuery.get('../../system-settings/system-settings-subwindow/system-subwindow-regular.html', function(html) {
												var singleLayer = layer.open({
													content: html,
													id: layerId,
													type: 1,
													shadeClose: true,
													title: false,
													offset: [top, left],
													area: ['541px', '540px'],
													success: function() {
														var vm2 = new Vue({
															el: "#" + layerId,
															data: {
																dataList: [],
																selectItemCode: ""
															},
															methods: {
																selectItemClick: function(item) {
																	if(vm2.selectItemCode == item.id) {
																		console.log("点击的是选中的")
																		//																		return false;
																	}

																	vm2.selectItemCode = item.id;
																	vm1.multipleParams[inputItem.nameKey] = item.text;
																	vm1.multipleParams[inputItem.codeKey] = item.id;
																	console.log(JSON.stringify(vm1.multipleParams));
																	layer.close(singleLayer);
																}
															}
														})
														var params = {
															"hotelGroupId": 2,
															"hotelId": 9,
															"configCode": inputItem.configCode
														}
														console.log(JSON.stringify(params));
														var url = whconfig.bizurl.systemSettings.codeListHeadUrl + vm.selectContentDetialItemPath[inputItem.nameKey];
														console.log(url);
														whui.request(url, params,
															function(res) {
																console.log(JSON.stringify(res));

																vm2.dataList = res;
																vm2.selectItemCode = vm1.multipleParams[inputItem.codeKey];
															}
														);
													}
												});
												jQuery(".layui-layer-shade").css("opacity", "0");
											});
										}
									}
								}
							})

						}
					});
				});
				jQuery(".layui-layer-shade").css("opacity", "0");

			},
			cancelCodeContentItem: function() {
				console.log("cancelCodeContentItem");
				vm.codeItemModify = false;
				vm.isAddCodeItem = false;
				vm.selectCodeContentItem.selected = true;
				getSelectContentItemDetial();

			},
			saveContentItem: function() {
				if(vm.isAddCodeItem) {
					InsertContentItem();
				} else {
					updateContentItem();
				}
			},
			modifyCodeContentItem: function() {
				console.log("modifyCodeContentItem");
				vm.codeItemModify = true;
				vm.isAddCodeItem = false;
			},
			deleteCodeContentItem: function() {
				deleteContentItem();
			},
			modifySystemContentItem: function() {
				vm.systemItemModify = true;
			},
			cancelSystemContentItem: function() {
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

	//监听侧边伸缩
	layui.admin.on('side', function() {
		console.log("side");
	});

	function getCodeSettingList() {
		vm.codeTitleWebList = [];
		vm.codeItemSelectIndex = 0;
		vm.selectCodeItem = {};
		vm.codeItemModify = false;
		vm.isAddCodeItem = false;
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
						"type": 1,
						"nameKey": "configCode"
					}, {
						"title": "中文描述",
						"type": 1,
						"nameKey": "zhName"
					}, {
						"title": "英文描述",
						"type": 1,
						"nameKey": "enName"
					}, {
						"title": "是否停用",
						"type": 2,
						"nameKey": "stopped"
					}, {
						"title": "排序",
						"type": 1,
						"nameKey": "seq"
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
		vm.selectCodeContentItem = {};
		vm.selectCodeContentIdArr = [];
		vm.codeContentSelectIndex = 0;
		vm.ctrlIndex = 0;
		vm.selectContentDetialItem = {};

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
				for(var i in res.list) {
					res.list[i].selected = false;
				}

				vm.codeContentList = res.list;
				res.list[0].selected = true;
				vm.selectCodeContentItem = res.list[0];
				vm.selectCodeContentIdArr.push(res.list[0].id);

				vm.codeContentDatailPath = res.path;
				getSelectContentItemDetial();
			}

		}, function(e) {
			console.log('error:' + JSON.stringify(e));
		});
	}

	function getSelectContentItemDetial() {
		vm.selectContentDetialItem = {};

		vm.lastSelectContentDetialItem = {};

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

			res.detail.createDate = dateformat.format(new Date(res.detail.createDate), 'yyyy-MM-dd hh:mm');
			res.detail.updateDate = dateformat.format(new Date(res.detail.updateDate), 'yyyy-MM-dd hh:mm');

			var startTimeExist = false;
			var endTimeExist = false;
			for(var i in res.detail) {
				if(i == "startTime") {
					startTimeExist = true;
				}
				if(i == "endTime") {
					endTimeExist = true;
				}
			}

			if(startTimeExist) {
				console.log("#startTime" + vm.codeItemSelectIndex)
				if(whui.isNotEmpty(res.detail.startTime)) {
					res.detail.startTime = dateformat.format(new Date(res.detail.startTime), 'yyyy-MM-dd');
				} else {
					res.detail.startTime = dateformat.format(new Date(), 'yyyy-MM-dd');
				}

				layui.laydate.render({
					elem: '#startTime' + vm.codeItemSelectIndex,
					format: 'yyyy-MM-dd',
					min: dateformat.format(new Date(), 'yyyy-MM-dd'),
					isInitValue: true,
					showBottom: false,
					done: function(value, date, endDate) {
						console.log(value);
						console.log(JSON.stringify(date));
						var startDate = new Date(value);
						var startTime = startDate.getTime();
						var endDate = new Date(vm.selectContentDetialItem.endTime);
						var endTime = endDate.getTime();

						if(startTime > endTime) {
							layui.layer.msg("开始时间不能大于结束时间")
						}

						vm.selectContentDetialItem.startTime = value;
					}
				});
			}

			if(endTimeExist) {
				console.log("#endTime" + vm.codeItemSelectIndex);
				if(whui.isNotEmpty(res.detail.endTime)) {
					res.detail.endTime = dateformat.format(new Date(res.detail.endTime), 'yyyy-MM-dd');
				} else {
					res.detail.endTime = dateformat.format(new Date(), 'yyyy-MM-dd');
				}

				layui.laydate.render({
					elem: '#endTime' + vm.codeItemSelectIndex,
					format: 'yyyy-MM-dd',
					min: dateformat.format(new Date(), 'yyyy-MM-dd'),
					isInitValue: true,
					showBottom: false,
					done: function(value, date, endDate) {
						console.log(value);
						console.log(JSON.stringify(date));
						var endDate = new Date(value);
						var endTime = endDate.getTime();
						var startDate = new Date(vm.selectContentDetialItem.startTime);
						var startTime = endDate.getTime();

						if(startTime > endTime) {
							layui.layer.msg("结束时间不能小于开始时间");
						}

						vm.selectContentDetialItem.endTime = value;

					}
				});
			}

			vm.selectContentDetialItem = res.detail;
			vm.selectContentDetialItemPath = res.path;

			vm.lastSelectContentDetialItem = res.detail;

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

		params = jQuery.extend(vm.selectContentDetialItem, params);

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

		params = jQuery.extend(vm.selectContentDetialItem, params);

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
			"ids": vm.selectCodeContentIdArr.join(",")
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

	function removeByValue(arr, val) {
		for(var i = 0; i < arr.length; i++) {
			if(arr[i] == val) {
				arr.splice(i, 1);
				break;
			}
		}
	}

});