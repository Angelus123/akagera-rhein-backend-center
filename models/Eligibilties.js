module.exports = (sequelize, DataTypes) => {

    const Eligibilties = sequelize.define("Eligibilties", {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        DiplomaOrCert: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        university: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        universityOneYear: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bachelorDegree: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        masterDegree: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        germanLangCert: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        GermLangLevel: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        foreignLang: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        interLangCert: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        didInternship: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        beenVolunteer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        workExperience: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        workingNow: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    
    
    return Eligibilties;

}

