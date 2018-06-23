layui.define(function(exports) {
	"use strict";
	var runtime = 'D'; //运行环境：D开发、T测试、P生产
	var baseurl = '';
	if('P' === runtime) {
		baseurl = 'http://127.0.0.1:8020/WhUITest/';
	} else if('T' === runtime) {
		baseurl = 'http://127.0.0.1:3000/whui/';
	} else if('D' === runtime) {
		// baseurl = 'http://192.168.185.174:8070/whxxhms/';
        // baseurl='http://192.168.133.32:8070/whxxhms/';
        baseurl='http://192.168.31.163:8070/whxxhms/';

    }
	var whconfig = {};
	jQuery.extend(true, whconfig, {
		debug: runtime === 'D' || false, //是否开启调试模式。如开启，接口异常时会抛出异常 URL等信息
		runtime: runtime,
		name: 'WhUI DemoCenter', //系统名
		describe: '物华前端PC框架，后台管理系统示例中心', //系统描述
		tableName: 'WhUI', //localstorage本地存储表名
		pageTabs: true, //是否开启页面选项卡功能。单页面专业版不推荐开启
		interceptor: false, //是否开启未登入拦截
		page: {
			engine: '.html', //视图文件后缀名
			src: '../../../views/', //页面目录
			main: {
				layout: 'main/layout/layout', //布局页
				index: 'main/main-index/main-index' //首页
			},
			login: {
				login: '/login/login/login', //登录页
				forget: '/login/forget/forget', //找回密码页
				reg: '/login/reg/reg' //注册页
			},
			error: {
				e404: 'main/error/404', //404页
				permission: 'main/error/permission', //无权限页
				other: 'main/error/other' //错误页
			},
			user: {
				baseinfo: 'user/user-baseinfo/user-baseinfo', //用户基本信息页
				updatepwd: 'user/user-updatepwd/user-updatepwd' //修改密码页
			}
		},
		req: {
			tokenName: 'access_token', //token字段名
			pageName: 'page', //当前第几页字段名
			limitName: 'limit' //每页笔数字段名
		},
		ajax: {
			type: 'POST', //请求类型
			contentType: 'application/x-www-form-urlencoded', //请求参数数据格式
			dataType: 'json', //响应数据格式
			timeout: 7000 //请求超时时间
		},
		resp: {
			codeName: 'code', //返回码字段名
			dataName: 'data', //返回数据字段名
			descName: 'desc', //返回描述字段名
			countName: 'count', //返回总笔数字段名
			code: {
				success: 200, //成功返回码
				logout: 4001 //token错误返回码
			}
		},
		sysurl: {
			base: baseurl,
			main: {
				menu: baseurl + 'menu',
				personal: baseurl + 'personal',
				msg: baseurl + 'main/msg'
			},
			mainIndex: {
				totalPayMessages: baseurl + 'index/totalPayMessages',
				dayList: baseurl + 'index/dayList',
				roomGraph: baseurl + 'index/roomGraph',
				datatable: baseurl + 'index/datatable'
			},
			login: {
				login: baseurl + 'login',
				logout: baseurl + 'login/logout',
				forget: baseurl + 'login/forget',
				reg: baseurl + 'login/reg'
			},
			menu: {
				query: baseurl + 'menu/list',
				add: baseurl + 'menu/add',
				edit: baseurl + 'menu/edit',
				delete: baseurl + 'menu/remove',
				getMenus: baseurl + 'menu/selectMenuTreeList',
				toMenu: baseurl + 'menu/menuTreeListByRoleId'
			},
			user: {
				query: baseurl + 'mgr/list',
				add: baseurl + 'mgr/add',
				edit: baseurl + 'mgr/edit',
				delete: baseurl + 'mgr/delete',
				toSetRole: baseurl + 'role/roleTreeListByUserId',
				toSetOrg: baseurl + 'org/orgTreeListByUserId',
				SetRole: baseurl + 'mgr/setRole',
				SetOrg: baseurl + 'mgr/setOrg'
			},
			role: {
				query: baseurl + 'role/list',
				add: baseurl + 'role/add',
				edit: baseurl + 'role/edit',
				delete: baseurl + 'role/remove',
				toEdit: baseurl + 'role/toEdit',
				setAuthority: baseurl + 'role/setAuthority'
			},
			org: {
				query: baseurl + 'org/list',
				add: baseurl + 'org/add',
				edit: baseurl + 'org/edit',
				delete: baseurl + 'org/delete',
				getMenus: baseurl + 'org/selectOrgTreeList'
			},
			'': ''
		},
		reqHeaders: {
			api_version: 'v1'
		},
		reqParams: {},
		//独立页面路由，可随意添加（无需写参数）
		indPage: [
			'/login/login/login', //登入页
			'/login/reg/reg', //注册页
			'/login/forget/forget' //找回密码
		],
		'': ''
	}, {
		//TODO 业务配置，由主程序员负责修改
		reqHeaders: {},
		reqParams: {},
		bizurl: {
			demo: {
				query: baseurl + 'demo/query'
			},
			mainIndex: {
				totalPayMessages: baseurl +'index/totalPayMessages',
				dayList: baseurl +'index/dayList',
				roomGraph: baseurl +'index/roomGraph',
				inStatusGraph: baseurl +'index/inStatusGraph',
				datatable: baseurl +'index/datatable'
			},
			systemSettings:{
				listFirstSystem: baseurl +'pubCode/listFirstSystem',
				listFirstConfig: baseurl +'pubCode/listFirstConfig',
				updateFirstSystem: baseurl +'pubCode/updateFirstSystem',
				codeListHeadUrl: baseurl +'pubCode/',
				insertRooms: baseurl +'pubCode/insertRooms'
			},
            reservation:{
				getPreorderList: baseurl +'reservation/orderList',
                getRoomType: baseurl +'reservation/roomtypeList',
                getRoomPriceType: baseurl +'reservation/configCode',
                getRoomPriceCode: baseurl +'reservation/ratecodeList',
                getRoomBaojia: baseurl + 'reservation/configCode',
                getGroupList: baseurl + 'reservation/groupList',
                getSaler: baseurl + 'reservation/salesManList',
				getSalaryCode:baseurl+'reservation/commissionCodeList',
				getChannel: baseurl + 'reservation/configCode',
				getPayType: baseurl + 'reservation/paycodeList',
                getYsqPayType: baseurl + 'reservation/prelicencePaycodeList',
                getBenefitReason: baseurl + 'reservation/configCode',
                getTransferList: baseurl + 'reservation/transferList',
                getPrelicenceLogs: baseurl + 'reservation/prelicenceLogs',
                getBatchOrderList:baseurl+'reservation/batchOrderList',
                sendMessage:baseurl+'reservation/insertMessages',
                saveAll:baseurl + 'reservation/update',
				getzkInfoList:baseurl + 'reservation/rsvManList',
                savezkInfo:baseurl + 'reservation/updateRsvman',
				cancelAll:baseurl + 'reservation/cancelAll',
                cancelItem:baseurl + 'reservation/cancelItem',
                addPrepay:baseurl + 'reservation/addPrepay',
                addPrelicence:baseurl + 'reservation/addPrelicence',
				toIn:baseurl + 'reservation/toIn',
                prelicenceTansfer:baseurl + 'reservation/prelicenceTansfer',
                getPreorderData:baseurl + 'reservation/detailByPriMainId',
            },
			"": ""
		}
	});
	exports('whconfig', whconfig);
});