module.exports = (sequelize, DataTypes) => {
    const RolePermission = sequelize.define('RolePermission', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      role_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Roles',
          key: 'id',
        },
        allowNull: false,
      },
      permission_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Permissions',
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

    return RolePermission;
  };
