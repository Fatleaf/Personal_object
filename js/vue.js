const foods = Vue.createApp({
    data() {
        return {

            kinds: [
                {
                    title: '地瓜葉',
                    link: 'background-image: url(./images/02-食材/地瓜葉.jpg);',
                    descripe: '好吃'
                },
                {
                    title: 'A菜',
                    link: 'background-image: url(./images/02-食材/萵苣.jpg);',
                    descripe: '好吃'
                },
                {
                    title: '豬肉',
                    link: 'background-image: url(./images/02-食材/豬肉01.jpg);',
                    descripe: '台灣豬'
                },
                {
                    title: '雞肉',
                    link: 'background-image: url(./images/02-食材/雞肉.jpg);',
                    descripe: '健康美味'
                },
                {
                    title: '蛤蠣',
                    link: 'background-image: url(./images/02-食材/蛤蠣.jpg);',
                    descripe: '人間極品'
                },
                {
                    title: '蝦子',
                    link: 'background-image: url(./images/02-食材/蝦子01.jpg);',
                    descripe: '滿滿的蝦紅素'
                },
                {
                    title: '高麗菜',
                    link: 'background-image: url(./images/02-食材/高麗菜.jpg);',
                    descripe: '高營養'
                },
                {
                    title: '空心菜',
                    link: 'background-image: url(./images/02-食材/空心菜.jpg);',
                    descripe: '纖維多多!!'
                }
            ]
        }
    }
}).mount('#section03');

const menu = Vue.createApp({
    data() {
        return {
            menu: [
                {   
                    name: '麵飯米粉',
                    contents:[
                        {
                            title: '蛤仔麵',
                            price: '40'
                        },
                        {
                            title: '蛤仔米粉',
                            price: '40'
                        },
                        {
                            title: '蛤仔飯',
                            price: '40'
                        }
                    ]
                    
                },
                {
                    name: '小菜',
                    contents:[
                        {
                            title: '豆包',
                            price: '10'
                        },
                        {
                            title: '蝦丸二粒',
                            price: '10'
                        },
                        {
                            title: '香菇貢丸一粒',
                            price: '10'
                        }
                    ]
                },
                {
                    name: '湯品',
                    contents:[
                        {
                            title: '蛤仔湯',
                            price: '30'
                        },
                        {
                            title: '雞捲湯',
                            price: '40'
                        },
                        {
                            title: '蝦丸湯',
                            price: '30'
                        }
                    ]
                },
            ],
            isShow: false
        }
    },
    methods: {
        change() {
            this.isShow == false ? this.isShow = true : this.isShow = false;
        }
    }
});

menu.component('newMenu',{
    template: `
        <div class="col-12 col-lg-4 p-2">                        
            <div class="text_center">自訂菜單
            <small>大碗加10元</small></div>
            <table>
                <thead>
                    <tr>
                        <th class="menu_name">品&emsp;&emsp;名</th>
                        <th>單價</th>
                        <th>小</th>
                        <th>大</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(i, index) in title.food.length">
                        <th class="text_left">{{ title.food[index].name }}</th>
                        <th>{{ title.food[index].price }}</th>
                        <th></th>
                        <th></th>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-12 col-lg-4">
            <label for="">食物名稱: <input v-model="msg"></label>
            <label for="">價&emsp;&emsp;格: <input v-model.number="msg2" @blur="checkNum"></label>
            <br>
            <div class="btn" @click="add">新增</div>
            <div class="btn" @click="clear">清除</div>
        </div> `,
    data() {
        return {
            title: 
                {
                    food: []
                }
            ,
            msg: '',
            msg2: ''
        }
    },
    methods: {
        add() {
            (this.title.food).push({'name': this.msg, 'price':this.msg2});
            this.msg= '';
            this.msg2= '';
            console.log(this.title);
        },
        clear() {
            this.title.food = []
        },
        checkNum() {
            if(typeof this.msg2 !== 'number'){
                alert('價格只能輸入數字唷!');
                this.msg2 = '';
            }
        }
    }
});

menu.mount('#section04');

const giveback = Vue.createApp({
    data() {
        return {
            nothing: ''
        }
    },
    methods: {
        saywhat() {
            return alert('已送出，感謝您的填寫!');
        }
    }
}).mount('#giveback');
