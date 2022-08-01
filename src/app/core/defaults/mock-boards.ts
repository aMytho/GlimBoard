import { Board } from "src/app/board/board";

export let mockBoard: Board = {
    name: "Default Board",
    description: "The default board created",
    id: 0,
    columns: 12,
    rowHeight: 25,
    squish: null,
    buttons: [{
        dimensions: {
            height: 5,
            width: 5,
            positionX: 1,
            positionY: 1
        },
        h: 5,
        w: 5,
        id: "0",
        instructions: [{
            action: "Message",
            data: {
                message: {
                    message: "Hello world from default button!"
                }
            }
        }],
        name: "Default Button",
        x: 1,
        y: 1,
        img: null
    }]
}