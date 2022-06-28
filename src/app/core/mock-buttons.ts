import { Button } from "../board/button/button";

export let buttons: Button[] = [
    {
        id: 0,
        name: "Command: Shoutout",
        img: null,
        action: "sendMessage",
        data: {
            message: {
                message: "This is from the glimboard!"
            }
        },
        dimensions: {
            height: 100,
            width: 100
        }
    },
    {
        id: 1,
        name: "Message: Send Hype",
        img: null,
        action: "sendMessage",
        data: {
            message: {
                message: "This is from the glimboard!"
            }
        },
        dimensions: {
            height: 100,
            width: 100
        }
    },
    {
        id: 2,
        name: "Command: Confetti",
        img: null,
        action: "sendMessage",
        data: {
            message: {
                message: "This is from the glimboard!"
            }
        },
        dimensions: {
            height: 100,
            width: 100
        }
    },
    {
        id: 3,
        name: "Media: Yeet",
        img: null,
        action: "sendMessage",
        data: {
            message: {
                message: "This is from the glimboard!"
            }
        },
        dimensions: {
            height: 100,
            width: 100
        }
    }
]