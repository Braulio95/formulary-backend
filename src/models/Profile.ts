import { Model, DataTypes, Sequelize, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey } from 'sequelize';
import User from './User'

class Profile extends Model<InferAttributes<Profile>, InferCreationAttributes<Profile>> {
  declare id: CreationOptional<number>;
  declare phone: string;
  declare country_code: string;
  declare email: string;
  declare alt_email: string;
  declare reference: string;
  declare other_reference: string;
  declare user_id: ForeignKey<User['id']>;
}

export const setupProfile = (sequelize: Sequelize) => {
  Profile.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      phone: DataTypes.STRING,
      country_code: DataTypes.STRING,
      email: DataTypes.STRING,
      alt_email: DataTypes.STRING,
      reference: DataTypes.STRING,
      other_reference: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Profile',
    }
  );
  Profile.belongsTo(User, { foreignKey: 'user_id' });
  return Profile;
};

export default Profile;
