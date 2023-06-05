import { Model, DataTypes, Sequelize, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey } from 'sequelize';
import User from './User'

class BankAccountInfo extends Model<InferAttributes<BankAccountInfo>, InferCreationAttributes<BankAccountInfo>> {
  declare id: CreationOptional<number>;
  declare acc_number: number;
  declare clabe: number;
  declare bank: string;
  declare user_id: ForeignKey<User['id']>;
}

export const setupBankAccountInfo = (sequelize: Sequelize) => {
  BankAccountInfo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      acc_number: DataTypes.STRING,
      clabe: DataTypes.STRING,
      bank: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'BankAccountInfo',
    }
  );
  BankAccountInfo.belongsTo(User, { foreignKey: 'user_id' });

  return BankAccountInfo;
};

export default BankAccountInfo;
