import classes from "./ads_item.module.css";
import image_description from "../images/images_1/cat1.jpg"
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
const AdsItem = (props)=> {
    const [smShow, setSmShow] = useState(false);
    const nicknameFirstLetter = props.author.split('')[0];
return(
        
                // "content": "Продаю жигуль,абсолютно новый, стоял в гараже",
            // "price": 380000.0,
            // "published": "2021-04-15T12:09:15.477145Z",
            // "author": "admin",
            // "image": "http://127.0.0.1:8001/media/images/01c0431b71aa4c25b99b41aaead705c0.jpg",
            // "phone": "+79215270321",
            // "place": "Лен. область, Авиаторов Балтики 22"

<div className={classes.product}><div className={classes.description}>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
           Телефон
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.phone}</Modal.Body>
      </Modal>
    <div className={classes.header}>{props.title}</div>
    <div className={classes.image__container}>
        <img src={image_description} className={classes.image}></img>
        </div>
    <div className={classes.description__items}>
        <div>
            <div className={classes.description__position}>Местоположение</div>
            <hr></hr>
            <div>{props.place} </div>
          
        </div>
        <div className={classes.description__item}>
            <div className={classes.description__position}>Описание</div>
            <hr></hr>
            <div>{props.content}</div>
               
        </div>
        <div className={classes.description__item}>
            <div className={classes.description__position}>Категория</div>
            <hr></hr>
            <div>{props.category}</div>
          
        </div>
    </div>
    </div>

    <div className={classes.owner}>
        <div className={classes.cost}>Бесплатно</div>
        <div className={classes.owner__telephone} onClick={() => setSmShow(true)}> Показать телефон</div>
        <div className={classes.owner__item}> 
            <div className={classes.owner__name}>
              <div className={classes.username}>{props.author}</div>
              <div className={classes.role}>Продавец</div>
            </div>
          <div className={classes.avatar__container}> <div className={classes.avatar}> {nicknameFirstLetter} </div></div>
            </div>
            <div className={classes.owner__publication}>Объявление размещено в {props.published}</div>
    </div>
    </div>
)
}
export default AdsItem;