import { Button } from "../board/button/button";

export let buttons: Button[] = [
    {
        id: 0,
        name: "Command: Shoutout",
        img: null,
        dimensions: {
            height: 100,
            width: 100
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
        ]
    },
    {
        id: 1,
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
            height: 100,
            width: 100
        }
    },
    {
        id: 2,
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
            height: 100,
            width: 100
        }
    },
    {
        id: 3,
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
            height: 100,
            width: 100
        }
    }
]