import { IUser } from "./user";

export interface IOrchid {
    make: string,
    model: string,
    name: string,
    imageUrl: string,
    orchidsImages: Array<IObject | any>,
    description: string,
    _id: string,
    owner: IUser,
    addedBy: IUser[],
    isUrl: boolean,
}
interface IObject {
    imageUrl: string, 
    imageId: string
}