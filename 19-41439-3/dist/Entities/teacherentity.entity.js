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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherEntity = void 0;
const typeorm_1 = require("typeorm");
const adminentity_entity_1 = require("./adminentity.entity");
const modentity_entity_1 = require("./modentity.entity");
let TeacherEntity = class TeacherEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TeacherEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TeacherEntity.prototype, "TeacherName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TeacherEntity.prototype, "TeacherEmail", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TeacherEntity.prototype, "InstituteName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TeacherEntity.prototype, "Address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TeacherEntity.prototype, "PhoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TeacherEntity.prototype, "Username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TeacherEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => adminentity_entity_1.AdminEntity, (admin) => admin.teachers),
    __metadata("design:type", adminentity_entity_1.AdminEntity)
], TeacherEntity.prototype, "admin", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => modentity_entity_1.ModEntity, (mod) => mod.teachers),
    __metadata("design:type", modentity_entity_1.ModEntity)
], TeacherEntity.prototype, "mod", void 0);
TeacherEntity = __decorate([
    (0, typeorm_1.Entity)('teacher')
], TeacherEntity);
exports.TeacherEntity = TeacherEntity;
//# sourceMappingURL=teacherentity.entity.js.map