layui.use(['admin', 'table', 'form', 'layer','zTree'], function() {
    var table = layui.table;
    var form = layui.form;
    var layer = layui.layer;
    var whconfig = layui.whconfig;
    var whui = layui.whui;
    var zTree = layui.zTree;
    var orgzTree = layui.zTree;
    var rolezTree = layui.zTree;

    var cols;
    jQuery.getJSON("../../user/user-index/user-index.json", function(data) {
        cols = data.cols;
        query(table);
    });

    /**
     * 查询
     */
    jQuery('#user-index .whui-btn-query').click(function() {
        form.on('submit(user-query-btn)', function(data) {
            query(table, data.field);
            return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
        });
        jQuery('button[lay-filter="user-query-btn"]').click();
    });

    /**
     * 重置
     */
    jQuery('#user-index .whui-btn-reset').click(function() {
        form.val('user-edit-form', {
            'userName': '',
            'phone':''
        });
    });

    /**
     * 新增
     */
    jQuery('#user-index .whui-btn-add').click(function() {
        jQuery.get('../../user/user-add/user-add.html', function(html) {
            layer.open({
                content: html,
                id: 'user_add',
                title: '新增',
                type: 1,
                area: ['500px', '300px'],
                btn: ['确认', '取消'],
                yes: function(index, layero) {

                    form.on('submit(user-add-submit)', function(data) {
                        //TODO
                        layer.close(index);
                        whui.request(layui.whconfig.sysurl.user.add, data.field, function(data,desc){
                            whui.msg.warn(desc);
                            query(table);
                        });

                        // console.log(data.elem) //被执行事件的元素DOM对象，一般为button对象
                        // console.log(data.form) //被执行提交的form对象，一般在存在form标签时才会返回
                        // console.log(data.field) //当前容器的全部表单字段，名值对形式：{name: value}
                        return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
                    });
                    jQuery('button[lay-filter="user-add-submit"]').click();
                }
            });
        });

    });

    /**
     * 修改
     */
    jQuery('#user-index .whui-btn-update').click(function() {
        var checkStatus = table.checkStatus('user-table');
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
        jQuery.get('../../user/user-edit/user-edit.html', function(html) {
            layer.open({
                content: html,
                id: 'user_edit',
                title: '修改',
                type: 1,
                area: ['500px', '300px'],
                btn: ['确认', '取消'],
                success: function(layero, index){
                    form.val('user-edit-form', {
                        'id': editdata[0].id,
                        'account': editdata[0].account,
                        'name': editdata[0].name,
                        'mail': editdata[0].mail,
                        'phone': editdata[0].phone
                    });
                },
                yes: function(index, layero) {

                    form.on('submit(user-edit-submit)', function(data) {
                        //TODO
                        layer.close(index);
                        whui.request(layui.whconfig.sysurl.user.edit, data.field, function(data,desc){
                            whui.msg.warn(desc);
                            query(table);
                        });
                        return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
                    });
                    jQuery('button[lay-filter="user-edit-submit"]').click();
                }
            });
        });
    });

    jQuery('#user-index .whui-btn-delete').click(function() {
        var checkStatus = table.checkStatus('user-table');
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
                whui.request(layui.whconfig.sysurl.user.delete, params,
                    function(data,desc){
                        whui.msg.warn(desc);
                        query(table);
                    });
                return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
            }
        });
    });


    /**
     * 分配组织
     */
    jQuery('#user-index .whui-btn-setOrg').click(function() {
        var checkStatus = table.checkStatus('user-table');
        var editdata = checkStatus.data;
        var eidtlen = editdata.length;

        if(eidtlen>1 || eidtlen == 0){
            whui.msg.warn("请选择一条记录进行编辑！");
            return false;
        }
        var param = {userId : editdata[0].id}
        jQuery.get('../../user/user-setOrg/user-setOrg.html', function(html) {
            layer.open({
                content: html,
                id: 'user-setOrg',
                title: '组织分配',
                type: 1,
                area: ['500px', '460px'],
                btn: ['确认', '取消'],
                success: function(layero, index){
                    jQuery('#name').val(editdata[0].name);
                    //初始化
                    initOrgTree(param);
                },
                yes: function(index, layero) {

                    var id = editdata[0].id ;
                    var ids = getCheckedOrgTreeNodeId();

                    var params ={
                        userId : id,
                        orgIds : ids
                    }
                    form.on('submit(user-setOrg-submit)', function(data) {
                        //TODO
                        whui.request(layui.whconfig.sysurl.user.SetOrg, params, function(data,desc){
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
                    jQuery('button[lay-filter="user-setOrg-submit"]').click();
                }
            });
        });

    });


    /**
     * 角色配置
     */
    jQuery('#user-index .whui-btn-setRole').click(function() {
        var checkStatus = table.checkStatus('user-table');
        var editdata = checkStatus.data;
        var eidtlen = editdata.length;

        if(eidtlen>1 || eidtlen == 0){
            whui.msg.warn("请选择一条记录进行编辑！");
            return false;
        }
        var param = {userId : editdata[0].id}
        jQuery.get('../../user/user-setRole/user-setRole.html', function(html) {
            layer.open({
                content: html,
                id: 'user-setRole',
                title: '角色配置',
                type: 1,
                area: ['500px', '460px'],
                btn: ['确认', '取消'],
                success: function(layero, index){
                    jQuery('#name').val(editdata[0].name);
                    //初始化
                    initRoleTree(param);
                },
                yes: function(index, layero) {

                    var id = editdata[0].id ;
                    var ids = getCheckedRoleTreeNodeId();

                    var params ={
                        userId : id,
                        roleIds : ids
                    }
                    form.on('submit(user-setRole-submit)', function(data) {
                        //TODO
                        whui.request(layui.whconfig.sysurl.user.SetRole, params, function(data,desc){
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
                    jQuery('button[lay-filter="user-setRole-submit"]').click();
                }
            });
        });

    });


    function query(table, where) {
        where = where || {};
        table.render({
            elem: '#user-table',
            id: 'user-table',
            url: layui.whconfig.sysurl.user.query,
            where: where,
            cols: cols
        });
    }

    var rolezTreeObj;
    function initRoleTree(param){
        whui.request(layui.whconfig.sysurl.user.toSetRole,param, function(data,desc){
             var roles = data;
            console.log(roles);
            // var zNodes = transData(data, 'code', 'pcode', 'children');
            // console.log(zNodes);
            rolezTreeObj =  rolezTree.init(jQuery("#user-setRole-tree"), roleSetting, roles);
        });
    }

    var orgzTreeObj;
    function initOrgTree(param){
        whui.request(layui.whconfig.sysurl.user.toSetOrg,param, function(data,desc){
            var orgs = data;
            console.log(orgs);
            // var zNodes = transData(data, 'code', 'pcode', 'children');
            // console.log(zNodes);
            orgzTreeObj =  orgzTree.init(jQuery("#user-setOrg-tree"), orgSetting, orgs);
        });
    }

    // zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
    var roleSetting = {
        check: {
            enable: true,
            chkStyle: "checkbox",
            chkboxType: {
                "Y": "ps",
                "N": "s"
            }
        }
    };

    var orgSetting = {
        check: {
            enable: true,
            chkStyle: "checkbox",
            chkboxType: {
                "Y": "ps",
                "N": "s"
            }
        }
    }

    function getCheckedRoleTreeNodeId() {
        var checkCount = rolezTreeObj.getCheckedNodes(true);
        var nodes = new Array();
        for(i = 0; i < checkCount.length; i++) {
            nodes[i] = checkCount[i].id;
        }
        return nodes.join(",") ;
    };

    function getCheckedOrgTreeNodeId(){
        var checkCount = orgzTreeObj.getCheckedNodes(true);
        var nodes = "";
        for(var i=0;i<checkCount.length;i++) {
            if (checkCount[i].isParent != true) {
                nodes += checkCount[i].id + ",";
            }
        }
        return nodes;
    }
});