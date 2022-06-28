import { Button } from "./button/button";

export interface Board {
    id: number;
    name: string;
    description: string;
    buttons: Button[];
}