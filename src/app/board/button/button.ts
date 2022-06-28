export class Button {
    public id!: number;
    public name!: string;
    public img?: any;
    public action!: "runCommand" | "runMedia" | "sendMessage";
    public dimensions!: {width: number, height: number};
    public data!: ButtonAction
    constructor() {}
}

export type ButtonAction = {
    command?: {
        name: string;
        trigger: string;
        context: any;
    };
    media?: {
        name: string;
        type: string;
    };
    message?: {
        message: string;
    }
}