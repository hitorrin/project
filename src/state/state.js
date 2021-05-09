import cat1 from '../images/images_1/cat1.jpg'
import cat2 from '../images/images_1/cat2.jpg'
import cat3 from '../images/images_1/cat3.jpg'
import diplom1 from '../images/images_2/diplom1.jpg'
import diplom2 from '../images/images_2/diplom2.jpg'
import diplom3 from '../images/images_2/diplom3.jpg'
import facebook__icon from '../icons/facebook.svg'
import instagram__icon from '../icons/instagram.svg'
import twitter__icon from '../icons/twitter.svg'
import vk__icon from '../icons/vk.svg'
let  rerenderEntireTree = () => {
   
};
let store = {
    state: {
        adsData: [
            { cost: 0, name: 'Кошечка Дуся', location: 'м. Беговая', category: 'Животные', description: 'Милая пушистая кошечка нуждается в новом владельце по причине переезда в другую страну! К лотку приучена, очень дружелюбная, любит детей, беспроблемная. Здоровая, стерилизованная. 4 года.', callinfo: 'С 9 до 23 по МСК,  день - любой', date: 'объявление размещено 6 апреля 2021 года, 0:43', image1: cat1, image2: cat2, image3: cat3 },
            { cost: 20000, name: 'Диплом', location: 'м. Беговая', image1: diplom1, image2: diplom2, image3: diplom3 , category:'Сумки'},
            { cost: 20000, name: 'Диплом', location: 'м. Беговая', image1: diplom1, image2: diplom2, image3: diplom3  , category:'Вода'},
            { cost: 20000, name: 'Диплом', location: 'м. Беговая', image1: diplom1, image2: diplom2, image3: diplom3  , category:'Сумки'},
            { cost: 20000, name: 'Диплом', location: 'м. Беговая', image1: diplom1, image2: diplom2, image3: diplom3  , category:'Животные'},
            { cost: 20000, name: 'Диплом', location: 'м. Беговая', image1: diplom1, image2: diplom2, image3: diplom3  , category:'Сумки'},
            { cost: 20000, name: 'Диплом', location: 'м. Беговая', image1: diplom1, image2: diplom2, image3: diplom3  , category:'Сумки'},
            { cost: 20000, name: 'Диплом', location: 'м. Беговая', image1: diplom1, image2: diplom2, image3: diplom3  , category:'Сумки'},
        ],

        ownerData: [
            { avatar: ' ', name: 'Андрей Афанасьев', telephone: '8-800-555-35-35' }
        ],

        footerData: [
            { icon: facebook__icon },
            { icon: instagram__icon },
            { icon: twitter__icon },
            { icon: vk__icon }
        ],

        headerData: {
            searchData:[
            { text: 'dsdasd' }],
            newSearchData: '',
            },
        categoryData:[
            {category: 'Вода'},
            {category: 'Животные'},
            {category: 'Сумки'},
            {category: 'Проездные'},
            {category: 'Хлопушки'}
        ]
    },

    _subscribe(observer) {
        rerenderEntireTree = observer;
        debugger;
    },

dispatch(action) {
        if (action.type === 'ADD-SEARCH') {
            let newSearch = {
                text: this.state.headerData.newSearchData
            }
            this.state.headerData.searchData.push(newSearch);
            this.state.headerData.newSearchData = '';
            console.log(this.state.headerData.searchData);
            rerenderEntireTree(store.state);

        }
        if (action.type === 'ADD-UPDATE-SEARCH') {
            this.state.headerData.newSearchData = action.newText;
            debugger;
            rerenderEntireTree(store.state);

        }
    }
}

export default store;