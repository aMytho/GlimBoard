import { Button } from "../board/button/button";

export let buttons: Button[] = [
    {
        id: "0",
        name: "Command: Shoutout",
        img: null,
        dimensions: {
            height: 5,
            width: 5,
            positionX: 1,
            positionY: 2
        },
        instructions: [
            {
                action: "sendMessage",
                data: {
                    message: {
                        message: "a"
                    }
                }
            }
        ],
        x: 1,
        y: 1,
        w: 5,
        h: 5
    },
    {
        id: "1",
        name: "Message: Send Hype",
        img: null,
        instructions: [
            {
                action: "sendMessage",
                data: {
                    message: {
                        message: "a"
                    }
                }
            }
        ],
        dimensions: {
            height: 5,
            width: 5,
            positionX: 1,
            positionY: 2
        },
        x: 1,
        y: 1,
        w: 5,
        h: 5
    },
    {
        id: "2",
        name: "Command: Confetti",
        img: null,
        instructions: [
            {
                action: "sendMessage",
                data: {
                    message: {
                        message: "a"
                    }
                }
            }
        ],
        dimensions: {
            height: 5,
            width: 5,
            positionX: 1,
            positionY: 2
        },
        x: 1,
        y: 1,
        w: 5,
        h: 5
    },
    {
        id: "3",
        name: "Media: Yeet",
        img: null,
        instructions: [
            {
                action: "sendMessage",
                data: {
                    message: {
                        message: "a"
                    }
                }
            }
        ],
        dimensions: {
            height: 5,
            width: 5,
            positionX: 1,
            positionY: 2
        },
        x: 1,
        y: 1,
        w: 5,
        h: 5
    }
]