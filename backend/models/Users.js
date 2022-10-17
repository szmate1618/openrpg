module.exports = (sequelize, Sequelize) => {

    const Users = sequelize.define('Users', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING
        }
    });

    return Users;
};
