layui.use(['admin', 'table', 'form', 'layer'], function() {
    var table = layui.table;
    var form = layui.form;
    var layer = layui.layer;
    var whconfig = layui.whconfig;
    var whui = layui.whui;

    var cols;
    jQuery.getJSON("../../estate/estate-manage-index/estate-manage-index.json", function(data) {
        cols = data.cols;
        query(table);
    });

   
   whui.request(layui.whconfig.bizurl.estate_manage.areaList, {}, function(data,desc){
            $("#area_name").html("<option value=''>请选择一个房产类型</option>");
       		$.each(data, function(key, val) {
     			var option = $("<option>").val(val.id).text(val.text);
                $("#area_name").append(option);
            }); 
   			$("#area_name").get(0).selectedIndex=0;
   			form.render('select');
	});
	
    /**
     * 查询
     */
    jQuery('#estate-manage-index .whui-btn-query').click(function() {
        form.on('submit(manage-query-btn)', function(data) {
            query(table, data.field);
            return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
        });
        jQuery('button[lay-filter="manage-query-btn"]').click();      
    });

    /**
     * 重置
     */
    jQuery('#estate-manage-index .whui-btn-reset').click(function() {
        form.val('estate-manage-query-form', {
            'managementUnit': '',
            'district': '',
            'street':'',
            'area_name': '',
            'estateName':'',
            'estateNo': '',
            'estate_status':'',
            'estate_type': ''
        });
    });

    /**
     * 新增
     */
    jQuery('#estate-manage-index .whui-btn-add').click(function() {
        jQuery.get('../../estate/estate-manage-add/estate-manage-add.html', function(html) {
        	form.render('select');
            layer.open({
                content: html,
                id: 'manage-add',
                title: '新增',
                type: 1,
                area: ['900px', '550px'],
                btn: ['确认', '取消'],
                yes: function(index, layero) {

                    form.on('submit(manage-add-submit)', function(data) {
                        //TODO
                        whui.request(layui.whconfig.bizurl.estate_manage.add, data.field, function(data,desc){
                            layer.close(index);
                            whui.msg.success(desc);
                            query(table);
                        },function(data){
                        	whui.msg.warn(data.desc);
		                });
						
                        // console.log(data.elem) //被执行事件的元素DOM对象，一般为button对象
                        // console.log(data.form) //被执行提交的form对象，一般在存在form标签时才会返回
                        // console.log(data.field) //当前容器的全部表单字段，名值对形式：{name: value}
                        return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
                    });
                    jQuery('button[lay-filter="manage-add-submit"]').click();
                }
            });
        });

    });

    /**
     * 修改
     */
    jQuery('#estate-manage-index .whui-btn-update').click(function() {
        var checkStatus = table.checkStatus('estate-manage-table');
        //TODO
        // console.log(checkStatus.data) //获取选中行的数据
        // console.log(checkStatus.data.length) //获取选中行数量，可作为是否有选中行的条件
        // console.log(checkStatus.isAll) //表格是否全选

        var editdata = checkStatus.data;
        var eidtlen = editdata.length;

        if(eidtlen>1 || eidtlen == 0){
            whui.msg.warn("请选择一条记录进行编辑！");
            return false;
        }
        console.log(editdata[0].id)
        jQuery.get('../../estate/estate-manage-edit/estate-manage-edit.html', function(html) {
            layer.open({
                content: html,
                id: 'manage-edit',
                title: '修改',
                type: 1,
                area: ['900px', '550px'],
                btn: ['确认', '取消'],
                success: function(layero, index){
                	var params = {
                		id: editdata[0].id
                	}
                	whui.request(layui.whconfig.bizurl.estate_manage.toEdit, params, function(data,desc){
                        debugger; console.log(data);
                        form.val('manage-edit-form', {
                        'id': editdata[0].id,
                        'managementUnit': data.managementUnit,
                        'estateNo': data.estateNo,
                        'estateName': data.estateName,
                        'province_city_district': data.pcdCode,
                        'street': data.street,
                        'areaName': data.communityId,
                        'building': data.building,
                        'cellName': data.cellName,
                        'roomName': data.roomName,
                        'estateStatus': data.estateStatusCode,
                        'estateType': data.estateTypeCode,
                        'estateStructure': data.estateStructureCode,
                        'completionTime': data.completionTime,
                        'propertyRightNo': data.propertyRightNo,
                        'landUseNo': data.landUseNo,
                        'estateRightNo': data.estateRightNo,
                        'ownerName': data.ownerName,
                        'calArea': data.calArea,
                        'floorNum': data.floorNum,
                        'totalFloorNum': data.totalFloorNum,
                        'registeredUnit': data.registeredUnit,
                        'registeredArea': data.registeredArea,
                        'notRegisteredArea': data.notRegisteredArea,
                        'remark1': data.remark1
                         });
              	  });
                },
                yes: function(index, layero) {

                    form.on('submit(manage-edit-submit)', function(data) {
                        //TODO
                        whui.request(layui.whconfig.bizurl.estate_manage.edit, data.field, function(data,desc){
                            whui.msg.success(desc);
                            query(table);
                            layer.close(index);
                        },function(data){
                        	whui.msg.warn(data.desc);
		                });
                        return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
                    });
                    jQuery('button[lay-filter="manage-edit-submit"]').click();
                }
            });
        });
    });

    jQuery('#estate-manage-index .whui-btn-delete').click(function() {
        var checkStatus = table.checkStatus('estate-manage-table');
        var ids = '';
        layui.each(checkStatus.data,function(index, item){
           ids += item.id +',';
        });
		
        var params = {
            ids:ids
        }
        layer.open({
            title: '删除',
            content: '是否删除所选信息？',
            btn: ['删除', '取消'],
            yes: function(index, layero) {
                layer.close(index);
                whui.request(layui.whconfig.bizurl.estate_manage.delete, params, function(data,desc){
                        whui.msg.success(desc);
                        query(table);
                },function(data){
                    whui.msg.warn(data.desc);
                });
                return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
            }
            });
    });

    function query(table, where) {
        where = where || {};
        table.render({
            elem: '#estate-manage-table',
            id: 'estate-manage-table',
            url: layui.whconfig.bizurl.estate_manage.query,
            where: where,
            cols: cols
        });
    }

});