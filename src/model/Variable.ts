import { VariableType } from "./VariableType";

export class Variable {

    constructor(private name: string, private type: VariableType) {}

    /**
     * Returns the name of the variable
     */
    public GetName() {
        return this.type;
    }

    /**
     * Returns the type of the variable
     */
    public GetType() {
        return this.type;
    }
}