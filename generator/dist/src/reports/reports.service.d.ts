import { Report } from './reports.model';
export declare class ReportsService {
    private reportsRepository;
    constructor(reportsRepository: typeof Report);
    createReport({ customer, endpoint, title }: {
        customer: any;
        endpoint: any;
        title: any;
    }): Promise<number>;
    generateExcelReport(report: Report, title: string[]): Promise<void>;
    getReport(id: string): Promise<string | {
        status: string;
        url: string;
    }>;
}
