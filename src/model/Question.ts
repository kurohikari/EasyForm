import { Variable } from "./Variable";

export class Question {

    constructor(private required: boolean, private variable: Variable) {}

    /**
     * Returns true if the question is required, false if it is optional
     */
    public IsRequired() {
        return this.required;
    }

    /**
     * Returns the variable for the question
     */
    public GetVariable() {
        return this.variable;
    }

}