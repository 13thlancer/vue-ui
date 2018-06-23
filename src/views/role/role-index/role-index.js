layui.use(['admin', 'table', 'form', 'layer','zTree'], function() {
    var table = layui.table;
    var zTree = layui.zTree;
    var form = layui.form;
    var layer = layui.layer;
    var whconfig = layui.whconfig;
    var whui = layui.whui;

    var test = new Vue({
        el: '#test',
        data: {
            rooms:[
                {num:'1',name:'111111111',selected:false},
                {num:'2',name:'222222222',selected:false},
                {num:'3',name:'333333333',selected:false},
                {num:'4',name:'444444444',selected:false},
                {num:'5',name:'555555555',selected:false},
                {num:'6',name:'666666666',selected:false},
                {num:'7',name:'777777777',selected:false},
                {num:'8',name:'888888888',selected:false},
                {num:'9',name:'999999999',selected:false},
                {num:'10',name:'10101010101010101010',selected:false},
                {num:'11',name:'11111111111111111111',selected:false},
                {num:'12',name:'12121212121212121212',selected:false},
                {num:'13',name:'13131313131313131313',selected:false},
                {num:'14',name:'14141414141414141414',selected:false}
            ],
            activeName: '',
            isChecked: '',
            shiftSeqSign:'',
            activeNames: [],
            curIndex:''
        },
        // 在 `methods` 对象中定义方法
        methods: {
            selected: function (index,ev) {
                // console.log(room)
                // alert("click");
                if(!ev.ctrlKey && !ev.shiftKey){

                    for (var i=0;i<this.rooms.length;i++)
                    {
                        this.rooms[i].selected= false;
                    }
                    this.rooms[index].selected= !this.rooms[index].selected;
                    this.shiftSeqSign = '';
                    this.curIndex = index;
                }

            },
            mutiSelected: function (index,ev) {

                this.rooms[index].selected= !this.rooms[index].selected;
                this.shiftSeqSign = '';
                this.curIndex = index;
            },
            shiftSelect:function (index,ev) {
                // alert(ev.shiftKey)
                var c;
                for (var i=0;i<this.rooms.length;i++)
                {
                    if( this.rooms[i].selected == true){
                        c = i;
                        break;
                    }
                }

                if(this.curIndex === ''){
                    if(c === undefined){
                        this.rooms[index].selected = true;
                        this.curIndex = c;
                    }
                }else{
                    c = this.curIndex;
                }
                // alert(this.curIndex);
                // alert(c);
                if(index < c){
                    for(var i = index; i < c; i++){
                        this.rooms[i].selected= true;
                    }
                    for(var i = 0;i<index;i++){
                        this.rooms[i].selected= false;
                    }
                    for(var i = c+1; i < this.rooms.length; i++){
                        this.rooms[i].selected= false;
                    }
                }
                if(index > c){
                    for (var i = c; i <index+1;i++){
                        this.rooms[i].selected= true;
                    }
                    for(var i = index+1;i<this.rooms.length;i++){
                        this.rooms[i].selected= false;
                    }
                    for(var i = 0;i<c;i++){
                        this.rooms[i].selected= false;
                    }
                }

            },
            /*鼠标悬浮事件*/
            showDetail:function(room){
                // alert(room.name);
            }
        },
        computed: {

        }
    })
});