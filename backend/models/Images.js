module.exports = (sequelize, Sequelize) => {

    const Images = sequelize.define('Images', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Images;
};