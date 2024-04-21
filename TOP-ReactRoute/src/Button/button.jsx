import styles from "./button.module.css";


export default function Button( { text,})
{

    const buttonText = () => {
        return text || "Default";
    };

    return(
        <div>
            
            <button className={styles.button1}>
 
                {buttonText()}
       
            </button>
            
        </div>
    )
}