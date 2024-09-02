import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './dto/reportDto.dto';
import { DataReportDto } from './dto/dataReportDto.dto';

@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Post()
  create(@Body() dataReportDto: DataReportDto) {
    return this.reportsService.createReport(dataReportDto);
  }

  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.reportsService.getReport(id);
  }
}
