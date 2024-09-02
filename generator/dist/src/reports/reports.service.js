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
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const ExcelJS = require('exceljs');
const fs = require('fs');
const reports_model_1 = require("./reports.model");
let ReportsService = class ReportsService {
    constructor(reportsRepository) {
        this.reportsRepository = reportsRepository;
    }
    async createReport({ customer, endpoint, title }) {
        const report = await this.reportsRepository.create({
            customer,
            endpoint,
            title,
            status: 'in_progress',
        });
        await this.generateExcelReport(report);
        return report.id;
    }
    async generateExcelReport(report) {
        const response = await fetch(`http://localhost:4000${report.endpoint}`, {
            method: 'GET',
            headers: {
                ...report.dataValues.title.toString,
            },
        });
        const data = await response.json();
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet(`${report.dataValues.customer}`);
        const headers = report.dataValues.title.map((title) => ({
            header: title,
            key: title,
        }));
        worksheet.columns = headers;
        data.forEach((row) => {
            worksheet.addRow(row).commit();
        });
        const dir = './files';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        const filePath = `./files/report-${report.customer}-${report.id}.xlsx`;
        await workbook.xlsx.writeFile(filePath);
        report.status = 'completed';
        report.url = filePath;
        report.save();
    }
    async getReport(id) {
        const report = await this.reportsRepository.findOne({ where: { id } });
        if (report.dataValues.status == 'completed') {
            const { status, url } = report.dataValues;
            return { status, url };
        }
        return report.dataValues.status;
    }
};
exports.ReportsService = ReportsService;
exports.ReportsService = ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(reports_model_1.Report)),
    __metadata("design:paramtypes", [Object])
], ReportsService);
//# sourceMappingURL=reports.service.js.map