import { Model, DataTypes, Sequelize, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey } from 'sequelize';
import User from './User'

class AcademicInfo extends Model<InferAttributes<AcademicInfo>, InferCreationAttributes<AcademicInfo>> {
  declare id: CreationOptional<number>;
  declare software_devel_comments: string;
  declare degree_level: string;
  declare informal_education: string;
  declare other_education: string;
  declare user_id: ForeignKey<User['id']>;
}

export const setupAcademicInfo = (sequelize: Sequelize) => {
  AcademicInfo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      software_devel_comments: DataTypes.STRING,
      degree_level: DataTypes.STRING,
      informal_education: DataTypes.STRING,
      other_education: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'AcademicInfo',
    }
  );
  AcademicInfo.belongsTo(User, { foreignKey: 'user_id' });

  return AcademicInfo;
};

export default AcademicInfo;
