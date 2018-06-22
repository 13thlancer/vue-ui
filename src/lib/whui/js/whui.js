/**
 * @author tupengfei
 * @version 1.0.0 2018.5.15
 */
layui.extend({
	'whconfig': '../whconfig',
	'dateformat': '../../../plugins/modules/dateformat/dateformat.min',
	'zTree': '../../../plugins/modules/ztree/js/jquery.ztree.all.min',
	'whcomm': '../../comm/js/comm'
}).define('whconfig', function(exports) {
	'use strict';
	var whui = {};
	var whconfig = layui.whconfig;
	jQuery.extend(whui, {
		/**
		 * 判断字符串为空。
		 * 空字符串，null，undefined，'null'，'undefined'均判空
		 * @param {String} str 字符串
		 * @returns boolean true：为空，false：不为空
		 */
		isEmpty: function(str) {
			return str === '' || str === null || str === undefined || str === 'null' || str === 'undefined';
		},
		/**
		 * 判断字符串非空
		 * @param {String} str 字符串
		 * @returns boolean true：不为空，false：为空
		 */
		isNotEmpty: function(str) {
			return !whui.isEmpty(str);
		},
		/**
		 * 判断对象、数组为空
		 * @param {Object|Array} obj 数组或对象
		 * @returns boolean true：为空，false：不为空
		 */
		isEmptyObject: function(obj) {
			for(var a in obj) {
				return false;
			}
			return true;
		}
	}, {
		/***
		 * 数据存储
		 */
		/**
		 * 设置持久化参数
		 * @param {String} key 键
		 * @param {Object} value 值
		 */
		setLocalData: function(key, value) {
			layui.data(whconfig.tableName, {
				key: key,
				value: value
			});
		},
		/**
		 * 取出持久化参数
		 * @param {String} key 键
		 */
		getLocalData: function(key) {
			var table = layui.data(whconfig.tableName);
			return table[key];
		},
		/**
		 * 删除持久化参数
		 * @param {String} key 键
		 */
		removeLocalData: function(key) {
			layui.data(whconfig.tableName, {
				key: key,
				remove: true
			});
		},
		/**
		 * 设置临时参数
		 * @param {String} key 键
		 * @param {Object} value 值
		 */
		setSessionData: function(key, value) {
			layui.sessionData(whconfig.tableName, {
				key: key,
				value: value
			});
		},
		/**
		 * 取出临时参数
		 * @param {String} key 键
		 */
		getSessionData: function(key) {
			var table = layui.sessionData(whconfig.tableName);
			return table[key];
		}

	}, {
		/**
		 * AJAX请求
		 * @param {String} reqUrl 请求地址
		 * @param {Object} reqParams 请求参数
		 * @param {Function} doSuccess 成功回调
		 * @param {Function} doFail 失败回调
		 * @param {Object} options 配置参数
		 * @param {Object} options.headers 请求头
		 * @param {String} options.type 请求方式，默认POST
		 * @param {String} options.contentType 请求参数数据格式，默认application/x-www-form-urlencoded
		 * @param {String} options.dataType 响应数据格式，默认json
		 * @param {Number} options.timeout 超时时间
		 * @param {Boolean} options.async 是否异步，默认true
		 * @param {Boolean} options.cache 是否缓存，默认false
		 * @param {Boolean} options.dealresp 是否自动处理成功返回码200，默认true
		 * @param {Boolean} options.noheader 是否不添加自定义请求头，默认false
		 * @param {Boolean} options.showloading 是否显示加载圈，默认true
		 * @param {String} options.title 加载圈文字，默认'loading'
		 */
		request: function(reqUrl, reqParams, doSuccess, doFail, options) {
			//配置项
			options = (typeof doFail === 'object') ? doFail : (options || {});
			var _options = {
				async: true, //是否异步模式
				cache: false, //是否缓存
				dealresp: true,
				noheader: false,
				showloading: true,
				title: ''
			};
			jQuery.extend(true, _options, whconfig.ajax, options);
			//请求参数
			var _reqParams = jQuery.extend(true, whconfig.reqParams, reqParams || {});
			if(_options.contentType === 'application/json') {
				_reqParams = JSON.stringify(_reqParams);
			}
			//请求头
			var _reqHeaders = jQuery.extend(true, whconfig.reqHeaders, _options.headers || {});
			if(whconfig.req.tokenName) {
				_reqHeaders[whconfig.req.tokenName] = whui.getLocalData(whconfig.req.tokenName) || '';
			}
			if(_options.noheader) {
				_reqHeaders = {};
			}

			var loadingIndex;
			//请求
			jQuery.ajax(jQuery.extend({
				url: reqUrl,
				headers: _reqHeaders,
				data: _reqParams,
				beforeSend: function(xhr) {
					if(_options.showloading) {
						loadingIndex = layer.load();
					}
				},
				success: function(resp, textStatus) {
					if(_options.dealresp) {
						var code = resp[whconfig.resp.codeName];
						if(code === whconfig.resp.code.success) {
							var data = resp[whconfig.resp.dataName] || {};
							if(typeof data === 'string') {
								data = JSON.parse(data);
							}
							doSuccess(data, resp[whconfig.resp.descName]);
						} else {
							//返回token失效码时登出
							if(code === whconfig.resp.code.logout) {
								layui.view.exit();
								return;
							}
							if(typeof doFail === 'function') {
								doFail(resp);
							} else {
								whui.msg.warn(resp[whconfig.resp.descName]);
							}
						}
					} else {
						doSuccess(resp);
					}
				},
				error: function(xhr, textStatus, errorThrown) {
					if(typeof doFail === 'function') {
						doFail({}, xhr, textStatus, errorThrown);
					} else {
						if(textStatus === 'timeout') {
							whui.msg.warn('请求超时');
						} else {
							whui.msg.warn('请求错误(' + xhr.status + ' ' + textStatus + ')');
						}
					}
				},
				complete: function(xhr, textStatus) {
					if(_options.showloading) {
						layer.close(loadingIndex);
					}
				}
			}, _options));
		}
	}, {
		msg: {
			/**
			 * 成功提示
			 * @param {String} msg 消息
			 * @param {Function} callback 回调
			 * @param {Number} time 自动关闭所需毫秒
			 */
			success: function(msg, callback, time) {
				layer.msg(msg, {
					'icon': 1,
					'time': time || 3000
				}, function() {
					if(typeof callback === 'function') {
						callback();
					}
				});
			},
			/**
			 * 失败提示
			 * @param {String} msg 消息
			 * @param {Function} callback 回调
			 * @param {Number} time 自动关闭所需毫秒
			 */
			failed: function(msg, callback, time) {
				layer.msg(msg, {
					'icon': 2,
					'time': time || 3000
				}, function() {
					if(typeof callback === 'function') {
						callback();
					}
				});
			},
			/**
			 * 警告提示
			 * @param {String} msg 消息
			 * @param {Function} callback 回调
			 * @param {Number} time 自动关闭所需毫秒
			 */
			warn: function(msg, callback, time) {
				layer.msg(msg, {
					'icon': 0,
					'time': time || 3000
				}, function() {
					if(typeof callback === 'function') {
						callback();
					}
				});
			}
		}
	}, {
		/**
		 * 将json对象转为form序列化数据
		 */
		json2Form: function(json) {
			var str = [];
			for(var p in json) {
				str.push(encodeURIComponent(p) + '=' + encodeURIComponent(json[p]));
			}
			return str.join('&');
		},
		/**
		 * 将form序列化数据转为json对象
		 */
		form2Json: function(form) {
			var arr = form.split('&');
			var item, key, value, newData = {};
			for(var i = 0; i < arr.length; i++) {
				item = arr[i].split('=');
				key = item[0];
				value = decodeURIComponent(item[1]);
				newData[key] = value;
			}
			return newData;
		}
	});
	exports('whui', whui);
});