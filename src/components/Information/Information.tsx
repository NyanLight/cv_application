import { CV } from "../../types";
import styles from "./Information.module.css"

export function Information (props: CV) {
    return (
        <div className={styles.information} id="element-to-print">
            <section className={styles.header}>
                <h1>{props.name}</h1>
            </section>
            <div className={styles.wrapper}>
                <section className={styles.contacts}>
                    <h2 className={styles.information__title}>Contacts</h2>
                    <div className={styles.contact}>
                        <img className={styles.contact__icon} src="src/assets/email.svg" alt="" />
                        <div>{props.email}</div>
                    </div>
                    <div className={styles.contact}>
                        <img className={styles.contact__icon} src='src/assets/phone.svg' alt="" />
                        <div>{props.phone}</div>
                    </div>
                </section>
                <section className={styles.main}>
                    <div className={styles.main__education}>
                        <h2 className={styles.information__title}>Education</h2>
                        <div>
                            <div className={styles.education__studyTitle}>{props.studyTitle.toUpperCase()}</div>
                            <div className={styles.education__institution}>
                                <span className={styles.education__schoolName}>{props.schoolName}</span> | <span className={styles.education__endYear}>Graduated in {props.studyEndDate}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.main__experience}>
                        <h2 className={styles.information__title}>Experience</h2>
                        <div>
                            <div className={styles.experience__positionTitle}>{props.positionTitle.toUpperCase()}</div>
                            <div>
                                <span className={styles.experience__companyName}>{props.companyName}</span> | <span className={styles.experience__years}>{props.jobStartDate} - {props.jobEndDate}</span>
                            </div>
                            <div className={styles.experience__responsibilities}>{props.responsibilities}</div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}