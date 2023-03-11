"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const admin_controller_1 = require("../../controller/admin/admin.controller");
const adminentity_entity_1 = require("../../Entities/adminentity.entity");
const modentity_entity_1 = require("../../Entities/modentity.entity");
const studententity_entity_1 = require("../../Entities/studententity.entity");
const teacherentity_entity_1 = require("../../Entities/teacherentity.entity");
const admin_service_1 = require("../../services/admin/admin.service");
const mod_service_1 = require("../../services/mod/mod.service");
const student_service_1 = require("../../services/student/student.service");
const teacher_service_1 = require("../../services/teacher/teacher.service");
let AdminModule = class AdminModule {
};
AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([adminentity_entity_1.AdminEntity, studententity_entity_1.StudentEntity, teacherentity_entity_1.TeacherEntity, modentity_entity_1.ModEntity])],
        controllers: [admin_controller_1.AdminController],
        providers: [admin_service_1.AdminService, student_service_1.StudentService, teacher_service_1.TeacherService, mod_service_1.ModService]
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map