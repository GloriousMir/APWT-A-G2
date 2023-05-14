"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const studententity_entity_1 = require("../../Entities/studententity.entity");
const typeorm_2 = require("typeorm");
let StudentService = class StudentService {
    constructor(studentRepo) {
        this.studentRepo = studentRepo;
    }
    insertStudent(mydto) {
        return this.studentRepo.save(mydto);
    }
    getAdminByStudentID(id) {
        return this.studentRepo.find({
            where: { id: id },
            relations: {
                admin: true,
            },
        });
    }
    getStudent() {
        return this.studentRepo.find();
    }
    async getStudentByID(id) {
        const data = await this.studentRepo.findOneBy({ id });
        console.log(data);
        if (data !== null) {
            return data;
        }
        else {
            throw new common_1.HttpException('Not Found', common_1.HttpStatus.NOT_FOUND);
        }
    }
    deleteStudentbyid(id) {
        return this.studentRepo.delete(id);
    }
    updateStudentbyid(mydto, id) {
        try {
            return this.studentRepo.update(id, mydto);
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException();
        }
    }
};
StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(studententity_entity_1.StudentEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map