import { Input } from "../../ui/Input/Input";
import { Textarea } from "../../ui/Textarea/Textarea";
import { FormProps } from "./Form.types";

export function Form (props: FormProps) {
    return (
        <form action="">
            <section>
                <h3>Contact information</h3>
                <Input name="name" value={props.name} label="Name" inputType="text" handler={props.handler}></Input>
                <Input name="email" value={props.email} label="Email" inputType="email" handler={props.handler}></Input>
                <Input name='phone'  value={props.phone} label="Phone" inputType="tel" handler={props.handler}></Input>
            </section>
            <section>
                <h3>Education information</h3>
                <Input name="schoolName" value={props.schoolName} label="School name" inputType="text" handler={props.handler}></Input>
                <Input name="studyTitle" value={props.studyTitle} label="Title of study" inputType="text" handler={props.handler}></Input>
                <Input name='studyEndDate'  value={props.studyEndDate} label="Graduation date" inputType="date" handler={props.handler}></Input>
            </section>
            <section>
                <h3>Practical experience</h3>
                <Input name="companyName" value={props.companyName} label="Company name" inputType="text"  handler={props.handler}></Input>
                <Input name="positionTitle" value={props.positionTitle} label="Position title" inputType="text" handler={props.handler}></Input>
                <Textarea value={props.responsibilities} label="Main responsibilities" handler={props.handler}></Textarea>
                <Input name="jobStartDate" value={props.jobStartDate} label="Start date" inputType="date" handler={props.handler}></Input>
                <Input name="jobEndDate" value={props.jobEndDate} label="End date" inputType="date" handler={props.handler}></Input>
            </section>
        </form>
    )

}