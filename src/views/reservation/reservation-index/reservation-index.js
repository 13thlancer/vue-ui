layui.use(['admin', 'whui','form', 'element', 'laydate', 'dateformat'], function() {
    var whui = layui.whui;
    var whconfig = layui.whconfig;
    var dateformat = layui.dateformat;
    var form = layui.form;

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
            bookInfoTab1:true,
            bookInfoTab2:false,
            bookInfoTab3:false,
            isShowBenefitReason:false,
            dayInitCount:'1',
            roomInitCount:'1',
            tempRoomPrice:'',
            pageNumList:[1],
            reservationForm:{
                'hotelGroupId':2,
                'hotelId':9,
                'roomType':'',
                'roomPriceType':'',
                'roomPriceCode':'',
                'roomPrice':'',
                'roomBaojia':'',
                'group':'',
                'benefitReason':'',
                'saler':'',
                'salaryCode':'',
                'channel':'',
                'payType':''
            },
            preorderList:[],
            preorder:{
                'dayPrice':'',
                'days':'',
                'hotelGroupId':'',
                'hotelId':'',
                'mainInfoId':'',
                'memberNo':'',
                'packages':'',
                'planStart':'',
                'planEnd':'',
                'PriMainId':'',
                'ratecode':'',
                'roomNum':'',
                'roomType':'',
                'rsvClass':''
                },
            rsvInfo:{
              'inPerson':'',
              'keepTime':'',
              'mobile':'',
              'planStart':'',
              'rsvMan':'',
              'tel':'',
            },
            marketing:{
              'channel':'',
              'commissionCode':'',
              'market':'',
              'payCode':'',
              'rsvType':'',
              'salesman':'',
              'src':''
            },
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
            selectSk:function(){
                layer.closeAll();
                this.bookInfoTab1 = true;
                this.bookInfoTab2 = false;
                this.bookInfoTab3 = false;
            },
            selectTd:function(){
                layer.closeAll();
                this.bookInfoTab1 = false;
                this.bookInfoTab2 = true;
                this.bookInfoTab3 = false;
            },
            selectCbf:function(){
                layer.closeAll();
                this.bookInfoTab1 = false;
                this.bookInfoTab2 = false;
                this.bookInfoTab3 = true;
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
            addNewPage:function(){
                if(this.pageNumList.length < 10){
                    var i = this.pageNumList.length;
                    this.pageNumList.push(i+1);
                }
            },
            delNewPage:function(){
                if(this.pageNumList.length > 1){
                    var i = this.pageNumList.length;
                    this.pageNumList.splice(i-1, 1);
                }
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
                jQuery.get('../../reservation/reservation-subwindow/reservation-subwindow-piliang.html', function(html) {
                    layer.open({
                        content: html,
                        id: 'piliang',
                        type: 1,
                        title: '批量处理',
                        closeBtn:1,
                        scrollbar: false,
                        area: ['838px', '878px'],
                        success:function(){
                            var params = {
                                "priMainId":18061500002
                            };
                            whui.request(layui.whconfig.bizurl.reservation.getBatchOrderList,params,
                                function(data,desc){
                                    new Vue({
                                        el: "#piliang",
                                        data: {
                                            dataList:data.batchOrderList,
                                        },
                                        methods:{
                                            showPLSelect:function(){
                                                plselect();
                                            }
                                        }
                                    })
                                }
                            );
                        }
                    });
                });
            },
            showRoomType:function(){
                layer.closeAll();
                jQuery.get('../../reservation/reservation-subwindow/reservation-subwindow-roomType.html', function(html) {
                    layer.open({
                        content: html,
                        id: 'showRoomType',
                        title: false,
                        shade: false,
                        type: 1,
                        offset: ['515px','467px'],
                        area: ['541px', '534px'],
                        success:function(){
                            var params = {
                                "hotelGroupId": 2,
                                "hotelId": 9,
                                "planStart":"2018-06-08 00:00:00"
                            }
                            whui.request(layui.whconfig.bizurl.reservation.getRoomType, params,
                                function(data,desc){
                                    new Vue({
                                        el: "#showRoomType",
                                        data: {
                                            dataList:data.roomTypeList,
                                        },
                                        methods:{
                                            selectItem:function(index){
                                                vm.reservationForm.roomType = this.dataList[index].id;
                                                layer.closeAll();
                                                vm.showRoomPriceType();
                                            }
                                        }
                                    })
                                }
                            );
                        }
                    });
                });
            },
            showRoomPriceType:function(){
                layer.closeAll();
                jQuery.get('../../reservation/reservation-subwindow/reservation-subwindow-regular.html', function(html) {
                    layer.open({
                        content: html,
                        id: 'RoomPriceType',
                        shade: false,
                        title: false,
                        type: 1,
                        offset: ['298px','1128px'],
                        area: ['541px', '534px'],
                        success:function(){
                            var params = {
                                "hotelGroupId":2,
                                "hotelId": 9,
                                "configCode":'ROOM_PRICE_TYPE'
                            }
                            whui.request(layui.whconfig.bizurl.reservation.getRoomPriceType, params,
                                function(data,desc){

                                    new Vue({
                                        el: "#RoomPriceType",
                                        data: {
                                            dataList:data.configCodeList,
                                        },
                                        methods:{
                                            selectItem:function(index){
                                                vm.reservationForm.roomPriceType = this.dataList[index].text;
                                                layer.closeAll();
                                                vm.showRoomPriceCode();
                                            }
                                        }
                                    })
                                }
                            );
                        }
                    });
                });
            },
            showRoomPriceCode:function(){
                layer.closeAll();
                jQuery.get('../../reservation/reservation-subwindow/reservation-subwindow-roomPriceCode.html', function(html) {
                    layer.open({
                        content: html,
                        id: 'RoomPriceCode',
                        title: false,
                        shade: false,
                        type: 1,
                        offset: ['371px','1128px'],
                        area: ['541px', '534px'],
                        success:function(){
                            var params = {
                                "hotelGroupId":2,
                                "hotelId": 9,
                                "planStart":'2018-06-08 00:00:00',
                                "planEnd":'2018-06-11 00:00:00',
                                "roomType":'SWDC',
                                "priceType":'MS'
                            }
                            whui.request(layui.whconfig.bizurl.reservation.getRoomPriceCode, params,
                                function(data,desc){
                                    new Vue({
                                        el: "#RoomPriceCode",
                                        data: {
                                            dataList:data.rateCodeList,
                                        },
                                        methods:{
                                            selectItem:function(index){
                                                vm.reservationForm.roomPriceCode = this.dataList[index].text;
                                                vm.reservationForm.roomPrice = this.dataList[index].dayPrice;
                                                vm.tempPrice = this.dataList[index].dayPrice;
                                                layer.closeAll();
                                                vm.showRoomBaojia();
                                            }
                                        }
                                    })
                                }
                            );
                        }
                    });
                });
            },
            checkPrice:function(){
                layer.closeAll();
                if(this.reservationForm.roomPrice != this.tempPrice){
                    this.isShowBenefitReason = true;
                    vm.showBenefitReason();
                }else{
                    this.isShowBenefitReason = false;
                }
            },
            showBenefitReason:function(){
                layer.closeAll();
                jQuery.get('../../reservation/reservation-subwindow/reservation-subwindow-regular.html', function(html) {
                    layer.open({
                        content: html,
                        id: 'benefitReason',
                        type: 1,
                        shade: false,
                        title: false,
                        offset: ['443px','1128px'],
                        area: ['541px', '534px'],
                        success:function(){
                            var params = {
                                "hotelGroupId":2,
                                "hotelId": 9,
                                "configCode":'BENEFIT_REASON'
                            }
                            whui.request(layui.whconfig.bizurl.reservation.getBenefitReason, params,
                                function(data,desc){
                                    new Vue({
                                        el: "#benefitReason",
                                        data: {
                                            dataList:data.configCodeList,
                                        },
                                        methods:{
                                            selectItem:function(index){
                                                vm.reservationForm.benefitReason = this.dataList[index].text;
                                                layer.closeAll();
                                            }
                                        }
                                    })
                                }
                            );
                        }
                    });
                });
            },
            showRoomBaojia:function(){
                layer.closeAll();
                jQuery.get('../../reservation/reservation-subwindow/reservation-subwindow-regular.html', function(html) {
                    layer.open({
                        content: html,
                        id: 'RoomBaojia',
                        type: 1,
                        shade: false,
                        title: false,
                        offset: ['515px','1128px'],
                        area: ['541px', '534px'],
                        success:function(){
                            var params = {
                                "hotelGroupId":2,
                                "hotelId": 9,
                                "configCode":'PACKAGE'
                            }
                            whui.request(layui.whconfig.bizurl.reservation.getRoomBaojia, params,
                                function(data,desc){
                                    new Vue({
                                        el: "#RoomBaojia",
                                        data: {
                                            dataList:data.configCodeList,
                                        },
                                        methods:{
                                            selectItem:function(index){
                                                vm.reservationForm.roomBaojia = this.dataList[index].text;
                                                layer.closeAll();
                                            }
                                        }
                                    })
                                }
                            );
                        }
                    });
                });
            },
            showGroupList:function(){
                layer.closeAll();
                jQuery.get('../../reservation/reservation-subwindow/reservation-subwindow-regular.html', function(html) {
                    layer.open({
                        content: html,
                        id: 'group',
                        type: 1,
                        shade: false,
                        title: false,
                        offset: ['298px','820px'],
                        area: ['541px', '534px'],
                        success:function(){
                            var params = {
                                "hotelGroupId":2,
                                "hotelId": 9
                            }
                            whui.request(layui.whconfig.bizurl.reservation.getGroupList, params,
                                function(data,desc){
                                    new Vue({
                                        el: "#group",
                                        data: {
                                            dataList:data.groupList,
                                        },
                                        methods:{
                                            selectItem:function(index){
                                                vm.reservationForm.group = this.dataList[index].text;
                                                layer.closeAll();
                                            }
                                        }
                                    })
                                }
                            );
                        }
                    });
                });
            },
            showSaler:function(){
                layer.closeAll();
                jQuery.get('../../reservation/reservation-subwindow/reservation-subwindow-saler.html', function(html) {
                    layer.open({
                        content: html,
                        id: 'saler',
                        type: 1,
                        shade: false,
                        title: false,
                        offset: ['254px','744px'],
                        area: ['541px', '534px'],
                        success:function(){
                            var params = {
                                "hotelGroupId":2,
                                "hotelId": 9
                            }
                            whui.request(layui.whconfig.bizurl.reservation.getSaler, params,
                                function(data,desc){
                                    new Vue({
                                        el: "#saler",
                                        data: {
                                            dataList:data.salesManList,
                                        },
                                        methods:{
                                            selectItem:function(index){
                                                vm.reservationForm.saler = this.dataList[index].text;
                                                layer.closeAll();
                                                vm.showSalaryCode();
                                            }
                                        }
                                    })
                                }
                            );
                        }
                    });
                });
            },
            showpaifang:function(){
                layer.closeAll();
                jQuery.get('../../reservation/reservation-subwindow/reservation-subwindow-paifang.html', function(html) {
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
                jQuery.get('../../reservation/reservation-subwindow/reservation-subwindow-regular.html', function(html) {
                    layer.open({
                        content: html,
                        id: 'salaryCode',
                        type: 1,
                        shade: false,
                        title: false,
                        offset: ['326px','744px'],
                        area: ['541px', '534px'],
                        success:function(){
                            var params = vm.reservationForm;
                            whui.request(layui.whconfig.bizurl.reservation.getSalaryCode,params,
                                function(data,desc){
                                    new Vue({
                                        el: "#salaryCode",
                                        data: {
                                            dataList:data.commissionCodeList,
                                        },
                                        methods:{
                                            selectItem:function(index){
                                                vm.reservationForm.salaryCode = this.dataList[index].text;
                                                layer.closeAll();
                                                vm.showChannel();
                                            }
                                        }
                                    })
                                }
                            );
                        }
                    });
                });
            },
            showChannel:function(){
                layer.closeAll();
                jQuery.get('../../reservation/reservation-subwindow/reservation-subwindow-regular.html', function(html) {
                    layer.open({
                        content: html,
                        id: 'channel',
                        type: 1,
                        shade: false,
                        title: false,
                        offset: ['399px','744px'],
                        area: ['541px', '534px'],
                        success:function(){
                            var params = {
                                "hotelGroupId":2,
                                "hotelId": 9,
                                "configCode":'SRC_CODE'
                            }
                            whui.request(layui.whconfig.bizurl.reservation.getChannel,params,
                                function(data,desc){
                                    new Vue({
                                        el: "#channel",
                                        data: {
                                            dataList:data.configCodeList,
                                        },
                                        methods:{
                                            selectItem:function(index){
                                                vm.reservationForm.channel = this.dataList[index].text;
                                                layer.closeAll();
                                                vm.showPayType();
                                            }
                                        }
                                    })
                                }
                            );
                        }
                    });
                });
            },
            showPayType:function(){
                layer.closeAll();
                jQuery.get('../../reservation/reservation-subwindow/reservation-subwindow-regular.html', function(html) {
                    layer.open({
                        content: html,
                        id: 'payType',
                        type: 1,
                        shade: false,
                        title: false,
                        offset: ['471px','744px'],
                        area: ['541px', '534px'],
                        success:function(){
                            var params = vm.reservationForm;

                            whui.request(layui.whconfig.bizurl.reservation.getPayType,params,
                                function(data,desc){
                                    new Vue({
                                        el: "#payType",
                                        data: {
                                            dataList:data.paycodeList,
                                        },
                                        methods:{
                                            selectItem:function(index){
                                                vm.reservationForm.payType = this.dataList[index].text;
                                                layer.closeAll();
                                            }
                                        }
                                    })
                                }
                            );
                        }
                    });
                });
            },
            showYskPayType:function(){
                layer.closeAll();
                jQuery.get('../../reservation/reservation-subwindow/reservation-subwindow-regular.html', function(html) {
                    layer.open({
                        content: html,
                        id: 'YskPayType',
                        type: 1,
                        shade: false,
                        title: false,
                        offset: ['370px','800px'],
                        area: ['541px', '534px'],
                        success:function(){
                            var params = vm.reservationForm;
                            whui.request(layui.whconfig.bizurl.reservation.getPayType,params,
                                function(data,desc){
                                    new Vue({
                                        el: "#YskPayType",
                                        data: {
                                            dataList:data.paycodeList,
                                        }
                                    })
                                }
                            );
                        }
                    });
                });
            },
            showYsqPayType:function(){
                layer.closeAll();
                jQuery.get('../../reservation/reservation-subwindow/reservation-subwindow-regular.html', function(html) {
                    layer.open({
                        content: html,
                        id: 'YsqPayType',
                        type: 1,
                        shade: false,
                        title: false,
                        offset: ['370px','800px'],
                        area: ['541px', '534px'],
                        success:function(){
                            var params = vm.reservationForm;
                            whui.request(layui.whconfig.bizurl.reservation.getYsqPayType,params,
                                function(data,desc){
                                    new Vue({
                                        el: "#YsqPayType",
                                        data: {
                                            dataList:data.paycodeList,
                                        }
                                    })
                                }
                            );
                        }
                    });
                });
            },
            showJilu:function(){
                jQuery.get('../../reservation/reservation-subwindow/reservation-subwindow-jilu.html', function(html) {
                    layer.open({
                        content: html,
                        id: 'jilu',
                        type: 1,
                        title: '记录',
                        closeBtn:1,
                        scrollbar: false,
                        area: ['968px', '878px'],
                        success:function(){

                            var params = {
                                "priMainId":18061500002
                            };
                            whui.request(layui.whconfig.bizurl.reservation.getPrelicenceLogs,params,
                                function(data,desc){
                                    new Vue({
                                        el: "#jilu",
                                        data: {
                                            dataList:data.prelicenceLogs,
                                        }
                                    })
                                }
                            );
                        }
                    });
                });
            },
            showZhuanyi:function(){
                jQuery.get('../../reservation/reservation-subwindow/reservation-subwindow-zhuanyi.html', function(html) {
                    layer.open({
                        content: html,
                        id: 'zhuanyi',
                        type: 1,
                        title: '转移',
                        closeBtn:1,
                        scrollbar: false,
                        area: ['689px', '848px'],
                        success:function(){
                            var params = vm.reservationForm;
                            whui.request(layui.whconfig.bizurl.reservation.getTransferList,params,
                                function(data,desc){
                                    new Vue({
                                        el: "#zhuanyi",
                                        data: {
                                            dataList:data.transferList,
                                        }
                                    })
                                }
                            );
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
                jQuery.get('../../reservation/reservation-subwindow/reservation-subwindow-rizhi.html', function(html) {
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
                jQuery.get('../../reservation/reservation-subwindow/reservation-subwindow-confirm.html', function(html) {
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
                jQuery.get('../../reservation/reservation-subwindow/reservation-subwindow-zkInfo.html', function(html) {
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
                jQuery.get('../../reservation/reservation-subwindow/reservation-subwindow-message.html', function(html) {
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
                jQuery.get('../../reservation/reservation-subwindow/reservation-subwindow-confirm.html', function(html) {
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


    jQuery(function(){
        initTable();
    });

    function initTable(){
        var params = {
            "priMainId":18061500001
        }
        whui.request(layui.whconfig.bizurl.reservation.getPreorderList, params, function(data,desc){
           vm.preorderList = data.preorderList;
        });
    }

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
        jQuery.get('../../reservation/reservation-subwindow/reservation-subwindow-piliang.html', function(html) {
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
        jQuery.get('../../reservation/reservation-subwindow/reservation-subwindow-piliangSelect.html', function(html) {
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