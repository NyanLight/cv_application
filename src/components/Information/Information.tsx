import { CV } from "../../types";

export function Information (props: CV) {
    return (
        <div className="information">
            <section>
                <h3>Contact information</h3>
                Name: {props.name}
                Email: {props.email}
                Phone: {props.phone}
            </section>
            <section>
                <h3>Education information</h3>
                School name: {props.schoolName}
                Title of study: {props.studyTitle}
                Date of graduation: {props.studyEndDate.toString()}
            </section>
            <section>
                <h3>Practical experience</h3>
                Company name: {props.companyName}
                Position title: {props.positionTitle}
                Main responsibilities: {props.responsibilities}
                Job start date: {props.jobStartDate.toString()}
                Job end date: {props.jobEndDate.toString()}
            </section>

        </div>
    )
}