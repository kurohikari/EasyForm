import { Question } from "./Question";

export class FormPage {

    private questions: Question[];

    constructor(private title: string) {
        this.questions = [];
    }

    /**
     * Get the title of the page
     */
    public GetTitle() {
        return this.title;
    }

    /**
     * Adds a question at the end of a page
     * @param question 
     */
    public AddQuestion(question: Question) {
        this.questions.push(question);
        return true;
    }

    /**
     * Adds a question at the specified index in the page
     * @param question 
     * @param index 
     */
    public AddQuestionAt(question: Question, index: number) {
        let prev = this.questions.slice(0, index);
        let next = this.questions.slice(index);
        prev.push(question);
        prev.concat(next);
        this.questions = prev;
    }

    /**
     * Removes a question from the page at the specified index
     * @param index 
     */
    public RemoveQuestionAt(index: number) {
        if(index < 0 || index >= this.questions.length) return false;
        else if(index === this.questions.length-1) this.questions.pop();
        else if(index === 0) this.questions.shift();
        else {
            let prev = this.questions.slice(0, index);
            let next = this.questions.slice(index+1);
            prev.concat(next);
            this.questions = prev;
        }
        return true;
    }

    /**
     * Get the questions of a page
     */
    public GetQuestions() {
        return this.questions;
    }

}