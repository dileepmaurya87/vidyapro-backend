module.exports = (sequelize, DataTypes) => {
    const School = sequelize.define('School', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    });

    return School;
  };
