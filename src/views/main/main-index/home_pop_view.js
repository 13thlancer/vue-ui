var vm = new Vue({
	el: "#wh-pop-view",
	data: {
		
	},
	methods: {
		settingClick:function(){
			console.log("settingClick");
			layui.layer.close(layer.index);
		},
		pwdClick:function(){
			console.log("pwdClick");
			layui.layer.close(layer.index);
		},
		aboutClick:function(){
			console.log("aboutClick");
			layui.layer.close(layer.index);
		},
	}
})