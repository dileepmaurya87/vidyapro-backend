module.exports = (sequelize, DataTypes) => {
    const PlanModule = sequelize.define('PlanModule', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      plan_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'SubscriptionPlans',
          key: 'id',
        },
        allowNull: false,
      },
      module_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      module_price: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.00,
      },
      created_by: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        allowNull: true,
      },
      updated_by: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        allowNull: true,
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

    return PlanModule;
  };
