import { IUser } from "./user";

export interface IOrchid {
    make: string,
    type: string,
    name: string,
    imageUrl: string,
    orchidsImages: Array<IObject | any>,
    description: string,
    _id: string,
    owner: string,
    addedBy: string[],
    isUrl: boolean,
}
interface IObject {
    imageUrl: string, 
    imageId: string
}