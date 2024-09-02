import { ReportsService } from './reports.service';
import { DataReportDto } from './dto/dataReportDto.dto';
export declare class ReportsController {
    private reportsService;
    constructor(reportsService: ReportsService);
    create(dataReportDto: DataReportDto): Promise<number>;
    getById(id: string): Promise<string | {
        status: string;
        url: string;
    }>;
}
