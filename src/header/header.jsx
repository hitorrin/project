import classes from "./header.module.css";
import logo from '../icons/icon.png'
import Dropdown from "react-bootstrap/Dropdown";
import React, { useEffect, useState } from "react";
import Ads from "../mainpage/ads";
import { NavLink } from "react-router-dom";
import Login from "../login/login";
const Header = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
    //  Категории
    let categoryElements = repos.map(
      repos => (
          <Dropdown.Item href="#/action-1" style={{ 'width': '362px' }}>{repos.name}</Dropdown.Item>
        )
      )
  //  Категории старые
  // let categoryElements = props.state.categoryData.map(
  //   categoryData => (
  //     <Dropdown.Item href="#/action-1" style={{ 'width': '362px' }} onClick={() => {setCategory(categoryData.category)}}>{categoryData.category}</Dropdown.Item>
  //   )
  // )


  //  Отслеживает обновление поиска и передает его в state
  // const headerChange = (e) => {
  //   let text = e.target.value;
  //   setValue(e.target.value);
  //   props.dispatch({ type: 'ADD-UPDATE-SEARCH', newText: text });
  // }

  //  Сохраняет запрос в state (я не знаю, надо ли, но пусть будет)
  // let addSearch = () => {
  //   props.dispatch({ type: 'ADD-SEARCH' });
  // }

  // Поиск (самый простой, если нужно будет посложнее - сделаю)
  // const [value, setValue] = useState('');
  // const [category,setCategory] = useState('');
  // const filteredAds = props.state.adsData.filter(adsData => {
    // По названию товара
    // let filterName = adsData.name.toLowerCase().includes(value.toLowerCase());;
    // По категории
    // let filterCategory = adsData.category.toLowerCase().includes(category.toLowerCase());
    // return filterName & filterCategory;
  
  // })
 
  return (
    <header>
      
      <div className={classes.header_gray}></div>
      <div className={classes.header}>
        <div className={classes.logoMenu}>
        <NavLink to="/" > <a href='#'>
            <img src={logo} alt="logo" className={classes.logo} />
          </a></NavLink>
          <div className={classes.menu}>
            <div className={classes.nav}>
              <a href='#' className={classes.nav__item}>Помощь</a>
              <a href='#' className={classes.nav__item}> О нас</a>
              <a href='#' className={classes.nav__item}>Обратная связь</a>
            <Login className={classes.nav__item}/>
              <NavLink to="/registration" ><a href='#' className={classes.nav__item}>Регистрация</a></NavLink>
            </div>
            <div className={classes.publication}>
              <div className={classes.publication__text}>Найдите всё, что ищите!</div>
              <div className={classes.buttonPublication}>
              <NavLink to="/form" ><a href='#' className={classes.buttonPublication__text}> Разместить объявление</a></NavLink>
                </div>
            </div>
          </div>
        </div>



        <div className={classes.search}>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" childBsPrefix={classes.category}>
              Категории
          </Dropdown.Toggle>
            <Dropdown.Menu>
              {categoryElements}
            </Dropdown.Menu>
          </Dropdown>
          <input placeholder='Например, гараж' className={classes.searcher}></input>
          <div className={classes.buttonSearch}><a className={classes.buttonSearch__text}>Найти</a></div>
        </div>
      </div>
      {/* <Ads state={props.state} filteredAds={filteredAds}  ></Ads> */}
    </header>)
}
export default Header;