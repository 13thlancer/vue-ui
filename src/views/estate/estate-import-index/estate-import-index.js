layui.use(['admin', 'table', 'form', 'layer','upload'], function() {
    var table = layui.table;
    var form = layui.form;
    var layer = layui.layer;
    var whconfig = layui.whconfig;
    var whui = layui.whui;
    var upload = layui.upload; //得到 upload 对象

	form.render();

    var cols;
    jQuery.getJSON("../../estate/estate-import-index/estate-import-index.json", function(data) {
        cols = data.cols;
        query(table);
    });
	
	
    /**
     * 查询
     */
    jQuery('#estate-import-index .whui-btn-query').click(function() {
        form.on('submit(import-query-btn)', function(data) {
            query(table, data.field);
            return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
        });
        jQuery('button[lay-filter="import-query-btn"]').click();      
    });

    /**
     * 重置
     */
    jQuery('#estate-import-index .whui-btn-reset').click(function() {
        form.val('estate-import-query-form', {
            'managementUnit': ''
        });
    });

	var loading ;
    var uploadIns = upload.render({
		elem: "#upload",
		url: layui.whconfig.bizurl.estate_import.import,
		method: 'POST',
		data : {
			//额外的参数
		},
		auto: false,
		bindAction: '#uploadFile',
		accept: 'file' ,//允许上传的文件类型
		acceptMime :'xls',//规定打开文件选择框时，筛选出的文件类型
		exts: 'xls',//允许上传的文件后缀
		choose: function(obj){
			//var files = obj.pushFile();//若不去掉此行，则会无限提交
			obj.preview(function(index,file,result){
				jQuery("#fileName").val(file.name);
			});
		},
		before: function(obj){ 
			loading = layer.load(); //上传loading
		},
		done: function(res, index, upload) {
			//上传完毕回调
			layer.close(loading);  
			whui.msg.success(res.desc);
			query(table);
		},
		error: function(){
			layer.failed(loading);
		},
		
	});

	var managementUnitCode;
	form.on('select(category)', function(data){
		managementUnitCode = data.elem[data.elem.selectedIndex].value;
	});
	
	jQuery('#estate-import-index .whui-btn-delete').click(function() {
		if(managementUnitCode == null || managementUnitCode ==''){
			whui.msg.warn('请先选择管理单位！');
			return;
		}
        var params = {
            managementUnitCode:managementUnitCode
        }
        layer.open({
            title: '删除',
            content: '是否删除该管理单位下所有的房产？',
            btn: ['删除', '取消'],
            yes: function(index, layero) {
                layer.close(index);
                whui.request(layui.whconfig.bizurl.estate_import.delete, params, function(data,desc){
                        whui.msg.success(desc);
                        query(table);
                },function(data){
                    whui.msg.failed(data.desc);
                });
                return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
            }
            });
    });
    
    function query(table, where) {
        where = where || {};
        table.render({
            elem: '#estate-import-table',
            id: 'estate-import-table',
            url: layui.whconfig.bizurl.estate_import.query,
            where: where,
            cols: cols
        });
    }

});