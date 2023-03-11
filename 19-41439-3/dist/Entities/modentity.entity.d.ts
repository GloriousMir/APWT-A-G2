import { TeacherEntity } from "./teacherentity.entity";
export declare class ModEntity {
    id: number;
    name: string;
    phone: string;
    email: string;
    password: string;
    teachers: TeacherEntity[];
}
