export type CanvasState = 
    | {
        mode: CanvasMode.None;
    }


export enum CanvasMode {
    None,
    // Pressing,
    // SelectionNet,
    // Translating,
    // Inserting,
    // Resizing,
    // Pencil,
}