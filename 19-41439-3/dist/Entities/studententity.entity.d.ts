import { AdminEntity } from "./adminentity.entity";
export declare class StudentEntity {
    id: number;
    StudentName: string;
    StudentEmail: string;
    InstituteName: string;
    Address: string;
    PhoneNumber: string;
    Username: string;
    password: string;
    admin: AdminEntity;
}
