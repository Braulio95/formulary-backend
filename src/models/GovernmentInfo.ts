import { Model, DataTypes, Sequelize, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey } from 'sequelize';
import User from './User'

class GovernmentInfo extends Model<InferAttributes<GovernmentInfo>, InferCreationAttributes<GovernmentInfo>> {
  declare id: CreationOptional<number>;
  declare curp: string;
  declare identification_number: string;
  declare user_id: ForeignKey<User['id']>;
}

export const setupGovernmentInfo = (sequelize: Sequelize) => {
  GovernmentInfo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      curp: DataTypes.STRING,
      identification_number: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'GovernmentInfo',
    }
  );
  GovernmentInfo.belongsTo(User, { foreignKey: 'user_id' });
  return GovernmentInfo;
};

export default GovernmentInfo;