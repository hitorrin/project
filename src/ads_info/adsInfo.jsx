import Add from "../mainpage/add/add";
import classes from "./adsInfo.module.css";
import AdsItem from "./ads_item";

const adsInfo = (props) => {
    const { repos } = props;
    if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
    console.log(repos);
    return (
        <div className={classes.main}>
            <div className={classes.category}>Главное - Животные - Кошечка Дуся</div>
            <AdsItem category={repos[1].rubric.name} title={repos[1].title} content={repos[1].content} price={repos[1].price} published={repos[1].published} author={repos[1].author} image={repos[1].image} phone={repos[1].phone} place={repos[1].place}/>
            <div className={classes.textads}>Похожие объявления</div>
            <div   className={classes.add}>
            <Add  price={repos[1].price + '₽'} image={repos[1].image} title={repos[1].title}/>
            </div>
            </div>
            // "content": "Продаю жигуль,абсолютно новый, стоял в гараже",
            // "price": 380000.0,
            // "published": "2021-04-15T12:09:15.477145Z",
            // "author": "admin",
            // "image": "http://127.0.0.1:8001/media/images/01c0431b71aa4c25b99b41aaead705c0.jpg",
            // "phone": "+79215270321",
            // "place": "Лен. область, Авиаторов Балтики 22"
)
}
export default adsInfo;