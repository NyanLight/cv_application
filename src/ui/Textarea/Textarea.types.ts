import {FormEventHandler } from "react";

export type TextareaProps = {
    label: string,
    value: string,
    handler: FormEventHandler<HTMLTextAreaElement>
}