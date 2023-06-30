class Project {
    templateEl: HTMLTemplateElement;
    hostEl: HTMLDivElement;
    formElement: HTMLFormElement;

    constructor(){
        this.templateEl = document.getElementById("project-input")! as HTMLTemplateElement;
        this.hostEl = <HTMLDivElement>document.getElementById("app")!

        const importedNode = document.importNode(this.templateEl.content, true);
        this.formElement =importedNode.firstElementChild as HTMLFormElement;
        this.attachForm();
    }

    private attachForm() {
        this.hostEl.insertAdjacentElement('afterbegin', this.formElement);
    }
}

const newProject = new Project()