import styles from './Input.module.css';
import { InputProps } from './Input.types';

export function Input({label, inputType, handler}: InputProps) {
    return (
        <label className={styles.label}>{label}:
        <input className={styles.input} type={inputType} onInput={handler} />
        </label>
    )
} 