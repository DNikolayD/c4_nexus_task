import classes from "./Footer.module.css"

const Footer = ({className}) => {
    return(
        <div className={className}>
        <footer className={classes.main_footer}>
<div className={classes.footer}>

<div className={classes.row}>
<ul>
<li><a href="#">Contact us</a></li>
<li><a href="#">Our Services</a></li>
<li><a href="#">Privacy Policy</a></li>
<li><a href="#">Terms & Conditions</a></li>
<li><a href="#">Career</a></li>
</ul>
</div>

</div>
</footer>
        </div>
    )
}

export default Footer