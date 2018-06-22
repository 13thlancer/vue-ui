layui.use(['admin', 'whui', 'element', 'laydate', 'dateformat'], function() {
    var whui = layui.whui;
    var whconfig = layui.whconfig;
    var dateformat = layui.dateformat;

    var vm = new Vue({
    el: "#wh-book-content",
    data: {
        selected:'false',
        isdivided: true,
        isactive0: true,
        isactive1: '',
        isactive2: '',
        isactive3: '',
        adReceivedTab1:true,
        adReceivedTab2:false,
        initCount:'1',
        tempVue: new Vue({}),
        list2: [{
            "status":"R",
            "name": "李晓明",
            "roomType": "swsc",
            "roomNo": "001",
            "roomPrice": "284",
            "roomBookArrange": "1/0",
            "arriveDate": "2018-06-04",
            "leaveDate": "2018-06-04",
            "keepDay":"1",
            "balance": "1000",
            "credit": "1000",
            "remark":"房间预订下午"
        },{
            "status":"R",
            "name": "李晓明",
            "roomType": "swsc",
            "roomNo": "001",
            "roomPrice": "284",
            "roomBookArrange": "1/0",
            "arriveDate": "2018-06-04",
            "leaveDate": "2018-06-04",
            "keepDay":"1",
            "balance": "1000",
            "credit": "1000",
            "remark":"房间预订下午"
        }, {
            "status":"R",
            "name": "李晓明",
            "roomType": "swsc",
            "roomNo": "001",
            "roomPrice": "284",
            "roomBookArrange": "1/0",
            "arriveDate": "2018-06-04",
            "leaveDate": "2018-06-04",
            "keepDay":"1",
            "balance": "1000",
            "credit": "1000",
            "remark":"房间预订下午"
        }, {
            "status":"R",
            "name": "李晓明",
            "roomType": "swsc",
            "roomNo": "001",
            "roomPrice": "284",
            "roomBookArrange": "1/0",
            "arriveDate": "2018-06-04",
            "leaveDate": "2018-06-04",
            "keepDay":"1",
            "balance": "1000",
            "credit": "1000",
            "remark":"房间预订下午"
        }, {
            "status":"R",
            "name": "李晓明",
            "roomType": "swsc",
            "roomNo": "001",
            "roomPrice": "284",
            "roomBookArrange": "1/0",
            "arriveDate": "2018-06-04",
            "leaveDate": "2018-06-04",
            "keepDay":"1",
            "balance": "1000",
            "credit": "1000",
            "remark":"房间预订下午"
        }, {
            "status":"R",
            "name": "李晓明",
            "roomType": "swsc",
            "roomNo": "001",
            "roomPrice": "284",
            "roomBookArrange": "1/0",
            "arriveDate": "2018-06-04",
            "leaveDate": "2018-06-04",
            "keepDay":"1",
            "balance": "1000",
            "credit": "1000",
            "remark":"房间预订下午"
        }, {
            "status":"R",
            "name": "李晓明",
            "roomType": "swsc",
            "roomNo": "001",
            "roomPrice": "284",
            "roomBookArrange": "1/0",
            "arriveDate": "2018-06-04",
            "leaveDate": "2018-06-04",
            "keepDay":"1",
            "balance": "1000",
            "credit": "1000",
            "remark":"房间预订下午"
        }, {
            "status":"R",
            "name": "李晓明",
            "roomType": "swsc",
            "roomNo": "001",
            "roomPrice": "284",
            "roomBookArrange": "1/0",
            "arriveDate": "2018-06-04",
            "leaveDate": "2018-06-04",
            "keepDay":"1",
            "balance": "1000",
            "credit": "1000",
            "remark":"房间预订下午"
        }],
        bookInfo: {
            "cusType": "散客",
            "arriveDate": "2018-06-04  18:00",
            "leaveDate": "2018-06-04  18:00",
            "days": "1天",
            "roomTypeCount": "SWSC",
            "roomPriceType": "SWSC",
            "roomPriceCode": "门市类",
            "roomPrice": "200.00",
            "baojia": "200.00",
            "baojia": "200.00"
        },
        customInfo: {
            "booker": "小明",
            "occupant": "小明",
            "phone": "15377889943",
            "arriveTime": "14:00",
            "latestTime": "16:00"
        },
        marketManager:{
            "saler": "黄磊",
            "salaryCode": "携程",
            "channel": "旅行社",
            "payType": "人民币现金"
        },
        adReceived:{
            "ysk": "1笔/200.00",
            "ysq": "2笔/300.00",
            "dqye": "500.00",
            "curcredit": "300.00",
            "curtotal": "1000.00",
            "ldye": "-200.00",
            "ldcredit": "-200.00",
            "ldtotal": "-500.00"
        },
        showDatePicker: false
    },
    methods: {
        saveAll:function(){
            layer.closeAll();
            this.isdivided = true;
            this.isactive1 = '';
            this.isactive2 = '';
            this.isactive3 = '';
        },
        selectYsk:function(){
            layer.closeAll();
            this.adReceivedTab1 = true;
            this.adReceivedTab2 = false;
        },
        selectYsq:function(){
            layer.closeAll();
            this.adReceivedTab1 = false;
            this.adReceivedTab2 = true;
        },
        changeStatus:function(index){
            // this.index = index;
            layer.closeAll();

            this.isdivided = false;
            if(index == 0){
                if(this.isactive1 === true || this.isactive1 === ''){
                    this.isactive1 = false;
                }
                if(this.isactive2 === true || this.isactive2 === ''){
                    this.isactive2 = false;
                }
                if(this.isactive3 === true || this.isactive3 === ''){
                    this.isactive3 = false;
                }
            }

            if(index == 1){
                if(this.isactive1 === true){
                    if(this.isactive2 === true || this.isactive3 === true){
                        this.isactive2 = false;
                        this.isactive3 = false;
                    }else{
                        this.isactive1 = false;
                    }
                }else{
                    this.isactive1 = true;
                    this.isactive2 = false;
                    this.isactive3 = false;
                }
            }

            if(index == 2){
                if(this.isactive2 === true){
                    if(this.isactive3 === true){
                        this.isactive3 = false;
                    }else{
                        this.isactive2 = false;
                    }
                }else{
                    if(this.isactive1 == false){
                        this.isactive1 = true;
                    }
                    this.isactive2 = true;
                    this.isactive3 = false;
                }
            }

            if(index == 3){
                if(this.isactive3 === true){
                    this.isactive1 = false;
                    this.isactive2 = false;
                    this.isactive3 = false;
                }else{
                    this.isactive1 = true;
                    this.isactive2 = true;
                    this.isactive3 = true;
                }
            }
        },
        mouseenter:function(index){
            this.selected = index;
        },
        datePickClick: function() {
            layui.laydate.show;
        },
        showPiliang:function(){
            jQuery.get('../../org/org-subwindow/reservation-subwindow-piliang.html', function(html) {
                layer.open({
                    content: html,
                    id: 'piliang',
                    type: 1,
                    title: '批量处理',
                    closeBtn:1,
                    scrollbar: false,
                    area: ['838px', '878px'],
                    success:function(){
                        this.offset=["100px","100px"];
                        new Vue({
                            el: "#piliang",
                            data: {
                                dataList: [{
                                    "roomType":"SWSC",
                                    "roomNo":"2001",
                                    "name":"张明",
                                    "arriveDate":"2018-06-07",
                                    "leaveDate":"2018-06-07"
                                },
                                    {
                                        "roomType":"SWSC",
                                        "roomNo":"2001",
                                        "name":"张明",
                                        "arriveDate":"2018-06-07",
                                        "leaveDate":"2018-06-07"
                                    },
                                    {
                                        "roomType":"SWSC",
                                        "roomNo":"2001",
                                        "name":"张明",
                                        "arriveDate":"2018-06-07",
                                        "leaveDate":"2018-06-07"
                                    },
                                    {
                                        "roomType":"SWSC",
                                        "roomNo":"2001",
                                        "name":"张明",
                                        "arriveDate":"2018-06-07",
                                        "leaveDate":"2018-06-07"
                                    },
                                    {
                                        "roomType":"SWSC",
                                        "roomNo":"2001",
                                        "name":"张明",
                                        "arriveDate":"2018-06-07",
                                        "leaveDate":"2018-06-07"
                                    },
                                    {
                                        "roomType":"SWSC",
                                        "roomNo":"2001",
                                        "name":"张明",
                                        "arriveDate":"2018-06-07",
                                        "leaveDate":"2018-06-07"
                                    },
                                    {
                                        "roomType":"SWSC",
                                        "roomNo":"2001",
                                        "name":"张明",
                                        "arriveDate":"2018-06-07",
                                        "leaveDate":"2018-06-07"
                                    }
                                ],
                            },
                            methods:{
                                showPLSelect:function(){
                                    plselect();
                                }
                            }
                        })
                    }
                });
            });
        },
        showRoomType:function(){
            layer.closeAll();
            jQuery.get('../../org/org-subwindow/reservation-subwindow-roomType.html', function(html) {
                layer.open({
                    content: html,
                    id: 'showRoomType',
                    title: false,
                    shade: false,
                    type: 1,
                    offset: ['515px','467px'],
                    area: ['541px', '534px'],
                    success:function(){
                        new Vue({
                            el: "#showRoomType",
                            data: {
                                dataList: [{
                                        "code":"SWSC",
                                        "roomType":"商务双床房",
                                        "VC":"26",
                                        "VD":"0",
                                        "onSale":"22",
                                        "menshi":"0",
                                        "mvp":"0"
                                    },
                                    {
                                        "code":"SWSC",
                                        "roomType":"商务双床房",
                                        "VC":"26",
                                        "VD":"0",
                                        "onSale":"22",
                                        "menshi":"0",
                                        "mvp":"0"
                                    },
                                    {
                                        "code":"SWSC",
                                        "roomType":"商务双床房",
                                        "VC":"26",
                                        "VD":"0",
                                        "onSale":"22",
                                        "menshi":"0",
                                        "mvp":"0"
                                    },
                                    {
                                        "code":"SWSC",
                                        "roomType":"商务双床房",
                                        "VC":"26",
                                        "VD":"0",
                                        "onSale":"22",
                                        "menshi":"0",
                                        "mvp":"0"
                                    },
                                    {
                                        "code":"SWSC",
                                        "roomType":"商务双床房",
                                        "VC":"26",
                                        "VD":"0",
                                        "onSale":"22",
                                        "menshi":"0",
                                        "mvp":"0"
                                    },
                                    {
                                        "code":"SWSC",
                                        "roomType":"商务双床房",
                                        "VC":"26",
                                        "VD":"0",
                                        "onSale":"22",
                                        "menshi":"0",
                                        "mvp":"0"
                                    },
                                    {
                                        "code":"SWSC",
                                        "roomType":"商务双床房",
                                        "VC":"26",
                                        "VD":"0",
                                        "onSale":"22",
                                        "menshi":"0",
                                        "mvp":"0"
                                    }
                                ],
                            }
                        })
                    }
                });
            });
        },
        showRoomPriceType:function(){
            layer.closeAll();
            jQuery.get('../../org/org-subwindow/reservation-subwindow-regular.html', function(html) {
                layer.open({
                    content: html,
                    id: 'RoomPriceType',
                    shade: false,
                    title: false,
                    type: 1,
                    offset: ['298px','1128px'],
                    area: ['541px', '534px'],
                    success:function(){
                    new Vue({
                        el: "#RoomPriceType",
                        data: {
                            dataList: [{
                                "code":"R",
                                "desc":"门市类"
                            },
                                {
                                    "code":"R",
                                    "desc":"门市类"
                                },
                                {
                                    "code":"R",
                                    "desc":"门市类"
                                },
                                {
                                    "code":"R",
                                    "desc":"门市类"
                                },
                                {
                                    "code":"R",
                                    "desc":"门市类"
                                },
                                {
                                    "code":"R",
                                    "desc":"门市类"
                                },
                                {
                                    "code":"R",
                                    "desc":"门市类"
                                }
                            ],
                        }
                    })
                }
                });
            });
        },
        showRoomPriceCode:function(){
            layer.closeAll();
            jQuery.get('../../org/org-subwindow/reservation-subwindow-roomPriceCode.html', function(html) {
                layer.open({
                    content: html,
                    id: 'RoomPriceCode',
                    title: false,
                    shade: false,
                    type: 1,
                    offset: ['371px','1128px'],
                    area: ['541px', '534px'],
                    success:function(){
                        new Vue({
                            el: "#RoomPriceCode",
                            data: {
                                dataList: [{
                                    "code":"RAC",
                                    "desc":"门市类",
                                    "firstPrice":"1000",
                                    "avergePrice":"1000",
                                    "totalPrice":"1000"
                                },
                                    {
                                        "code":"RAC",
                                        "desc":"门市类",
                                        "firstPrice":"1000",
                                        "avergePrice":"1000",
                                        "totalPrice":"1000"
                                    },
                                    {
                                        "code":"RAC",
                                        "desc":"门市类",
                                        "firstPrice":"1000",
                                        "avergePrice":"1000",
                                        "totalPrice":"1000"
                                    },
                                    {
                                        "code":"RAC",
                                        "desc":"门市类",
                                        "firstPrice":"1000",
                                        "avergePrice":"1000",
                                        "totalPrice":"1000"
                                    },
                                    {
                                        "code":"RAC",
                                        "desc":"门市类",
                                        "firstPrice":"1000",
                                        "avergePrice":"1000",
                                        "totalPrice":"1000"
                                    },
                                    {
                                        "code":"RAC",
                                        "desc":"门市类",
                                        "firstPrice":"1000",
                                        "avergePrice":"1000",
                                        "totalPrice":"1000"
                                    },
                                    {
                                        "code":"RAC",
                                        "desc":"门市类",
                                        "firstPrice":"1000",
                                        "avergePrice":"1000",
                                        "totalPrice":"1000"
                                    }
                                ],
                            }
                        })
                    }
                });
            });
        },
        showRoomPrice:function(){
            layer.closeAll();
            jQuery.get('../../org/org-subwindow/reservation-subwindow-roomPrice.html', function(html) {
                layer.open({
                    content: html,
                    id: 'RoomPrice',
                    title: false,
                    shade: false,
                    type: 1,
                    offset: ['443px','1128px'],
                    area: ['541px', '534px'],
                    success:function(){
                        new Vue({
                            el: "#RoomPrice",
                            data: {
                                dataList: [{
                                    "date":"2018-06-13",
                                    "desc":"门市类",
                                    "ProomPrice":"1000",
                                    "AroomPrice":"1000"
                                    },
                                    {
                                        "date":"2018-06-13",
                                        "desc":"门市类",
                                        "ProomPrice":"1000",
                                        "AroomPrice":"1000"
                                    },
                                    {
                                        "date":"2018-06-13",
                                        "desc":"门市类",
                                        "ProomPrice":"1000",
                                        "AroomPrice":"1000"
                                    },
                                    {
                                        "date":"2018-06-13",
                                        "desc":"门市类",
                                        "ProomPrice":"1000",
                                        "AroomPrice":"1000"
                                    },
                                    {
                                        "date":"2018-06-13",
                                        "desc":"门市类",
                                        "ProomPrice":"1000",
                                        "AroomPrice":"1000"
                                    },
                                    {
                                        "date":"2018-06-13",
                                        "desc":"门市类",
                                        "ProomPrice":"1000",
                                        "AroomPrice":"1000"
                                    },
                                    {
                                        "date":"2018-06-13",
                                        "desc":"门市类",
                                        "ProomPrice":"1000",
                                        "AroomPrice":"1000"
                                    }
                                ],
                            }
                        })
                    }
                });
            });
        },
        showRoomBaojia:function(){
            layer.closeAll();
            jQuery.get('../../org/org-subwindow/reservation-subwindow-regular.html', function(html) {
                layer.open({
                    content: html,
                    id: 'RoomBaojia',
                    type: 1,
                    shade: false,
                    title: false,
                    offset: ['515px','1128px'],
                    area: ['541px', '534px'],
                    success:function(){
                        new Vue({
                            el: "#RoomBaojia",
                            data: {
                                dataList: [{
                                    "code":"R",
                                    "desc":"门市类"
                                },
                                    {
                                        "code":"R",
                                        "desc":"门市类"
                                    },
                                    {
                                        "code":"R",
                                        "desc":"门市类"
                                    },
                                    {
                                        "code":"R",
                                        "desc":"门市类"
                                    },
                                    {
                                        "code":"R",
                                        "desc":"门市类"
                                    },
                                    {
                                        "code":"R",
                                        "desc":"门市类"
                                    },
                                    {
                                        "code":"R",
                                        "desc":"门市类"
                                    }
                                ],
                            }
                        })
                    }
                });
            });
        },
        showSaler:function(){
            layer.closeAll();
            jQuery.get('../../org/org-subwindow/reservation-subwindow-saler.html', function(html) {
                layer.open({
                    content: html,
                    id: 'saler',
                    type: 1,
                    shade: false,
                    title: false,
                    offset: ['254px','744px'],
                    area: ['541px', '534px'],
                    success:function(){
                        new Vue({
                            el: "#saler",
                            data: {
                                dataList: [{
                                    "code":"001",
                                    "name":"黄磊"
                                },
                                    {
                                        "code":"001",
                                        "name":"黄磊"
                                    },
                                    {
                                        "code":"001",
                                        "name":"黄磊"
                                    },
                                    {
                                        "code":"001",
                                        "name":"黄磊"
                                    },
                                    {
                                        "code":"001",
                                        "name":"黄磊"
                                    },
                                    {
                                        "code":"001",
                                        "name":"黄磊"
                                    },
                                    {
                                        "code":"001",
                                        "name":"黄磊"
                                    }
                                ],
                            }
                        })
                    }
                });
            });
        },
        showpaifang:function(){
            layer.closeAll();
            jQuery.get('../../org/org-subwindow/reservation-subwindow-paifang.html', function(html) {
                layer.open({
                    content: html,
                    id: 'paifang',
                    type: 1,
                    shade: false,
                    title: false,
                    offset: ['483px','571px'],
                    area: ['541px', '534px'],
                    success:function(){
                        new Vue({
                            el: "#paifang",
                            data: {
                                dataList: [{
                                    "roomType":"SWSC",
                                    "roomDesc":"商务大床房",
                                    "roomNo":"1001",
                                    "mark":"VC",
                                    "sign":"远离工作区"
                                },
                                    {
                                        "roomType":"SWSC",
                                        "roomDesc":"商务大床房",
                                        "roomNo":"1001",
                                        "mark":"VC",
                                        "sign":"远离工作区"
                                    },
                                    {
                                        "roomType":"SWSC",
                                        "roomDesc":"商务大床房",
                                        "roomNo":"1001",
                                        "mark":"VC",
                                        "sign":"远离工作区"
                                    },
                                    {
                                        "roomType":"SWSC",
                                        "roomDesc":"商务大床房",
                                        "roomNo":"1001",
                                        "mark":"VC",
                                        "sign":"远离工作区"
                                    },
                                    {
                                        "roomType":"SWSC",
                                        "roomDesc":"商务大床房",
                                        "roomNo":"1001",
                                        "mark":"VC",
                                        "sign":"远离工作区"
                                    },
                                    {
                                        "roomType":"SWSC",
                                        "roomDesc":"商务大床房",
                                        "roomNo":"1001",
                                        "mark":"VC",
                                        "sign":"远离工作区"
                                    },
                                    {
                                        "roomType":"SWSC",
                                        "roomDesc":"商务大床房",
                                        "roomNo":"1001",
                                        "mark":"VC",
                                        "sign":"远离工作区"
                                    }
                                ],
                            }
                        })
                    }
                });
            });
        },
        showSalaryCode:function(){
            layer.closeAll();
            jQuery.get('../../org/org-subwindow/reservation-subwindow-regular.html', function(html) {
                layer.open({
                    content: html,
                    id: 'salaryCode',
                    type: 1,
                    shade: false,
                    title: false,
                    offset: ['326px','744px'],
                    area: ['541px', '534px'],
                    success:function(){
                        new Vue({
                            el: "#salaryCode",
                            data: {
                                dataList: [{
                                    "code":"crs",
                                    "desc":"中央预订返佣"
                                },
                                    {
                                        "code":"crs",
                                        "desc":"中央预订返佣"
                                    },
                                    {
                                        "code":"crs",
                                        "desc":"中央预订返佣"
                                    },
                                    {
                                        "code":"crs",
                                        "desc":"中央预订返佣"
                                    },
                                    {
                                        "code":"crs",
                                        "desc":"中央预订返佣"
                                    },
                                    {
                                        "code":"crs",
                                        "desc":"中央预订返佣"
                                    },
                                    {
                                        "code":"crs",
                                        "desc":"中央预订返佣"
                                    }
                                ],
                            }
                        })
                    }
                });
            });
        },
        showChannel:function(){
            layer.closeAll();
            jQuery.get('../../org/org-subwindow/reservation-subwindow-regular.html', function(html) {
                layer.open({
                    content: html,
                    id: 'channel',
                    type: 1,
                    shade: false,
                    title: false,
                    offset: ['399px','744px'],
                    area: ['541px', '534px'],
                    success:function(){
                        new Vue({
                            el: "#channel",
                            data: {
                                dataList: [{
                                    "code":"xxx",
                                    "desc":"上门散客"
                                },
                                    {
                                        "code":"xxx",
                                        "desc":"上门散客"
                                    },
                                    {
                                        "code":"xxx",
                                        "desc":"上门散客"
                                    },
                                    {
                                        "code":"xxx",
                                        "desc":"上门散客"
                                    },
                                    {
                                        "code":"xxx",
                                        "desc":"上门散客"
                                    },
                                    {
                                        "code":"xxx",
                                        "desc":"上门散客"
                                    },
                                    {
                                        "code":"xxx",
                                        "desc":"上门散客"
                                    }
                                ],
                            }
                        })
                    }
                });
            });
        },
        showPayType:function(){
            layer.closeAll();
            jQuery.get('../../org/org-subwindow/reservation-subwindow-regular.html', function(html) {
                layer.open({
                    content: html,
                    id: 'payType',
                    type: 1,
                    shade: false,
                    title: false,
                    offset: ['471px','744px'],
                    area: ['541px', '534px'],
                    success:function(){
                        new Vue({
                            el: "#payType",
                            data: {
                                dataList: [{
                                    "code":"A",
                                    "desc":"现金"
                                },
                                    {
                                        "code":"A",
                                        "desc":"现金"
                                    },
                                    {
                                        "code":"A",
                                        "desc":"现金"
                                    },
                                    {
                                        "code":"A",
                                        "desc":"现金"
                                    },
                                    {
                                        "code":"A",
                                        "desc":"现金"
                                    },
                                    {
                                        "code":"A",
                                        "desc":"现金"
                                    },
                                    {
                                        "code":"A",
                                        "desc":"现金"
                                    }
                                ],
                            }
                        })
                    }
                });
            });
        },
        showYskPayType:function(){
            layer.closeAll();
            jQuery.get('../../org/org-subwindow/reservation-subwindow-regular.html', function(html) {
                layer.open({
                    content: html,
                    id: 'YskPayType',
                    type: 1,
                    shade: false,
                    title: false,
                    offset: ['370px','800px'],
                    area: ['541px', '534px'],
                    success:function(){
                        new Vue({
                            el: "#YskPayType",
                            data: {
                                dataList: [{
                                    "code":"A",
                                    "desc":"现金"
                                },
                                    {
                                        "code":"A",
                                        "desc":"现金"
                                    },
                                    {
                                        "code":"A",
                                        "desc":"现金"
                                    },
                                    {
                                        "code":"A",
                                        "desc":"现金"
                                    },
                                    {
                                        "code":"A",
                                        "desc":"现金"
                                    },
                                    {
                                        "code":"A",
                                        "desc":"现金"
                                    },
                                    {
                                        "code":"A",
                                        "desc":"现金"
                                    }
                                ],
                            }
                        })
                    }
                });
            });
        },
        showYsqPayType:function(){
            layer.closeAll();
            jQuery.get('../../org/org-subwindow/reservation-subwindow-regular.html', function(html) {
                layer.open({
                    content: html,
                    id: 'YsqPayType',
                    type: 1,
                    shade: false,
                    title: false,
                    offset: ['370px','800px'],
                    area: ['541px', '534px'],
                    success:function(){
                        new Vue({
                            el: "#YsqPayType",
                            data: {
                                dataList: [{
                                    "code":"9100",
                                    "desc":"国内卡"
                                },
                                    {
                                        "code":"9100",
                                        "desc":"国内卡"
                                    },
                                    {
                                        "code":"9100",
                                        "desc":"国内卡"
                                    },
                                    {
                                        "code":"9100",
                                        "desc":"国内卡"
                                    },
                                    {
                                        "code":"9100",
                                        "desc":"国内卡"
                                    },
                                    {
                                        "code":"9100",
                                        "desc":"国内卡"
                                    },
                                    {
                                        "code":"9100",
                                        "desc":"国内卡"
                                    }
                                ],
                            }
                        })
                    }
                });
            });
        },
        showJilu:function(){
            jQuery.get('../../org/org-subwindow/reservation-subwindow-jilu.html', function(html) {
                layer.open({
                    content: html,
                    id: 'jilu',
                    type: 1,
                    title: '记录',
                    closeBtn:1,
                    scrollbar: false,
                    area: ['968px', '878px'],
                    success:function(){
                        new Vue({
                            el: "#jilu",
                            data: {
                                dataList: [{
                                    "status":"预支",
                                    "project":"国内卡",
                                    "count":"200",
                                    "cardNo":"2123712837",
                                    "ysqNo":"2123712837",
                                    "operate":"ADMIN",
                                    "sqDate":"2018-06-07 17:02:26"
                                },
                                    {
                                        "status":"预支",
                                        "project":"国内卡",
                                        "count":"200",
                                        "cardNo":"2123712837",
                                        "ysqNo":"2123712837",
                                        "operate":"ADMIN",
                                        "sqDate":"2018-06-07 17:02:26"
                                    },
                                    {
                                        "status":"预支",
                                        "project":"国内卡",
                                        "count":"200",
                                        "cardNo":"2123712837",
                                        "ysqNo":"2123712837",
                                        "operate":"ADMIN",
                                        "sqDate":"2018-06-07 17:02:26"
                                    },
                                    {
                                        "status":"预支",
                                        "project":"国内卡",
                                        "count":"200",
                                        "cardNo":"2123712837",
                                        "ysqNo":"2123712837",
                                        "operate":"ADMIN",
                                        "sqDate":"2018-06-07 17:02:26"
                                    },
                                    {
                                        "status":"预支",
                                        "project":"国内卡",
                                        "count":"200",
                                        "cardNo":"2123712837",
                                        "ysqNo":"2123712837",
                                        "operate":"ADMIN",
                                        "sqDate":"2018-06-07 17:02:26"
                                    },
                                    {
                                        "status":"预支",
                                        "project":"国内卡",
                                        "count":"200",
                                        "cardNo":"2123712837",
                                        "ysqNo":"2123712837",
                                        "operate":"ADMIN",
                                        "sqDate":"2018-06-07 17:02:26"
                                    },
                                    {
                                        "status":"预支",
                                        "project":"国内卡",
                                        "count":"200",
                                        "cardNo":"2123712837",
                                        "ysqNo":"2123712837",
                                        "operate":"ADMIN",
                                        "sqDate":"2018-06-07 17:02:26"
                                    }
                                ],
                            }
                        })
                    }
                });
            });
        },
        showZhuanyi:function(){
            jQuery.get('../../org/org-subwindow/reservation-subwindow-zhuanyi.html', function(html) {
                layer.open({
                    content: html,
                    id: 'zhuanyi',
                    type: 1,
                    title: '转移',
                    closeBtn:1,
                    scrollbar: false,
                    area: ['689px', '848px'],
                    success:function(){
                        new Vue({
                            el: "#zhuanyi",
                            data: {
                                dataList: [{
                                    "name":"张敏",
                                    "roomNo":"1002",
                                    "status":"R",
                                    "type":"F",
                                    "balance":"-300"
                                },
                                    {
                                        "name":"张敏",
                                        "roomNo":"1002",
                                        "status":"R",
                                        "type":"F",
                                        "balance":"-300"
                                    },
                                    {
                                        "name":"张敏",
                                        "roomNo":"1002",
                                        "status":"R",
                                        "type":"F",
                                        "balance":"-300"
                                    },
                                    {
                                        "name":"张敏",
                                        "roomNo":"1002",
                                        "status":"R",
                                        "type":"F",
                                        "balance":"-300"
                                    },
                                    {
                                        "name":"张敏",
                                        "roomNo":"1002",
                                        "status":"R",
                                        "type":"F",
                                        "balance":"-300"
                                    },
                                    {
                                        "name":"张敏",
                                        "roomNo":"1002",
                                        "status":"R",
                                        "type":"F",
                                        "balance":"-300"
                                    },
                                    {
                                        "name":"张敏",
                                        "roomNo":"1002",
                                        "status":"R",
                                        "type":"F",
                                        "balance":"-300"
                                    }
                                ],
                            }
                        });

                        //数据概览
                        layui.use(['admin', 'whui', 'element', 'form'], function() {
                            var form = layui.form;
                            form.render('checkbox');

                        });
                    }
                });
            });
        },
        showLog:function(){
            jQuery.get('../../org/org-subwindow/reservation-subwindow-rizhi.html', function(html) {
                layer.open({
                    content: html,
                    id: 'rizhi',
                    type: 1,
                    title: '日志',
                    closeBtn:1,
                    scrollbar: false,
                    area: ['689px', '878px'],
                    success:function(){
                        new Vue({
                            el: "#rizhi",
                            data: {
                                dataList: [{
                                    "date":"2018-05-29 15:57",
                                    "project":"预订id",
                                    "old":"0",
                                    "new":"0",
                                    "create":"administrator"
                                },
                                    {
                                        "date":"2018-05-29 15:57",
                                        "project":"预订id",
                                        "old":"0",
                                        "new":"0",
                                        "create":"administrator"
                                    },
                                    {
                                        "date":"2018-05-29 15:57",
                                        "project":"预订id",
                                        "old":"0",
                                        "new":"0",
                                        "create":"administrator"
                                    },
                                    {
                                        "date":"2018-05-29 15:57",
                                        "project":"预订id",
                                        "old":"0",
                                        "new":"0",
                                        "create":"administrator"
                                    },
                                    {
                                        "date":"2018-05-29 15:57",
                                        "project":"预订id",
                                        "old":"0",
                                        "new":"0",
                                        "create":"administrator"
                                    },
                                    {
                                        "date":"2018-05-29 15:57",
                                        "project":"预订id",
                                        "old":"0",
                                        "new":"0",
                                        "create":"administrator"
                                    },
                                    {
                                        "date":"2018-05-29 15:57",
                                        "project":"预订id",
                                        "old":"0",
                                        "new":"0",
                                        "create":"administrator"
                                    }
                                ],
                            }
                        })
                    }
                });
            });
        },
        showChexiao:function(){
            jQuery.get('../../org/org-subwindow/reservation-subwindow-confirm.html', function(html) {
                layer.open({
                    content: html,
                    id: 'chexiao',
                    type: 1,
                    title: '撤销',
                    closeBtn:1,
                    scrollbar: false,
                    area: ['640px', '320px'],
                    success:function(){
                        new Vue({
                            el: "#chexiao",
                            data: {
                                message:'确定撤销该笔预授权？'
                            }
                        })
                    }
                });
            });
        },
        showZkInfo:function(){
            jQuery.get('../../org/org-subwindow/reservation-subwindow-zkInfo.html', function(html) {
                layer.open({
                    content: html,
                    id: 'info',
                    type: 1,
                    title: '住客信息',
                    closeBtn:1,
                    scrollbar: false,
                    area: ['689px', '878px'],
                    btn:[],
                    success:function(){
                        //初始化
                        layui.use(['admin', 'whui', 'element', 'form'], function() {
                            var form = layui.form;
                            form.render('radio');
                        });
                    }
                });
            });
        },
        showMessage:function(){
            jQuery.get('../../org/org-subwindow/reservation-subwindow-message.html', function(html) {
                layer.open({
                    content: html,
                    id: 'message',
                    type: 1,
                    title: '留言',
                    closeBtn:1,
                    scrollbar: false,
                    area: ['517px', '627px'],
                    success:function(){
                        layui.use(['admin', 'whui', 'element', 'laydate', 'dateformat'], function() {
                            var whui = layui.whui;
                            var whconfig = layui.whconfig;

                            var dateformat = layui.dateformat;

                            //常规用法
                            layui.laydate.render({
                                elem: '#startDatePick',
                                format: 'yyyy年M月d日',
                                value: new Date(),
                                isInitValue: true,
                                showBottom: false
                            });

                            layui.laydate.render({
                                elem: '#endDatePick',
                                format: 'yyyy年M月d日',
                                value: new Date(),
                                isInitValue: true,
                                showBottom: false
                            });

                        });
                    }
                });
            });
        },
        showDelete:function(){
            jQuery.get('../../org/org-subwindow/reservation-subwindow-confirm.html', function(html) {
                layer.open({
                    content: html,
                    id: 'shanchu',
                    type: 1,
                    title: '删除',
                    closeBtn:1,
                    scrollbar: false,
                    area: ['640px', '320px'],
                    success:function(){
                        new Vue({
                            el: "#shanchu",
                            data: {
                                message:'确定删除该记录？'
                            }
                        })
                    }
                });
            });
        }
    }
})



//数据概览

    //常规用法
    layui.laydate.render({
        elem: '#arriveDatePick',
        format: 'yyyy年M月d日',
        value: new Date(),
        isInitValue: true,
        showBottom: false
    });

    layui.laydate.render({
        elem: '#leaveDatePick',
        format: 'yyyy年M月d日',
        value: new Date(),
        isInitValue: true,
        showBottom: false
    });

    function plselect(){
        layer.closeAll();
        jQuery.get('../../org/org-subwindow/reservation-subwindow-piliang.html', function(html) {
            layer.open({
                content: html,
                id: 'pl',
                type: 1,
                title: '批量处理',
                closeBtn:1,
                scrollbar: false,
                offset: ['50px','100px'],
                area: ['838px', '878px'],
                success:function(){
                    new Vue({
                        el: "#pl",
                        data: {
                            dataList: [{
                                "roomType":"SWSC",
                                "roomNo":"2001",
                                "name":"张明",
                                "arriveDate":"2018-06-07",
                                "leaveDate":"2018-06-07"
                            },
                                {
                                    "roomType":"SWSC",
                                    "roomNo":"2001",
                                    "name":"张明",
                                    "arriveDate":"2018-06-07",
                                    "leaveDate":"2018-06-07"
                                },
                                {
                                    "roomType":"SWSC",
                                    "roomNo":"2001",
                                    "name":"张明",
                                    "arriveDate":"2018-06-07",
                                    "leaveDate":"2018-06-07"
                                },
                                {
                                    "roomType":"SWSC",
                                    "roomNo":"2001",
                                    "name":"张明",
                                    "arriveDate":"2018-06-07",
                                    "leaveDate":"2018-06-07"
                                },
                                {
                                    "roomType":"SWSC",
                                    "roomNo":"2001",
                                    "name":"张明",
                                    "arriveDate":"2018-06-07",
                                    "leaveDate":"2018-06-07"
                                },
                                {
                                    "roomType":"SWSC",
                                    "roomNo":"2001",
                                    "name":"张明",
                                    "arriveDate":"2018-06-07",
                                    "leaveDate":"2018-06-07"
                                },
                                {
                                    "roomType":"SWSC",
                                    "roomNo":"2001",
                                    "name":"张明",
                                    "arriveDate":"2018-06-07",
                                    "leaveDate":"2018-06-07"
                                }
                            ],
                        }
                    })
                }
            });
        });
        jQuery.get('../../org/org-subwindow/reservation-subwindow-piliangSelect.html', function(html) {
            layer.open({
                content: html,
                id: 'plselect',
                type: 1,
                title: '批量选择',
                closeBtn:1,
                scrollbar: false,
                offset: ['50px','1000px'],
                area: ['689px', '878px'],
                success:function(){
                    new Vue({
                        el: "#plselect",
                        data: {
                            dataList: [{
                                "roomType":"SWSC",
                                "roomNo":"1001",
                                "mark":"VC",
                                "sign":"远离工作区"
                            },
                                {
                                    "roomType":"SWSC",
                                    "roomNo":"1001",
                                    "mark":"VC",
                                    "sign":"远离工作区"
                                },
                                {
                                    "roomType":"SWSC",
                                    "roomNo":"1001",
                                    "mark":"VC",
                                    "sign":"远离工作区"
                                },
                                {
                                    "roomType":"SWSC",
                                    "roomNo":"1001",
                                    "mark":"VC",
                                    "sign":"远离工作区"
                                }, {
                                    "roomType":"SWSC",
                                    "roomNo":"1001",
                                    "mark":"VC",
                                    "sign":"远离工作区"
                                }, {
                                    "roomType":"SWSC",
                                    "roomNo":"1001",
                                    "mark":"VC",
                                    "sign":"远离工作区"
                                }
                            ],
                        }
                    })
                    //初始化
                    layui.use(['admin', 'whui', 'element', 'form'], function() {
                        var form = layui.form;
                        form.render('checkbox');
                    });
                }
            });
        });
    }

});