module.exports = (sequelize, Sequelize) => {

    const Maps = sequelize.define('Maps', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING
        },
        filePath: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    
    return Maps;
};
