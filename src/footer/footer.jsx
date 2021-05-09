import classes from "./footer.module.css";
import Icons from "./icons";

const Footer = (props) => {
    let iconElements = props.state.footerData.map(
        footerData  => ( 
            <Icons icon = {footerData.icon}/>
        )
    )
    return (
        <footer className={classes.footer}>
            <div className={classes.content}>
                <div className={classes.icons}>
               {iconElements}
                </div>
                <div className={classes.footer__copyright}>
                    © Петербургие стены, 2021</div>
            </div>
        </footer>
    )
}
export default Footer;
