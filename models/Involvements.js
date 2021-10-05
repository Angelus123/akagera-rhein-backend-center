module.exports = (sequelize, DataTypes) => {

    const Involvements = sequelize.define("Involvements", {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
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
        nationality: {
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
        },
        platform: {
            type: DataTypes.STRING,
            allowNull: true,
        }

    });

    return Involvements;

}