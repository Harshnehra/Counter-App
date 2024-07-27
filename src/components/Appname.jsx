import Styles from "./Appname.module.css"

function Heading(){

    return <h1 className={`${Styles["main-heading"]}`}>
        Counter App!
    </h1>
}

export default Heading;