import { Model, DataTypes, Sequelize, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey } from 'sequelize';
import User from './User'

class FormalEducationInfo extends Model<InferAttributes<FormalEducationInfo>, InferCreationAttributes<FormalEducationInfo>> {
  declare id: CreationOptional<number>;
  declare university_name: string;
  declare state: string;
  declare country: string;
  declare career_name: string;
  declare classes_completed: boolean;
  declare proof_classes_completed: string;
  declare license_completed: boolean;
  declare proof_license_completed: string;
  declare user_id: ForeignKey<User['id']>;
}

export const setupFormalEducationInfo = (sequelize: Sequelize) => {
  FormalEducationInfo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      university_name: DataTypes.STRING,
      state: DataTypes.STRING,
      country: DataTypes.STRING,
      career_name: DataTypes.STRING,
      classes_completed: DataTypes.BOOLEAN,
      proof_classes_completed: DataTypes.STRING,
      license_completed: DataTypes.STRING,
      proof_license_completed: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'FormalEducationInfo',
    }
  );
  FormalEducationInfo.belongsTo(User, { foreignKey: 'user_id' });

  return FormalEducationInfo;
};

export default FormalEducationInfo;
