module.exports = (sequelize, DataTypes) => {

    const Uploadings = sequelize.define("Uploadings", {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        passport: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        high_skl_cert: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        transcript: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        dregrew_cert: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        degree_cert: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        complete_cv: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        germanLangCert: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        otherLangSkl: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        motivation_letter: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: true,
        }

    });


    return Uploadings;

}

