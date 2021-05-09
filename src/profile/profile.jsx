import classes from "./profile.module.css";

const Profile = () =>{
return(
    <div className={classes.main}>
    <div >
        <h2>Ваши товары</h2>
        <div className={classes.add}>
        <p>Рубрика: <a href = "/5/" className={classes.category__link}>Животные</a></p>
        <div className={classes.info}>
        <div className={classes.imageContainer}><img  className={classes.image} src="http://217.25.95.58/media/images/01c0431b71aa4c25b99b41aaead705c0.jpg"/></div>
    
            <div className={classes.add__cost}>10 Р</div>
            <p className={classes.data}>05.05.2021 17:21:55</p>
            <div className={classes.change}>
           <div className={classes.change__buttonContainer}><a href="/update/5" className={classes.change__button}> Изменить</a></div>
           <div className={classes.change__buttonContainer}> <a href="/delete/5" className={classes.change__button}>Удалить</a></div>
            </div>
        </div>
    </div>
    </div>
    
    {/* <div><a href="/accounts/logout/">Выйти</a></div> */}
    </div>
)
}
export default Profile;