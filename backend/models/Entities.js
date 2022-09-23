module.exports = (sequelize, Sequelize) => {

    const Entities = sequelize.define('Entities', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Entities;
};