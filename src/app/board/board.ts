import { CompactType } from "@katoid/angular-grid-layout/lib/utils/react-grid-layout.utils";
import { Button } from "./button/button";

export interface Board {
    id: number;
    name: string;
    description: string;
    buttons: Button[];
    columns: number,
    rowHeight: number,
    squish: CompactType;
}