import classes from "./icons.module.css";

const Icons = (props) =>{
return(
<div >
   <a href='#'><img src=  {props.icon} className = {classes.icons__item}/></a>
</div>
)
}
export default Icons;