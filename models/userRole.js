module.exports = (sequelize, DataTypes) => {
    const UserRole = sequelize.define('UserRole', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        allowNull: false,
      },
      role_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Roles',
          key: 'id',
        },
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });

    return UserRole;
  };
