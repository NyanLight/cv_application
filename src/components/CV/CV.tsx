import { ChangeEvent, useState } from "react" 
import { defaultCV } from "./const";
import { Button } from "../../ui/Button/Button";
import { Information } from "../Information/Information";
import { Form } from "../Form/Form";

export function CV () {
    const [status, setStatus] = useState('editing');
    const [info, setInfo] = useState(defaultCV);

    
    const buttonHandler = () =>  status === 'editing' ? setStatus('show') :  setStatus('editing');
    
    function inputHandler (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
        const newValue: string | Date  = e.target.value;
        const key: string = e.target.name;
        setInfo({...info, [key]: newValue })
    }

    return (
        <>
        <h1>CV Application</h1>
        {status === 'editing' ? <Form {...info} handler={inputHandler} /> : <Information {...info} /> }
        {status === 'editing' ? <Button text="Submit" handler={buttonHandler} /> : <Button text="Edit" handler={buttonHandler} />}
        </>
    )
}