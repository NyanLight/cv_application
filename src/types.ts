export type cvProps = {
    name: string,
    email: string,
    phone: string,
    schoolName: string,
    studyTitle: string,
    studyEndDate: Date | string,
    companyName: string,
    positionTitle: string,
    responsibilities: string,
    jobStartDate: Date | string,
    jobEndDate: Date | string,
    handler: () => void,
}