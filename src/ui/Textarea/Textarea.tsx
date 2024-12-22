import { TextareaProps } from "./Textarea.types"

export function Textarea ({label, handler}: TextareaProps) {
    return (
        <label >
            {label}: <textarea onInput={handler}>Write something!</textarea>
        </label>
    )
}