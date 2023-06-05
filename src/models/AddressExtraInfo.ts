import { Model, DataTypes, Sequelize, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey } from 'sequelize';
import Address from './Address'

class AddressExtraInfo extends Model<InferAttributes<AddressExtraInfo>, InferCreationAttributes<AddressExtraInfo>> {
  declare id: CreationOptional<number>;
  declare type_of_residency: string;
  declare other_residency: string;
  declare people: string;
  declare address_id: ForeignKey<Address['id']>;
}

export const setupAddressExtraInfo = (sequelize: Sequelize) => {
  AddressExtraInfo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      type_of_residency: DataTypes.STRING,
      other_residency: DataTypes.STRING,
      people: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'AddressExtraInfo',
    }
  );
  AddressExtraInfo.belongsTo(Address, { foreignKey: 'address_id' });
  return AddressExtraInfo;

};

export default AddressExtraInfo;
