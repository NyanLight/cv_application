type inputTypes = 'date' | 'email' | 'tel' | 'text'; 

export type InputProps = {
    label: string;
    inputType: inputTypes;
    handler: () => void;
}