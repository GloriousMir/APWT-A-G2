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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const adminDTO_dto_1 = require("../../DTOs/adminDTO.dto");
const adminUpdate_dto_1 = require("../../DTOs/adminUpdate.dto");
const studentUpdate_dto_1 = require("../../DTOs/studentUpdate.dto");
const teacherUpdate_dto_1 = require("../../DTOs/teacherUpdate.dto");
const studententity_entity_1 = require("../../Entities/studententity.entity");
const teacherentity_entity_1 = require("../../Entities/teacherentity.entity");
const admin_service_1 = require("../../services/admin/admin.service");
const mod_service_1 = require("../../services/mod/mod.service");
const student_service_1 = require("../../services/student/student.service");
const teacher_service_1 = require("../../services/teacher/teacher.service");
const session_guard_1 = require("../../session.guard");
let AdminController = class AdminController {
    constructor(adminService, studentService, teacherService, modService) {
        this.adminService = adminService;
        this.studentService = studentService;
        this.teacherService = teacherService;
        this.modService = modService;
    }
    signup(mydto, file) {
        mydto.filename = file.filename;
        return this.adminService.signup(mydto);
    }
    async signin(session, mydto) {
        const res = await (this.adminService.signin(mydto));
        if (res == true) {
            session.email = mydto.email;
            return (session.email);
        }
        else {
            throw new common_1.UnauthorizedException({ message: "invalid credentials" });
        }
    }
    signout(session) {
        if (session.destroy()) {
            return { message: "you are logged out" };
        }
        else {
            throw new common_1.UnauthorizedException("Invalid Actions.....are you logged in?");
        }
    }
    sendEmail(mydata) {
        return this.adminService.sendEmail(mydata);
    }
    getAdmin() {
        return this.adminService.getAdmin();
    }
    getAdminByID(id) {
        return this.adminService.getAdminByID(id);
    }
    getAdminByName(name) {
        return this.adminService.getAdminByName(name);
    }
    getAdminByIDName(qry) {
        return this.adminService.getAdminByIDName(qry);
    }
    getImages(name, res) {
        res.sendFile(name, { root: "./uploads" });
    }
    updateAdminbyid(mydto, id) {
        return this.adminService.updateUserbyid(mydto, id);
    }
    deleteAdminbyid(id) {
        return this.adminService.deleteUserbyid(id);
    }
    getStudent() {
        return this.studentService.getStudent();
    }
    insertStudent(StudentDto) {
        return this.studentService.insertStudent(StudentDto);
    }
    getStudentByAdminID(id) {
        return this.adminService.getStudentByAdminID(id);
    }
    getStudentByID(id) {
        return this.studentService.getStudentByID(id);
    }
    updateStudentbyid(mydto, id) {
        return this.studentService.updateStudentbyid(mydto, id);
    }
    deleteStudentbyid(id) {
        return this.studentService.deleteStudentbyid(id);
    }
    getAllTeacher() {
        return this.teacherService.getAllTeacher();
    }
    insertTeacher(TeacherDto) {
        return this.teacherService.insertTeacher(TeacherDto);
    }
    updateTeacherbyid(mydto, id) {
        return this.teacherService.updateTeacherbyid(mydto, id);
    }
    getTeacherByModID(id) {
        return this.modService.getTeacherByModID(id);
    }
    getTeachertByID(id) {
        return this.teacherService.getTeachertByID(id);
    }
    deleteTeacherbyid(id) {
        return this.teacherService.deleteTeacherbyid(id);
    }
};
__decorate([
    (0, common_1.Post)('/signup'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('Profile', { storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: function (req, file, cb) {
                cb(null, Date.now() + file.originalname);
            }
        })
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 160000 }),
            new common_1.FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [adminDTO_dto_1.AdminDto, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('/signin'),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, adminDTO_dto_1.AdminDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "signin", null);
__decorate([
    (0, common_1.Get)('/signout'),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "signout", null);
__decorate([
    (0, common_1.Post)('/sendemail'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "sendEmail", null);
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getAdmin", null);
__decorate([
    (0, common_1.Get)('/findadmin/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getAdminByID", null);
__decorate([
    (0, common_1.Get)('/findadminbyname/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getAdminByName", null);
__decorate([
    (0, common_1.Get)('/findadminbynameid'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getAdminByIDName", null);
__decorate([
    (0, common_1.Get)('getimage/:name'),
    __param(0, (0, common_1.Param)('name')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getImages", null);
__decorate([
    (0, common_1.Put)('/updateadmin/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [adminUpdate_dto_1.AdminUpdate, Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "updateAdminbyid", null);
__decorate([
    (0, common_1.Delete)('/deleteadmin/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "deleteAdminbyid", null);
__decorate([
    (0, common_1.Get)('/allstudent'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getStudent", null);
__decorate([
    (0, common_1.Post)('/insertstudent'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [studententity_entity_1.StudentEntity]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "insertStudent", null);
__decorate([
    (0, common_1.Get)('/findstudentbyadmin/:id'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getStudentByAdminID", null);
__decorate([
    (0, common_1.Get)('/findstudent/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getStudentByID", null);
__decorate([
    (0, common_1.Put)('/updatestudent/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [studentUpdate_dto_1.StudentUpdate, Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "updateStudentbyid", null);
__decorate([
    (0, common_1.Delete)('/deletestudent/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "deleteStudentbyid", null);
__decorate([
    (0, common_1.Get)('/allteacher'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getAllTeacher", null);
__decorate([
    (0, common_1.Post)('/insertteacher'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [teacherentity_entity_1.TeacherEntity]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "insertTeacher", null);
__decorate([
    (0, common_1.Put)('/updateteacher/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [teacherUpdate_dto_1.TeacherUpdate, Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "updateTeacherbyid", null);
__decorate([
    (0, common_1.Get)('/findteacherbymod/:id'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getTeacherByModID", null);
__decorate([
    (0, common_1.Get)('/findteacher/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getTeachertByID", null);
__decorate([
    (0, common_1.Delete)('/deleteteacher/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "deleteTeacherbyid", null);
AdminController = __decorate([
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService,
        student_service_1.StudentService,
        teacher_service_1.TeacherService,
        mod_service_1.ModService])
], AdminController);
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map