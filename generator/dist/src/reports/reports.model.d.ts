import { Model } from 'sequelize-typescript';
interface ReportCreationAtts {
    customer: string;
    endpoint: string;
    title: string;
    status: string;
    url: string;
}
export declare class Report extends Model<Report, ReportCreationAtts> {
    id: number;
    customer: string;
    endpoint: string;
    title: string[];
    status: string;
    url: string;
}
export {};
