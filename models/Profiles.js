module.exports = (sequelize, DataTypes) => {

    const Profiles = sequelize.define("Profiles", {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: true,
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthday: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        district: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city_province: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        family_status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        street: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        city_code: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        other_Po_Box: {
            type: DataTypes.STRING,
            allowNull: true,
        }
        
    });
    
    return Profiles;

}