module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        fullname: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        divisi: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.INTEGER
        }
    });

    return User;
};