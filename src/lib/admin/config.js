layui.define(["laytpl","layer","element","util"],function(e){var a=layui.whconfig;e("setter",{container:"LAY_app",base:layui.cache.base,views:a.page.src,entry:"index",engine:a.page.engine,pageTabs:a.pageTabs,name:a.name,tableName:a.tableName,MOD_NAME:"admin",debug:a.debug,interceptor:a.interceptor,request:{tokenName:a.req.tokenName},response:{statusName:a.resp.codeName,statusCode:{ok:a.resp.code.success,logout:a.resp.code.logout},msgName:a.resp.descName,dataName:a.resp.dataName},indPage:a.indPage,extend:["echarts","echartsTheme"],theme:{color:[{main:"#20222A",selected:"#009688",alias:"default"},{main:"#03152A",selected:"#3B91FF",alias:"dark-blue"},{main:"#2E241B",selected:"#A48566",alias:"coffee"},{main:"#50314F",selected:"#7A4D7B",alias:"purple-red"},{main:"#344058",logo:"#1E9FFF",selected:"#1E9FFF",alias:"ocean"},{main:"#3A3D49",logo:"#2F9688",selected:"#5FB878",alias:"green"},{main:"#20222A",logo:"#F78400",selected:"#F78400",alias:"red"},{main:"#28333E",logo:"#AA3130",selected:"#AA3130",alias:"fashion-red"},{main:"#24262F",logo:"#3A3D49",selected:"#009688",alias:"classic-black"},{logo:"#226A62",header:"#2F9688",alias:"green-header"},{main:"#344058",logo:"#0085E8",selected:"#1E9FFF",header:"#1E9FFF",alias:"ocean-header"},{header:"#393D49",alias:"classic-black-header"}],initColorIndex:0}})});