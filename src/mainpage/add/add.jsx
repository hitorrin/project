import classes from "./add.module.css";
import { CarouselItem } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { Route } from "react-router";
import { NavLink } from "react-router-dom";
const Add = (props) => {
    debugger;
    return (
        <div className={classes.add}>
           <NavLink to="/product/avtomobil" >
                <a href='#'  className={classes.addLink}>
            <div className={classes.add_imageContainer}>
  
                        <img src='http://217.25.95.58/media/images/01c0431b71aa4c25b99b41aaead705c0.jpg' className={classes.add__imageContainer__image}></img>
     
                {/* <div>{props.location}</div> */}
            </div>
            <div className={classes.info}>
                <div className={classes.add__cost}>{props.price}</div>
                <div className={classes.add__name}>{props.title}</div>
            </div>
            </a>
            </NavLink>
        </div>
        
    )
}
export default Add;