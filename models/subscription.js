module.exports = (sequelize, DataTypes) => {
    const Subscription = sequelize.define('Subscription', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      durationInMonths: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maxStudents: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });

    return Subscription;
  };
