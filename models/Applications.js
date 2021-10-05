module.exports = (sequelize, DataTypes) => {

    const Applications = sequelize.define("Applications", {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        sec_schoolName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        sec_subject: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        sec_year: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        sec_location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        sec_diploma: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        other_sec_schoolName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        other_sec_subject: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        other_sec_year: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        other_sec_location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        other_sec_diploma: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        un_schoolName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        un_faculty: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        un_year: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        un_location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        un_degree: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        other_un_schoolName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        other_un_faculty: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        other_un_year: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        other_un_location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        other_un_degree: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        workingcompanyName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        workinglocation: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        workingposition: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        workingduration: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        other_workingcompanyName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        other_workinglocation: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        other_workingposition: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        other_workingduration: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        inter_companyName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        inter_location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        inter_position: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        inter_duration: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        other_inter_companyName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        other_inter_location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        other_inter_position: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        other_inter_duration: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        volunt_companyName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        volunt_location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        volunt_position: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        volunt_duration: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        other_volunt_companyName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        other_volunt_location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        other_volunt_position: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        other_volunt_duration: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });


    return Applications;

}

