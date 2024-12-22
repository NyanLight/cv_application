import {FormEventHandler } from "react";

type inputTypes = 'date' | 'email' | 'tel' | 'text'; 

export type InputProps = {
    label: string;
    name: string;
    value: string;
    inputType: inputTypes;
    handler: FormEventHandler<HTMLInputElement>; 
}