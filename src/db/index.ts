import { Sequelize } from "sequelize";
import User, { setupUser } from '../models/User';
import PersonalInfo, { setupPersonalInfo } from '../models/PersonalInfo'
import Address, { setupAddress } from "../models/Address";
import AddressExtraInfo, { setupAddressExtraInfo } from "../models/AddressExtraInfo";
import GovernmentInfo, { setupGovernmentInfo } from "../models/GovernmentInfo";
import Profile, { setupProfile } from "../models/Profile";
import AcademicInfo, { setupAcademicInfo } from "../models/AcademicInfo";
import FormalEducationInfo, { setupFormalEducationInfo } from "../models/FormalEducationInfo";
import ScholarshipInfo, { setupScholarshipInfo } from "../models/ScholarshipInfo";
import BankAccountInfo, { setupBankAccountInfo } from "../models/BankAccountInfo";
import Skill, { setupSkill } from "../models/Skill";

let sequelize: Sequelize;

export const startDB = (url: string): Sequelize => {
    sequelize = new Sequelize(url);
    setupUser(sequelize);
    setupPersonalInfo(sequelize);
    setupAddress(sequelize);
    setupAddressExtraInfo(sequelize);
    setupGovernmentInfo(sequelize)
    setupProfile(sequelize);
    setupAcademicInfo(sequelize);
    setupFormalEducationInfo(sequelize);
    setupScholarshipInfo(sequelize);
    setupBankAccountInfo(sequelize);
    setupSkill(sequelize);
    PersonalInfo.belongsTo(User, {
        foreignKey: 'user_id'
    });
    User.hasOne(PersonalInfo, {
        foreignKey: 'user_id'
    });
    Address.belongsTo(User, {
        foreignKey: 'user_id'
    });
    User.hasOne(Address, {
        foreignKey: 'user_id'
    });
    AddressExtraInfo.belongsTo(Address, {
        foreignKey: 'address_id'
    });
    Address.hasOne(AddressExtraInfo, {
        foreignKey: 'address_id'
    });
    GovernmentInfo.belongsTo(User, {
        foreignKey: 'user_id'
    });
    User.hasOne(GovernmentInfo, {
        foreignKey: 'user_id'
    });
    Profile.belongsTo(User, {
        foreignKey: 'user_id'
    });
    User.hasOne(Profile, {
        foreignKey: 'user_id'
    });
    AcademicInfo.belongsTo(User, {
        foreignKey: 'user_id'
    });
    User.hasOne(AcademicInfo, {
        foreignKey: 'user_id'
    });
    FormalEducationInfo.belongsTo(User, {
        foreignKey: 'user_id'
    });
    User.hasOne(FormalEducationInfo, {
        foreignKey: 'user_id'
    });
    ScholarshipInfo.belongsTo(User, {
        foreignKey: 'user_id'
    });
    User.hasOne(ScholarshipInfo, {
        foreignKey: 'user_id'
    });
    BankAccountInfo.belongsTo(User, {
        foreignKey: 'user_id'
    });
    User.hasOne(BankAccountInfo, {
        foreignKey: 'user_id'
    });
    Skill.belongsTo(User, {
        foreignKey: 'user_id'
    });
    User.hasOne(Skill, {
        foreignKey: 'user_id'
    });
    sequelize.authenticate();
    return sequelize
}