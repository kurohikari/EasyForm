import { FormPage } from "./FormPage";
import { Variable } from "./Variable";

export class Form {

    private formPages: FormPage[];
    private variables: Variable[];

    constructor(private title: string) {
        this.formPages = [];
        this.variables = [];
    }

    /**
     * Returns the title of the form
     */
    public GetTitle() {
        return this.title;
    }

    /**
     * Add a variable to the form
     * @param variable 
     */
    public AddVariable(variable: Variable) {
        for(let vari of this.variables) {
            if(vari.GetName() === variable.GetName()) {
                return false;
            }
        }
        this.variables.push(variable);
        return true;
    }

    /**
     * Remove a variable from the form with the given name
     * @param name 
     */
    public RemoveVariableWithName(name: string) {
        let index = -1;
        for(let i=0; i<this.variables.length; i++) {
            let variable = this.variables[i];
            if(variable.GetName() === name) {
                index = i;
                break;
            }
        }
        return this.RemoveVariableAt(index);
    }

    /**
     * Remove a variable from the form at the given index
     * @param index 
     */
    public RemoveVariableAt(index: number) {
        if(index < 0 || index >= this.variables.length) return false;
        else if(index === this.variables.length-1) this.variables.pop();
        else if(index === 0) this.variables.shift();
        else {
            let prev = this.variables.slice(0, index);
            let next = this.variables.slice(index+1);
            prev.concat(next);
            this.variables = prev;
        }
        return true;
    }

    /**
     * Get the variables of the form
     */
    public GetVariables() {
        return this.variables;
    }

    /**
     * Adds a page at the end of the form
     * @param page 
     */
    public AddPage(page: FormPage) {
        this.formPages.push(page);
    }

    /**
     * Adds a page at a specific position of the form
     * @param page 
     * @param index 
     */
    public AddPageAt(page: FormPage, index: number) {
        let prev = this.formPages.slice(0, index);
        let post = this.formPages.slice(index);
        prev.push(page);
        prev.concat(post);
        this.formPages = prev;
    }

    /**
     * Removes a page given its index
     * @param index 
     */
    public RemovePageAt(index: number) {
        if(index < 0 || index >= this.formPages.length) return false;
        else if(index === this.formPages.length-1) this.formPages.pop();
        else if(index === 0) this.formPages.shift();
        else {
            let prev = this.formPages.slice(0, index);
            let next = this.formPages.slice(index+1);
            prev.concat(next);
            this.formPages = prev;
        }
        return true;
    }

    /**
     * Returns the pages of the form
     */
    public GetFormPages() {
        return this.formPages;
    }

}