import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
const ExcelJS = require('exceljs');
const fs = require('fs');
import { Report } from './reports.model';

@Injectable()
export class ReportsService {
  constructor(@InjectModel(Report) private reportsRepository: typeof Report) {}

  async createReport({ customer, endpoint, title }) {
    const report = await this.reportsRepository.create({
      customer,
      endpoint,
      title,
      status: 'in_progress',
    });
    await this.generateExcelReport(report, title);
    return report.id;
  }

  async generateExcelReport(report: Report, title: string[]) {
    const response = await fetch(`http://localhost:4000${report.endpoint}`, {
      method: 'GET',
      headers: {
        ...report.dataValues.title.toString,
      },
    });
    const result = await response.json();
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(`${report.dataValues.customer}`);
    const headers = report.dataValues.title.map((title) => ({
      header: title,
      key: title,
    }));
    worksheet.columns = headers;

    const data = result.map((obj) => {
      const newObject = {};
      title.forEach((key) => {
        if (obj.hasOwnProperty(key)) {
          const valueKey = obj[key];
          newObject[key] = valueKey;
        }
      });
      return newObject;
    });

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

  async getReport(id: string) {
    const report = await this.reportsRepository.findOne({ where: { id } });
    if (report.dataValues.status == 'completed') {
      const { status, url } = report.dataValues;
      return { status, url };
    }
    return report.dataValues.status;
  }
}
