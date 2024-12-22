import { SyntheticEvent } from "react";
import { CV } from "../../types"

export type FormProps =  CV & {handler: (e: SyntheticEvent) => void};
