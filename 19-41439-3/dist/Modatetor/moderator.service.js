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
exports.ModeratorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const moderator_entity_1 = require("./moderator.entity");
const bcrypt = require("bcrypt");
let ModeratorService = class ModeratorService {
    constructor(ModeratorRepo) {
        this.ModeratorRepo = ModeratorRepo;
    }
    async signup(mydto) {
        const modaccount = new moderator_entity_1.ModaretorEntity();
        modaccount.name = mydto.name;
        modaccount.email = mydto.email;
        modaccount.address = mydto.address;
        modaccount.filename = mydto.filename;
        const salt = await bcrypt.genSalt();
        const hassedpassed = await bcrypt.hash(mydto.password, salt);
        modaccount.password = hassedpassed;
        return this.ModeratorRepo.save(modaccount);
    }
    async signin(mydto) {
        console.log(mydto.password);
        const mydata = await this.ModeratorRepo.findOneBy({ email: mydto.email });
        const isMatch = await bcrypt.compare(mydto.password, mydata.password);
        if (isMatch) {
            return 1;
        }
        else {
            return 0;
        }
    }
};
ModeratorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(moderator_entity_1.ModaretorEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ModeratorService);
exports.ModeratorService = ModeratorService;
//# sourceMappingURL=moderator.service.js.map