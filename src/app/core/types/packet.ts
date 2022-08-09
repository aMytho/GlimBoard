import { Button } from "src/app/board/button/button";

export interface OutgoingPacket {
    action: "runCommand" | "runMedia" | "sendMessage" | "board";
    ID?: number;
    command?: {
        name: string;
        trigger: string;
        context: any;
    };
    media?: string;
    message?: string;
    board?: Button;

    request?: {
        type: "getBoard" | "getBoards"
    }
}