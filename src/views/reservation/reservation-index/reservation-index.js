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
            bookInfopageSelect:0,
            ysqPageSelect:0,
            tempRoomPrice:'',
            pageNumList:[1],
            ysqPageNumList:[1],
            zkInfoList:[1],
            reservationForm:{
                'hotelGroupId':2,
                'hotelId':9
            },
            preLicenceList:{
                preLicenceList:[]
            },
            preLicence:{
                "consumeId":"",
                "newSubId":"",
                "priMainId":"",
                "hotelGroupId":"",
                "hotelId":"",
                "creditMoney":"",
                "creditPayCode":"",
                "creditPayCodeName":"",
                "creditNo":"",
                "creditPayNo":"",
                "creditMan":""
            },
            prepayDto:{
                "priMainId":"",
                "hotelGroupId":"",
                "hotelId":"",
                "prepayMoney":"",
                "payCodeName":"",
                "payCode":"",
                "transactionNo":"",
                "rsvMan":"",
                "remark":""
            },
            reservationParamsForm:{
                preorderList:[],
                rsvInfo:{
                    "inPerson":"",
                    "keepTime":"",
                    "mobile":"",
                    "planStart":"",
                    "rsvMan":"",
                    "tel":""
                },
                marketing:{
                    "channel":"",
                    "channelName":"",
                    "commissionCode":"",
                    "commissionCodeName":"",
                    "payCode":"",
                    "payCodeName":"",
                    "salesman":"",
                    "salesmanName":"",

                }
            },
            preorderData:{},
            preorderListTable:[],
            priMainId:'',
            preorder:{
                "dayPrice":"",
                "showdayPrice":"",
                "groupNo":"",
                "groupNoName":"",
                "days":"1",
                "hotelGroupId":2,
                "hotelId":9,
                "mainInfoId":"",
                "memberNo":"",
                "packages":"",
                "packagesName":"",
                "planStartDate":"",
                "planStartTime":"",
                "planStart":"",
                "planEndDate":"",
                "planEndTime":"",
                "planEnd":"",
                "priMainId":"",
                "ratecode":"",
                "ratecodeName":"",
                "roomNum":"1",
                "roomType":"",
                "roomTypeName":"",
                "ratecodeCategory":"",
                "ratecodeCategoryName":"",
                "rsvClass":"",
                "rsvClassName":"",
                "benefitReasonName":"",
                "benefitReason":""
                },
            rsvInfo:{
                "inPerson":"123",
                "keepTime":"123",
                "mobile":"123",
                "planStart":"123",
                "rsvMan":"123",
                "tel":"123"
            },
            marketing:{
                "channel":"",
                "channelName":"",
                "commissionCode":"",
                "commissionCodeName":"",
                "payCode":"",
                "payCodeName":"",
                "salesman":"",
                "salesmanName":"",
                "rsvType":"",
                "src":""
            },
            bookInfo: {
                "cusType": "",
                "arriveDate": "",
                "leaveDate": "",
                "days": "",
                "roomTypeCount": "",
                "roomPriceType": "",
                "roomPriceCode": "",
                "roomPrice": "",
                "baojia": ""
                // "baojia": "200.00"
            },
            customInfo: {
                "booker": "",
                "occupant": "",
                "phone": "",
                "arriveTime": "",
                "latestTime": ""
            },
            marketManager:{
                "saler": "",
                "salaryCode": "",
                "channel": "",
                "payType": ""
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
                console.log(this.rsvInfo);
                var params = this.reservationParamsForm;

                console.log(JSON.stringify(params));
                //提交前三步预订信息
                whui.request(layui.whconfig.bizurl.reservation.saveAll,params,
                    function(data,desc){
                        console.log(data);
                        this.priMainId = data.preorderList[0].priMainId;
                    },options={
                        contentType : 'application/json',
                    },
                );

                //判断预付款信息是否完整，若完整则提交。
                // var preapay = this.prepayDto;
                // whui.request(layui.whconfig.bizurl.reservation.addPrepay,preapay,
                //     function(data,desc){
                //         console.log(data);
                //     },options={
                //         contentType : 'application/json',
                //     },
                // );
                //判断预授权信息是否完整，若完整则提交。
                // var prelicence = this.preLicenceList;
                // console.log(prelicence);
                // whui.request(layui.whconfig.bizurl.reservation.addPrelicence,prelicence,
                //     function(data,desc){
                //         console.log(data);
                //     },options={
                //         contentType : 'application/json',
                //     },
                // );
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
                for(var i = 0;i < this.reservationParamsForm.preorderList.length;i++){
                    this.reservationParamsForm.preorderList[i].rsvClass = 'S';
                    this.reservationParamsForm.preorderList[i].rsvClassName = '散客';
                }
            },
            selectTd:function(){
                layer.closeAll();
                this.bookInfoTab1 = false;
                this.bookInfoTab2 = true;
                this.bookInfoTab3 = false;
                for(var i = 0;i < this.reservationParamsForm.preorderList.length;i++){
                    this.reservationParamsForm.preorderList[i].rsvClass = 'G';
                    this.reservationParamsForm.preorderList[i].rsvClassName = '团队';
                }
            },
            selectCbf:function(){
                layer.closeAll();
                this.bookInfoTab1 = false;
                this.bookInfoTab2 = false;
                this.bookInfoTab3 = true;
                for(var i = 0;i < this.reservationParamsForm.preorderList.length;i++){
                    this.reservationParamsForm.preorderList[i].rsvClass = 'L';
                    this.reservationParamsForm.preorderList[i].rsvClassName = '长包房';
                }
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
                if(this.pageNumList.length < 9){
                    var i = this.pageNumList.length;
                    this.pageNumList.push(i+1);
                    // var data = this.preorder;
                    if(this.bookInfoTab1 === true){
                        this.preorder.rsvClass = 'S';
                    }
                    if(this.bookInfoTab2 === true){
                        this.preorder.rsvClass = 'G';
                    }
                    if(this.bookInfoTab3 === true){
                        this.preorder.rsvClass = 'L';
                    }
                    this.preorder.planStart = this.preorder.planStartDate + " " + this.preorder.planStartTime;
                    this.preorder.planEnd = this.preorder.planEndDate + " " + this.preorder.planEndTime;
                    // this.preorder.roomNum = this.roomInitCount;
                    this.reservationParamsForm.preorderList.push(this.preorder);
                    this.preorder = {
                        "dayPrice":"",
                        "showdayPrice":"",
                        "groupNo":"",
                        "groupNoName":"",
                        "days":"1",
                        "hotelGroupId":2,
                        "hotelId":9,
                        "mainInfoId":"",
                        "memberNo":"",
                        "packages":"",
                        "packagesName":"",
                        "planStartDate":"",
                        "planStartTime":"",
                        "planStart":"",
                        "planEndDate":"",
                        "planEndTime":"",
                        "planEnd":"",
                        "priMainId":"",
                        "ratecode":"",
                        "ratecodeName":"",
                        "roomNum":"1",
                        "roomType":"",
                        "roomTypeName":"",
                        "ratecodeCategory":"",
                        "ratecodeCategoryName":"",
                        "rsvClass":"",
                        "rsvClassName":"",
                        "benefitReasonName":"",
                        "benefitReason":""
                    }
                }
            },
            delNewPage:function(){
                if(this.pageNumList.length > 1){
                    var i = this.pageNumList.length;
                    this.pageNumList.splice(i-1, 1);
                }
            },
            bookInfoselecetPage:function(index){
                this.bookInfopageSelect = index;
                this.preorder = this.reservationParamsForm.preorderList[index];
            },
            ysqselecetPage:function(index){
                this.ysqPageSelect = index;
                this.preLicence = this.preLicenceList.preLicenceList[index];
            },
            addYsqNewPage:function(){
                if(this.ysqPageNumList.length < 4){
                    var i = this.ysqPageNumList.length;
                    this.ysqPageNumList.push(i+1);
                    this.preLicenceList.preLicenceList.push(this.preLicence);
                    this.preLicence = {
                        "consumeId":"",
                        "newSubId":"",
                        "priMainId":"",
                        "hotelGroupId":"",
                        "hotelId":"",
                        "creditMoney":"",
                        "creditPayCode":"",
                        "creditPayCodeName":"",
                        "creditNo":"",
                        "creditPayNo":"",
                        "creditMan":""
                    }
                }
            },
            delYsqNewPage:function(){
                if(this.ysqPageNumList.length > 1){
                    var i = this.ysqPageNumList.length;
                    this.ysqPageNumList.splice(i-1, 1);
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
                        // this.isactive1 = false;
                        // this.isactive2 = false;
                        // this.isactive3 = false;
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
                        title: false,
                        area: ['838px', '878px'],
                        success:function(){
                            var piliang = new Vue({
                                el: "#piliang",
                                data: {
                                    dataList:'',
                                },
                                methods:{
                                    showPLSelect:function(){
                                        plselect();
                                    },
                                    closeImgClick:function(){
                                        layer.closeAll();
                                    }
                                }
                            })

                            var params = {
                                "priMainId":18061500002
                            };
                            whui.request(layui.whconfig.bizurl.reservation.getBatchOrderList,params,
                                function(data,desc){
                                    piliang.dataList = data.batchOrderLis;
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
                                            selectItem:function(item){
                                                vm.preorder.roomTypeName = item.text;
                                                vm.preorder.roomType = item.id;
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
                                            selectItem:function(item){
                                                vm.preorder.ratecodeCategoryName = item.text;
                                                vm.preorder.ratecodeCategory = item.id;
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
                                            selectItem:function(item){
                                                vm.preorder.ratecodeName = item.text;
                                                vm.preorder.dayPrice = item.dayPrice;
                                                vm.preorder.ratecode = item.id;

                                                vm.tempPrice = item.dayPrice;
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
                if(this.preorder.dayPrice != this.tempPrice){
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
                                            selectItem:function(item){
                                                vm.preorder.benefitReasonName = item.text;
                                                vm.preorder.benefitReason = item.id;
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
                                            selectItem:function(item){
                                                vm.preorder.packagesName = item.text;
                                                vm.preorder.packages = item.id;

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
                    var index = layer.open({
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
                                            selectItem:function(item){
                                                vm.preorder.groupNoName = item.text;
                                                vm.preorder.groupNo = item.id;
                                                layer.close(index);
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
                                            selectItem:function(item){
                                                vm.marketing.salesmanName = item.text;
                                                vm.reservationParamsForm.marketing.salesman = item.id;
                                                vm.reservationParamsForm.marketing.salesmanName = item.text;

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
                                            selectItem:function(item){
                                                vm.marketing.commissionCodeName = item.text;
                                                vm.reservationParamsForm.marketing.commissionCode = item.id;
                                                vm.reservationParamsForm.marketing.commissionCodeName = item.text;

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
            toIn:function(item){
                var params = {
                    "subInfoId":item.subInfoId,
                    "subId":item.subId,
                    "roomCode":item.roomNo
                }
                whui.request(layui.whconfig.bizurl.reservation.toIn,params,
                    function(data,desc){

                    }
                );
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
                                            selectItem:function(item){
                                                vm.marketing.channelName = item.text;
                                                vm.reservationParamsForm.marketing.channel = item.id;
                                                vm.reservationParamsForm.marketing.channelName = item.text;
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
                                            selectItem:function(item){
                                                vm.marketing.payCodeName = item.text;
                                                vm.reservationParamsForm.marketing.payCode = item.id;
                                                vm.reservationParamsForm.marketing.payCodeName = item.text;
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
                                        },
                                        methods:{
                                            selectItem:function(item){
                                                vm.prepayDto.payCodeName = item.text;
                                                vm.prepayDto.payCode = item.id;
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
                                        },
                                        methods:{
                                            selectItem:function(item){
                                                vm.preLicence.creditPayCodeName = item.text;
                                                vm.preLicence.creditPayCode = item.id;
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
            showJilu:function(){
                jQuery.get('../../reservation/reservation-subwindow/reservation-subwindow-jilu.html', function(html) {
                    layer.open({
                        content: html,
                        id: 'jilu',
                        type: 1,
                        title:false,
                        area: ['968px', '878px'],
                        success:function(){
                            var jilu = new Vue({
                                el: "#jilu",
                                data: {
                                    dataList:''
                                },
                                methods:{
                                    closeImgClick: function() {
                                        layer.closeAll();
                                    }
                                }
                            })
                            var params = {
                                "priMainId":18061500002
                            };
                            whui.request(layui.whconfig.bizurl.reservation.getPrelicenceLogs,params,
                                function(data,desc){
                                    jilu.dataList = data.prelicenceLogs;
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
                        title: false,
                        area: ['689px', '848px'],
                        success:function(){
                            var transfor = new Vue({
                                el: "#zhuanyi",
                                data: {
                                    typeList:[
                                        {'selected':false,
                                            'name':'I'
                                        },
                                        {'selected':false,
                                            'name':'R'
                                        },
                                        {'selected':false,
                                            'name':'S'
                                        },
                                        {'selected':false,
                                            'name':'消费帐'
                                        }],
                                    dataList:'',
                                    selectTransforIndex:'',
                                    selectTransfor:'',
                                    selectNameArr: [],
                                    selectCodeArr: [],
                                    ysqInfo:vm.preLicenceList.preLicenceList[vm.ysqPageSelect],
                                },
                                methods:{
                                    selectItem:function (index,item) {
                                        transfor.selectTransforIndex = index;
                                        transfor.ysqInfo.newSubId = item.subId;
                                    },
                                    selectItemClick:function(item){
                                        if(item.selected) {
                                            removeByValue(transfor.selectNameArr, item.text);
                                            removeByValue(transfor.selectCodeArr, item.id);
                                        } else {
                                            transfor.selectNameArr.push(item.text);
                                            transfor.selectCodeArr.push(item.id);
                                        }
                                        if(transfor.selectNameArr.length == transfor.dataList.length) {
                                            transfor.isSelectAll = true;
                                        } else {
                                            transfor.isSelectAll = false;
                                        }
                                        item.selected = !item.selected
                                    },
                                    ConfirmClick:function(){
                                        var params = this.ysqInfo;
                                        whui.request(layui.whconfig.bizurl.reservation.prelicenceTansfer,params,
                                            function(data,desc){
                                                // transfor.dataList = data.transferList;
                                                console.log(data);
                                            },options={
                                                contentType : 'application/json',
                                            },
                                        );
                                    },
                                    closeImgClick:function () {
                                        layer.closeAll();
                                    },
                                    CancelClick: function() {
                                        layer.closeAll();
                                    }
                                }
                            });

                            var params = vm.reservationForm;
                            whui.request(layui.whconfig.bizurl.reservation.getTransferList,params,
                                function(data,desc){
                                    transfor.dataList = data.transferList;
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
                        title: false,
                        scrollbar: false,
                        area: ['689px', '880px'],
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
                                },
                                methods:{
                                    closeImgClick: function() {
                                        layer.closeAll();
                                    }
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
                        title: false,
                        scrollbar: false,
                        area: ['640px', '320px'],
                        success:function(){
                            new Vue({
                                el: "#chexiao",
                                data: {
                                    title:'撤销',
                                    message:'确定撤销该笔预授权？'
                                },
                                methods:{
                                    confirm:function(){
                                        vm.delYsqNewPage();
                                    }
                                }
                            })
                        }
                    });
                });
            },
            showZkInfo:function(item){
                jQuery.get('../../reservation/reservation-subwindow/reservation-subwindow-zkInfo.html', function(html) {
                    layer.open({
                        content: html,
                        id: 'zkInfo',
                        type: 1,
                        title: false,
                        area: ['689px', '878px'],
                        success:function(){
                            //初始化
                            layui.use(['admin', 'whui', 'element', 'form'], function() {
                                var form = layui.form;
                                form.render('radio');
                            });
                            var person = new Vue({
                                el: "#zkInfo",
                                data: {
                                    pageSelect:0,
                                    pageList:[1],
                                    roomPersonList:{
                                        roomPersonList:[]
                                    },
                                    RoomPerson:{
                                        "roomPersonId":"",
                                        "personName":"",
                                        "cardType":"1",
                                        "cardNo":"",
                                        "address":"",
                                        "sex":"",
                                        "mobile":"",
                                        "email":"",
                                        "vipNum":""
                                    },
                                    roomInfo:{
                                        "roomType":item.roomType,
                                        "roomNo":item.roomNo
                                    }
                                },
                                methods:{
                                    addNewPage:function(){
                                        // console.log(this.pageList);
                                        // console.log(this.pageList.length);
                                        if(this.pageList.length < 6){
                                            var i = this.pageList.length;
                                            console.log(i);
                                            this.pageList.push(i+1);
                                            this.roomPersonList.push(this.RoomPerson);
                                            this.RoomPerson = {
                                                "roomPersonId":"",
                                                "personName":"",
                                                "cardType":"1",
                                                "cardNo":"",
                                                "address":"",
                                                "sex":"1",
                                                "mobile":"",
                                                "email":"",
                                                "vipNum":""
                                            }
                                        }
                                    },
                                    selecetPage:function(index){
                                        this.pageSelect = index;
                                        this.RoomPerson = this.roomPersonList[index];
                                    },
                                    confirm:function(){
                                        var params = this.roomPersonList;
                                        console.log(JSON.stringify(params));
                                        whui.request(layui.whconfig.bizurl.reservation.savezkInfo,params,
                                            function(data,desc){
                                                whui.msg.success(desc);
                                            },options={
                                                contentType : 'application/json',
                                            },
                                        );
                                    },
                                    closeImgClick: function() {
                                        layer.closeAll();
                                    }
                                }
                            })

                            var params = {
                                "subId":18062000001
                            };

                            whui.request(layui.whconfig.bizurl.reservation.getzkInfoList,params,
                                function(data,desc){
                                    // console.log(data);
                                    var len = data.personList.length;
                                    for(var i = 1 ;i < len;i++){
                                        person.pageList.push(i+1);
                                    }
                                    person.roomPersonList.roomPersonList = data.personList;
                                    person.RoomPerson = person.roomPersonList.roomPersonList[0];
                                }
                            );
                        }
                    });
                });
            },
            showMessage:function(index){
                jQuery.get('../../reservation/reservation-subwindow/reservation-subwindow-message.html', function(html) {
                    layer.open({
                        content: html,
                        id: 'message',
                        type: 1,
                        title: false,
                        area: ['517px', '627px'],
                        success:function(){
                            var msg = new Vue({
                                el: "#message",
                                data: {
                                    messageForm:{
                                        "showendTime":"",
                                        "endTime":"",
                                        "hotelGroupId": 2,
                                        "hotelId": 9,
                                        "person": vm.preorderListTable[index].inPerson,
                                        "remark": "",
                                        "roomCode": vm.preorderListTable[index].roomNo,
                                        "startTime": "",
                                        "showstartTime":"",
                                        "subId": vm.preorderListTable[index].subId
                                    }
                                },
                                methods:{
                                    ConfirmClick:function(){
                                        var params = this.messageForm;
                                        whui.request(layui.whconfig.bizurl.reservation.sendMessage,params,
                                            function(data,desc){

                                            },options={
                                                contentType : 'application/json',
                                            },
                                        );
                                    },
                                    CancelClick: function() {
                                        layer.closeAll();
                                    },
                                    closeImgClick:function () {
                                        layer.closeAll();
                                    }
                                }
                            })
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
                                    showBottom: false,
                                    done: function(value, date, endDate) {
                                        console.log(value);
                                        console.log(JSON.stringify(date));
                                        value = value.replace('年','-').replace('月','-').replace('日','')
                                        msg.messageForm.showstartTime = dateformat.format(new Date(value), 'yyyy年M月d日');
                                        msg.messageForm.startTime = dateformat.format(new Date(value), 'yyyy-M-d');
                                    }
                                });
                                layui.laydate.render({
                                    elem: '#endDatePick',
                                    format: 'yyyy年M月d日',
                                    value: new Date(),
                                    isInitValue: true,
                                    showBottom: false,
                                    done: function(value, date, endDate) {
                                        console.log(value);
                                        console.log(JSON.stringify(date));
                                        value = value.replace('年','-').replace('月','-').replace('日','')
                                        msg.messageForm.showendTime = dateformat.format(new Date(value), 'yyyy年M月d日');
                                        msg.messageForm.endTime = dateformat.format(new Date(value), 'yyyy-M-d');
                                    }
                                });
                            });
                        }
                    });
                });
            },
            showDelete:function(item){
                jQuery.get('../../reservation/reservation-subwindow/reservation-subwindow-confirm.html', function(html) {
                    layer.open({
                        content: html,
                        id: 'shanchu',
                        type: 1,
                        title: false,
                        scrollbar: false,
                        area: ['640px', '320px'],
                        success:function(){
                            new Vue({
                                el: "#shanchu",
                                data: {
                                    title:'删除',
                                    message:'确定删除该记录？'
                                },
                                methods:{
                                    confirm:function(){
                                        var params={
                                            "subInfoId":item.subInfoId,
                                        }
                                        whui.request(layui.whconfig.bizurl.reservation.cancelItem,params,
                                            function(data,desc){
                                                // console.log(data);
                                                // console.log(desc);
                                                // whui.msg.warn(desc);
                                            }
                                        );
                                    }
                                }
                            })
                        }
                    });
                });
            },
            starttimeformat:function(time){
                this.preorder.planStartTime = timeformat(time);
            },
            endtimeformat:function(time){
                this.preorder.planEndTime = timeformat(time);
            },
            rsvInfostarttimeformat:function(time){
                this.reservationParamsForm.rsvInfo.planStart = timeformat(time);
            },
            rsvInfoendtimeformat:function(time){
                this.reservationParamsForm.rsvInfo.keepTime = timeformat(time);
            },


        }
    })


    jQuery(function(){
        initTable();
    });

    function initTable(){
        var req={
            "priMainId":18062200001
        }
        whui.request(layui.whconfig.bizurl.reservation.getPreorderData, req, function(data,desc){
            vm.preorderListTable = data.preorderList;
            console.log(data);
        });
    }


    //常规用法
    layui.laydate.render({
        elem: '#arriveDatePick',
        format: 'yyyy年M月d日',
        value: new Date(),
        min: dateformat.format(new Date(), 'yyyy-MM-dd'),
        isInitValue: true,
        showBottom: false,
        done: function(value, date, endDate) {
            console.log(value);
            console.log(JSON.stringify(date));
            value = value.replace('年','-').replace('月','-').replace('日','')
            vm.preorder.showplanStartDate = dateformat.format(new Date(value), 'yyyy年M月d日');
            // vm.preorder.planStartDate = dateformat.format(new Date(value), 'yyyy-MM-dd');

        }
    });

    layui.laydate.render({
        elem: '#leaveDatePick',
        format: 'yyyy年M月d日',
        value: new Date(),
        min: dateformat.format(new Date(), 'yyyy-MM-dd'),
        isInitValue: true,
        showBottom: false,
        done: function(value, date, endDate) {
            console.log(value);
            console.log(JSON.stringify(date));
            value = value.replace('年','-').replace('月','-').replace('日','')
            vm.preorder.showplanEndDate = dateformat.format(new Date(value), 'yyyy年M月d日');
            vm.preorder.planEndDate = dateformat.format(new Date(value), 'yyyy-MM-dd');

        }
    });

    function plselect(){
        jQuery(".layui-layer.layui-layer-page").css("-webkit-transform", "translate(-400px,0)");
        jQuery(".layui-layer.layui-layer-page").css("transition", "opacity 200ms ease-in-out 2s,transform 800ms ease-in-out");


        jQuery.get('../../reservation/reservation-subwindow/reservation-subwindow-piliangSelect.html', function(html) {
            layer.open({
                content: html,
                id: 'plselect',
                type: 1,
                title: false,
                offset: ['50px','1000px'],
                area: ['689px', '878px'],
                success:function(){
                   var plselect = new Vue({
                        el: "#plselect",
                        data: {
                            typeList:{
                              mark:[
                                  {'selected':false,
                                  'name':'VC'
                                  },
                                  {'selected':false,
                                      'name':'VD'
                                  },
                                  {'selected':false,
                                      'name':'OC'
                                  },
                                  {'selected':false,
                                      'name':'OD'
                                  }],
                              building:[
                                  {'selected':false,
                                  'name':'1'
                                   },
                                  {'selected':false,
                                      'name':'2'
                                  },
                                  {'selected':false,
                                      'name':'3'
                                  },
                                  {'selected':false,
                                      'name':'4'
                                  }],
                              level:[
                                  {'selected':false,
                                      'name':'1'
                                  },
                                  {'selected':false,
                                      'name':'2'
                                  },
                                  {'selected':false,
                                      'name':'3'
                                  },
                                  {'selected':false,
                                      'name':'4'
                                  }
                              ],
                              feature:[
                                  {'selected':false,
                                      'name':'落地窗'
                                  },
                                  {'selected':false,
                                      'name':'远离工作间'
                                  },
                                  {'selected':false,
                                      'name':'远离工作间'
                                  },
                                  {'selected':false,
                                      'name':'远离工作间'
                                  }
                              ]
                            },
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
                            selectNameArr:[],
                            selectCodeArr:[],
                            isSelectAll: false,
                        },
                        methods:{
                            closeImgClick:function(){
                                layer.closeAll();
                            },
                            selectAllClick: function() {
                                this.selectNameArr = [];
                                this.selectCodeArr = [];
                                if(this.isSelectAll) {
                                    for(var i in this.dataList) {
                                        this.dataList[i].selected = false;
                                    }
                                } else {

                                    for(var i in this.dataList) {
                                        var temp = this.dataList[i];
                                        temp.selected = true;
                                        this.selectNameArr.push(temp.text);
                                        this.selectCodeArr.push(temp.id);
                                    }
                                }

                                this.isSelectAll = !this.isSelectAll;

                            },
                            selectItem:function(item){
                                if(item.selected) {

                                    removeByValue(this.selectNameArr, item.text);
                                    removeByValue(this.selectCodeArr, item.id);
                                } else {
                                    this.selectNameArr.push(item.text);
                                    this.selectCodeArr.push(item.id);
                                }
                                if(this.selectNameArr.length == this.dataList.length) {
                                    this.isSelectAll = true;
                                } else {
                                    this.isSelectAll = false;
                                }
                                item.selected = !item.selected
                            },
                            selectItemClick:function(item){
                                if(item.selected) {

                                    removeByValue(this.selectNameArr, item.text);
                                    removeByValue(this.selectCodeArr, item.id);
                                } else {
                                    this.selectNameArr.push(item.text);
                                    this.selectCodeArr.push(item.id);
                                }
                                if(this.selectNameArr.length == this.dataList.length) {
                                    this.isSelectAll = true;
                                } else {
                                    this.isSelectAll = false;
                                }
                                item.selected = !item.selected
                            },
                            CancelClick:function(){
                                layer.closeAll();
                            },
                            ConfirmClick:function(){

                            }
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

    function removeByValue(arr, val) {
        for(var i = 0; i < arr.length; i++) {
            if(arr[i] == val) {
                arr.splice(i, 1);
                break;
            }
        }
    }

    function timeformat(time){
        if(time != ''){
            var newTime;
            var len = time.length;
            if(len == 1){
                newTime = '0'+time+':00'+':00';
                console.log(newTime)
                // return '0'+time+':00';
            }
            if(len == 2){
                newTime = time+':00'+':00';
                console.log(newTime)
            }
            if(len == 3){
                var hour = time.substring(0,1);
                var min = time.substring(1);
                newTime = '0' + hour + ':' + min+':00';
                console.log(newTime)
            }
            if(len == 4){
                var hour = time.substring(0,2);
                var min = time.substring(2);
                newTime = hour + ':' + min+':00';
                console.log(newTime)
            }
            if(len > 4){
                var hour = time.substring(0,2);
                var min = time.substring(2,4);
                newTime = hour + ':' + min;
                console.log(newTime)
            }
            return newTime;
        }
    }
});