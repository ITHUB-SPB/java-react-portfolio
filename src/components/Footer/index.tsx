import reactIcon from '../../assets/react.svg'
import classes from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <nav>
                <img src={reactIcon} alt="" />
                <img src={reactIcon} alt="" />
                <img src={reactIcon} alt="" />
                <img src={reactIcon} alt="" />
            </nav>
            <p className={classes.copyright}>Copyright ...</p>
        </footer>
    )
}