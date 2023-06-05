import { Model, DataTypes, Sequelize, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey } from 'sequelize';
import User from './User'

class ScholarshipInfo extends Model<InferAttributes<ScholarshipInfo>, InferCreationAttributes<ScholarshipInfo>> {
  declare id: CreationOptional<number>;
  declare level: string;
  declare kind: string;
  declare period: number;
  declare user_id: ForeignKey<User['id']>;
}

export const setupScholarshipInfo = (sequelize: Sequelize) => {
  ScholarshipInfo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      level: DataTypes.STRING,
      kind: DataTypes.STRING,
      period: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: 'ScholarshipInfo',
    }
  );
  ScholarshipInfo.belongsTo(User, { foreignKey: 'user_id' });

  return ScholarshipInfo;
};

export default ScholarshipInfo;
