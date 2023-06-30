// autobind decorators
function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjustedDescriptor: PropertyDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjustedDescriptor;
}

// Main Project Class
class Project {
    templateEl: HTMLTemplateElement;
    hostEl: HTMLDivElement;
    formElement: HTMLFormElement;
    titleInput: HTMLInputElement;
    descriptionInput: HTMLInputElement;
    peopleInput: HTMLInputElement;
    submitButton: HTMLButtonElement;

    constructor() {
        this.templateEl = document.getElementById(
            'project-input'
        )! as HTMLTemplateElement;
        this.hostEl = <HTMLDivElement>document.getElementById('app')!;

        const importedNode = document.importNode(this.templateEl.content, true);
        this.formElement = importedNode.firstElementChild as HTMLFormElement;
        this.formElement.id = 'user-input';

        this.titleInput = this.formElement.querySelector(
            '#title'
        )! as HTMLInputElement;

        this.descriptionInput = this.formElement.querySelector(
            '#description'
        )! as HTMLInputElement;

        this.peopleInput = this.formElement.querySelector(
            '#people'
        )! as HTMLInputElement;

        this.submitButton = this.formElement.querySelector(
            'button[type="submit"]'
        )! as HTMLButtonElement;

        this.configureListeners();
        this.attachForm();
    }

    @autobind
    private handleSubmit(evt: Event) {
        evt.preventDefault();
        console.log('title', this.titleInput.value);
    }

    private configureListeners() {
        this.formElement.addEventListener(
            'submit',
            this.handleSubmit.bind(this)
        );
    }

    private attachForm() {
        this.hostEl.insertAdjacentElement('afterbegin', this.formElement);
    }
}

const newProject = new Project();
