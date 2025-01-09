import { ChangeEvent, useState } from "react";
import { defaultCV } from "./const";
import { Button } from "../../ui/Button/Button";
import { Information } from "../Information/Information";
import { Form } from "../Form/Form";
import styles from "./CV.module.css";
import html2pdf from "html2pdf.js";

export function CV() {
  const [status, setStatus] = useState("editing");
  const [info, setInfo] = useState(defaultCV);

  const buttonHandler = () =>
    status === "editing" ? setStatus("show") : setStatus("editing");

  function inputHandler(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) {
    const newValue: string | Date = e.target.value;
    const key: string = e.target.name;
    setInfo({ ...info, [key]: newValue });
  }

  function printHandler() {
    const element = document.getElementById("element-to-print");
    html2pdf(element);
  }

  return (
    <>
      {status === "editing" ? (
        <Form {...info} handler={inputHandler} />
      ) : (
        <Information {...info} />
      )}
      {status === "editing" ? (
        <div className={styles.buttons}>
          {" "}
          <Button text="Submit" handler={buttonHandler} />
        </div>
      ) : (
        <div className={styles.buttons}>
          <Button text="Edit" handler={buttonHandler} />
          <Button text="Print!" handler={printHandler} />
        </div>
      )}
    </>
  );
}
