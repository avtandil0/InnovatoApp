import { IAddress } from "./address";
import { ICompany } from "./company";

export interface IUser{
    email: string;
    id: number;
    name : string;
    phone: string;
    username: string;
    website: string;
    address: IAddress;
    company: ICompany;
}