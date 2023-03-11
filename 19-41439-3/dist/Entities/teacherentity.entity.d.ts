import { AdminEntity } from "./adminentity.entity";
export declare class TeacherEntity {
    id: number;
    TeacherName: string;
    TeacherEmail: string;
    InstituteName: string;
    Address: string;
    PhoneNumber: string;
    Username: string;
    password: string;
    admin: AdminEntity;
}
