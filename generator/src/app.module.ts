import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import { ReportsModule } from './reports/reports.module';
import { Report } from './reports/reports.model';

@Module({
  controllers: [],
  providers: [],
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'generation-service',
      models: [Report],
      autoLoadModels: true,
    }),
    ReportsModule,
  ],
})
export class AppModule {}
