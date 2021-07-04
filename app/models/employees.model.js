module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employees", {
        status: { //status = 1
            type: Sequelize.INTEGER
        },
        date: {
            type: Sequelize.DATE
        },
        timestamp: {
            type: Sequelize.DATE
        },
        worked: {
            type: Sequelize.DATE
        },
        break: {
            type: Sequelize.DATE
        },
        continue: {
            type: Sequelize.DATE
        },
        finished: {
            type: Sequelize.DATE
        },
        userId: {
            type: Sequelize.INTEGER
        }
    });

    return Employee;
};