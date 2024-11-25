module.exports = (sequelize, DataTypes) => {
    const PlanDiscount = sequelize.define('PlanDiscount', {
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
      discount_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      discount_value: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      start_date: {
        type: DataTypes.DATE,
      },
      end_date: {
        type: DataTypes.DATE,
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

    return PlanDiscount;
  };
