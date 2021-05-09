import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import classes from './login.module.css';
import { NavLink } from "react-router-dom";
const Login =() => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
         <a href='#' className={classes.nav__item} onClick={handleShow}>Вход</a>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Вход </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <article>
            
            
            <form method="post">
                <input type="hidden" name="csrfmiddlewaretoken" value="eMNW1zOWTXVlHZr9JK0HzXe1pMdSH75lSmfDWY2fK4tOQXO1nhrkwJ85gytILb2x"></input>
                <p><label for="id_username" className={classes.formlabel}>Логин</label> <input type="text" name="username" autofocus autocapitalize="none" autocomplete="username" maxlength="50" required id="id_username" className={classes.formcontrol}></input></p>
            <p><label for="id_password" className={classes.formlabel}>Пароль</label> <input type="password" name="password" autocomplete="current-password" required id="id_password" className={classes.formcontrol}></input></p>
                <input type="hidden" name="text" value="" ></input>
                <div className={classes.buttonContainer}><input type="submit" value="Войти" className={classes.button}></input></div>
                <NavLink to="/registration" ><div className={classes.registration}><a href="/accounts/registration/">Ещё не зарегестрированы?</a></div></NavLink>
            </form>
            
            
                    </article>
          </Modal.Body>
        </Modal>
      </>
    );
  }


export default Login;