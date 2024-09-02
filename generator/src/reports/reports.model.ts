import { Model, Column, Table, DataType } from 'sequelize-typescript';

interface ReportCreationAtts {
  customer: string;
  endpoint: string;
  title: string;
  status: string;
  url: string;
}

@Table({ tableName: 'reports' })
export class Report extends Model<Report, ReportCreationAtts> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  customer: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  endpoint: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
  })
  title: string[];

  @Column({
    type: DataType.STRING,
    defaultValue: 'pending',
  })
  status: string;

  @Column({
    type: DataType.STRING,
  })
  url: string;
}
