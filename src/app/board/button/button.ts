export class Button {
    public id!: number;
    public name!: string;
    public img?: any;
    public instructions!: Instruction[];
    public dimensions!: {width: number, height: number};
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

export type Instruction = {
    action: string;
    data: ButtonAction
}