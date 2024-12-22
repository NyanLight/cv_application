import { Input } from "../../ui/Input/Input";
import { Textarea } from "../../ui/Textarea/Textarea";
import { cvProps } from "../../types";

export function Form (props: cvProps) {
    return (
        <form action="">
            <section>
                <h3>Contact information</h3>
                <Input key='name' label="Name" inputType="text" handler={props.handler}></Input>
                <Input key='email' label="Email" inputType="email" handler={props.handler}></Input>
                <Input key='phone' label="Phone" inputType="tel" handler={props.handler}></Input>
            </section>
            <section>
                <h3>Education information</h3>
                <Input key='schoolName' label="School name" inputType="text" handler={props.handler}></Input>
                <Input key='studyTitle' label="Title of study" inputType="text" handler={props.handler}></Input>
                <Input key='studyEndDate' label="Graduation date" inputType="date" handler={props.handler}></Input>
            </section>
            <section>
                <h3>Practical experience</h3>
                <Input key='companyName' label="Company name" inputType="text"  handler={props.handler}></Input>
                <Input key='positionTitle' label="Position title" inputType="text" handler={props.handler}></Input>
                <Textarea key='responsibilities' label="Main responsibilities" handler={props.handler}></Textarea>
                <Input key='jobStartDate' label="Start date" inputType="date" handler={props.handler}></Input>
                <Input key='jobEndDate' label="End date" inputType="date" handler={props.handler}></Input>
            </section>
        </form>
    )

}