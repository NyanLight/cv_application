import { TextareaProps } from "./Textarea.types";
import styles from "./Textarea.module.css";

export function Textarea ({label, handler, name, value}: TextareaProps) {
    return (
        <label className={styles.label} >
            {label}: <textarea value={value} className={styles.textarea} rows={5} name={name} onChange={handler} placeholder="You should write something"></textarea>
        </label>
    )
}