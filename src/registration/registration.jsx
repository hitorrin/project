import classes from "./registration.module.css";

const Registration = (props) =>{
return( 
    <div className={classes.main}>
    <h3 className={classes.header}>Создание аккаунта</h3>
    <div className={classes.form}>
    <form action="." method="post">
        <p><label className={classes.formlabel} for="id_username" >Имя пользователя:</label> <input type="text" name="username" className={classes.formcontrol} autofocus required id="id_username"/></p>
<p><label className={classes.formlabel} for="id_first_name">Имя:</label> <input type="text" name="first_name" className={classes.formcontrol} maxlength="32" required id="id_first_name"/></p>
<p><label className={classes.formlabel} for="id_last_name">Фамилия:</label> <input type="text" name="last_name" className={classes.formcontrol} maxlength="32" required id="id_last_name"/></p> 
<p><label className={classes.formlabel} for="id_email">E-mail:</label> <input type="email" name="email" className={classes.formcontrol} maxlength="64" required id="id_email"/> </p>
<p><label className={classes.formlabel} for="id_password1">Пароль:</label> <input type="password" name="password1" className={classes.formcontrol} required id="id_password1"/></p>
<p><label className={classes.formlabel} for="id_password2">Повторите пароль:</label> <input type="password" name="password2" className={classes.formcontrol} required id="id_password2"/> </p>
        <input type="hidden" name="csrfmiddlewaretoken" value="YDjShr8ArMQVpRF7VwprWBJ5M3US06u5CdLzcQmTiTooyP2Zz3Q4TnD9DPaI4arh"></input>
       <div className={classes.buttonContainer}> <p><input type="submit" className={classes.button} value="Создать аккаунт"/></p> </div>
</form>
</div>
</div>
           
)}

export default Registration;