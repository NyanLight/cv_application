import styles from './Input.module.css';
import { InputProps } from './Input.types';

export function Input({label, inputType, name, value, handler}: InputProps) {
    return (
        <label className={styles.label}>{label}:
        <input name={name} value={value} className={styles.input} type={inputType} onInput={(handler)} />
        </label>
    )
} 