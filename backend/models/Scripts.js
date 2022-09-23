module.exports = (sequelize, Sequelize) => {

    const Scripts = sequelize.define('Scripts', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Scripts;
};
