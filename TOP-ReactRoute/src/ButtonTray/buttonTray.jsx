import styles from "./buttonTray.module.css"
import Button from "../Button/button";

export default function ButtonTray({ direction })
{
    let trayDirection = direction === "row" ? styles.row : 
                        direction === "rowReverse" ? styles.rowReverse : 
                        styles.column;



    
    return (
        <div className={trayDirection}>

            
            <Button text="Button 1"/>
            <Button text="Button 2"/>
        </div>
    )
}