import { CV } from "../../types";
import styles from "./Information.module.css"

export function Information (props: CV) {
    return (
        <div className={styles.information}>
            <section className={styles.section}>
                <h3 className={styles.title} >Contact information</h3>
                <div className={styles.field}><span className={styles.fieldName}>Name:</span> {props.name}</div>
                <div className={styles.field}><span className={styles.fieldName}>Email:</span> {props.email}</div>
                <div className={styles.field}><span className={styles.fieldName}>Phone:</span> {props.phone}</div>
            </section>
            <section className={styles.section}>
                <h3 className={styles.title}>Education information</h3>
                <div className={styles.field}><span className={styles.fieldName}>School name:</span> {props.schoolName}</div>
                <div className={styles.field}><span className={styles.fieldName}>Title of study:</span> {props.studyTitle}</div>
                <div className={styles.field}><span className={styles.fieldName}>Date of graduation:</span> {props.studyEndDate.toString()}</div>
            </section>
            <section className={styles.section}>
                <h3 className={styles.title}>Practical experience</h3>
                <div className={styles.field}><span className={styles.fieldName}>Company name:</span> {props.companyName}</div>
                <div className={styles.field}><span className={styles.fieldName}>Position title:</span> {props.positionTitle}</div>
                <div className={styles.field}><span className={styles.fieldName}>Main responsibilities:</span> {props.responsibilities}</div>
                <div className={styles.field}><span className={styles.fieldName}>Job start date:</span> {props.jobStartDate.toString()}</div>
                <div className={styles.field}><span className={styles.fieldName}>Job end date:</span> {props.jobEndDate.toString()}</div>
            </section>

        </div>
    )
}