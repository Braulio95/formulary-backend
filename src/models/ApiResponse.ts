import { Model, DataTypes, Sequelize, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey } from 'sequelize';

class ApiResponse extends Model<InferAttributes<ApiResponse>, InferCreationAttributes<ApiResponse>> {
  declare id: CreationOptional<number>;
  declare code: number;
  declare type: string;
  declare message: string;
}

export const setupApiResponse = (sequelize: Sequelize) => {
  ApiResponse.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      code: DataTypes.INTEGER,
      type: DataTypes.STRING,
      message: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'ApiResponse',
    }
  );

  return ApiResponse;
};

export default ApiResponse;
