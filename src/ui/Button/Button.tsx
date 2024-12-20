import styles  from './Button.module.css';
import { ButtonProps } from './Button.types';



export function Button({text, handler}: ButtonProps) {
    return (
        <button className={styles.btn} onClick={handler}>{text}</button>
    )
}