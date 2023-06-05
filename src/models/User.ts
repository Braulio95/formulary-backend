import { Model, DataTypes, Sequelize, InferAttributes, InferCreationAttributes, CreationOptional, IntegerDataType } from 'sequelize';


class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare username: string;
  declare firstname: string;
  declare lastname: string;
  declare email: string;
  declare phone: number;
}

export const setupUser = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      username: DataTypes.STRING,
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
};

export default User;