import { Model, DataTypes, Sequelize, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey } from 'sequelize';
import User from './User'

class PersonalInfo extends Model<InferAttributes<PersonalInfo>, InferCreationAttributes<PersonalInfo>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare last_name: string;
  declare second_lastname: string;
  declare gender: string;
  declare gender_other: string;
  declare date_of_birth: Date;
  declare city_of_birth: string;
  declare state_of_birth: string;
  declare country_of_birth: string;
  declare user_id: ForeignKey<User['id']>;
}

export const setupPersonalInfo = (sequelize: Sequelize) => {
  PersonalInfo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      second_lastname: DataTypes.STRING,
      gender: DataTypes.STRING,
      gender_other: DataTypes.STRING,
      date_of_birth: DataTypes.DATE,
      city_of_birth: DataTypes.STRING,
      state_of_birth: DataTypes.STRING,
      country_of_birth: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'PersonalInfo',
    }
  );
  PersonalInfo.belongsTo(User, { foreignKey: 'user_id' });
  return PersonalInfo;
};

export default PersonalInfo;