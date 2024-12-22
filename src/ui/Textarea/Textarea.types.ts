import {FormEventHandler } from "react";

export type TextareaProps = {
    label: string,
    name: string,
    value: string,
    handler: FormEventHandler<HTMLTextAreaElement>
}