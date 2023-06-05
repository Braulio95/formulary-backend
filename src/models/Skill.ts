import { Model, DataTypes, Sequelize, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey } from 'sequelize';
import User from './User'

class Skill extends Model<InferAttributes<Skill>, InferCreationAttributes<Skill>> {
  declare id: CreationOptional<number>;
  declare preferred_programming_language: string;
  declare experience: string;
  declare disability: string;
  declare user_id: ForeignKey<User['id']>;
}

export const setupSkill = (sequelize: Sequelize) => {
  Skill.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      preferred_programming_language: DataTypes.NUMBER,
      experience: DataTypes.STRING,
      disability: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Skill',
    }
  );
  Skill.belongsTo(User, { foreignKey: 'user_id' });

  return Skill;
};

export default Skill;
