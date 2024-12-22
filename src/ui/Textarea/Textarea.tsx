import { TextareaProps } from "./Textarea.types"

export function Textarea ({label, handler, name}: TextareaProps) {
    return (
        <label >
            {label}: <textarea name={name} onChange={handler} placeholder="You should write something"></textarea>
        </label>
    )
}