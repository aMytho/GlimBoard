export class Button {
    public id!: string;
    public name!: string;
    public img?: any;
    public instructions!: Instruction[];
    public dimensions!: {width: number, height: number, positionX: number, positionY: number};
    public x!: number;
    public y!: number;
    public w!: number;
    public h!: number;
    public editable?: boolean = false;
    constructor() {}
}

export type ButtonAction = {
    commandName?: string;
    commandTrigger?: string;
    commandContext?: any;
    mediaName?: string;
    mediaType?: string;
    message?: string;
}

export type Instruction = {
    action: string;
    data: ButtonAction
}