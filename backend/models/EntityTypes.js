module.exports = (sequelize, Sequelize) => {

    const EntityTypes = sequelize.define('EntityTypes', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return EntityTypes;
};