module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users", {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        fullName: {
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
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        updateStatus: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        emailCode: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        verifyEmail: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });

    Users.associate = (models) => {
        Users.hasMany(models.Eligibilties, {
            onDelete: "cascade"
        });
        Users.hasMany(models.Profiles, {
            onDelete: "cascade"
        });
        Users.hasMany(models.Applications, {
            onDelete: "cascade"
        });
        Users.hasMany(models.Involvements, {
            onDelete: "cascade"
        });
        Users.hasMany(models.Uploadings, {
            onDelete: "cascade"
        });
    }

    return Users;

}

