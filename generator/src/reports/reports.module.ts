import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { Report } from './reports.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [ReportsController],
  providers: [ReportsService],
  imports: [
    SequelizeModule.forFeature([Report]),
  ]
})
export class ReportsModule {}
