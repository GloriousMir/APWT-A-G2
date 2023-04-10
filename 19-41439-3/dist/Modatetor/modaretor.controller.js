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
exports.ModaretorController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const modaretor_dto_1 = require("./modaretor.dto");
const moderator_service_1 = require("./moderator.service");
let ModaretorController = class ModaretorController {
    constructor(modaretorService) {
        this.modaretorService = modaretorService;
    }
    signup(mydto, file) {
        mydto.filename = file.filename;
        return this.modaretorService.signup(mydto);
    }
    signin(session, mydto) {
        if (session.email = mydto.email) {
            console.log(session.email);
            return { message: "Login success" };
        }
        else {
            return { message: "Invalid Credentials........Try again" };
        }
    }
};
__decorate([
    (0, common_1.Post)('/signup'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('ProfilePic', { storage: (0, multer_1.diskStorage)({
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
    __metadata("design:paramtypes", [modaretor_dto_1.ModaretorDto, Object]),
    __metadata("design:returntype", void 0)
], ModaretorController.prototype, "signup", null);
__decorate([
    (0, common_1.Get)('/signin'),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, modaretor_dto_1.ModaretorDto]),
    __metadata("design:returntype", void 0)
], ModaretorController.prototype, "signin", null);
ModaretorController = __decorate([
    (0, common_1.Controller)('modaretor'),
    __metadata("design:paramtypes", [moderator_service_1.ModeratorService])
], ModaretorController);
exports.ModaretorController = ModaretorController;
//# sourceMappingURL=modaretor.controller.js.map