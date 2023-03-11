import { StudentEntity } from "./studententity.entity";
import { TeacherEntity } from "./teacherentity.entity";
export declare class AdminEntity {
    id: number;
    name: string;
    email: string;
    password: string;
    address: string;
    students: StudentEntity[];
    teachers: TeacherEntity[];
}
