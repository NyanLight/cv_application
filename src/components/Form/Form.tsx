import { Input } from "../../ui/Input/Input";
import { Textarea } from "../../ui/Textarea/Textarea";
import { FormProps } from "./Form.types";
import styles from "./Form.module.css"

export function Form (props: FormProps) {
    return (
        <form action="" className={styles.form}>
            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Contact information</h3>
                <Input name="name" value={props.name} label="Name" inputType="text" handler={props.handler} />
                <Input name="email" value={props.email} label="Email" inputType="email" handler={props.handler} />
                <Input name='phone'  value={props.phone} label="Phone" inputType="tel" handler={props.handler} />
            </section>
            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Education information</h3>
                <Input name="schoolName" value={props.schoolName} label="School name" inputType="text" handler={props.handler} />
                <Input name="studyTitle" value={props.studyTitle} label="Title of study" inputType="text" handler={props.handler} />
                <Input name='studyEndDate'  value={props.studyEndDate} label="Graduation date" inputType="date" handler={props.handler} />
            </section>
            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Practical experience</h3>
                <Input name="companyName" value={props.companyName} label="Company name" inputType="text"  handler={props.handler} />
                <Input name="positionTitle" value={props.positionTitle} label="Position title" inputType="text" handler={props.handler} />
                <Textarea name="responsibilities" value={props.responsibilities} label="Main responsibilities" handler={props.handler} />
                <Input name="jobStartDate" value={props.jobStartDate} label="Start date" inputType="date" handler={props.handler} />
                <Input name="jobEndDate" value={props.jobEndDate} label="End date" inputType="date" handler={props.handler} />
            </section>
        </form>
    )

}