module.exports = (sequelize, Sequelize) => {

    const Tags = sequelize.define('Tags', {
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
        },
    });

    return Tags;
};
