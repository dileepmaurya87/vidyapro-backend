module.exports = (sequelize, DataTypes) => {
    const SubscriptionPlan = sequelize.define('SubscriptionPlan', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      plan_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      base_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      billing_cycle: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'quarterly',
      },
      branch_limit: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      user_limit: {
        type: DataTypes.INTEGER,
        defaultValue: 10,
      },
      student_limit: {
        type: DataTypes.INTEGER,
        defaultValue: 100,
      },
      parent_limit: {
        type: DataTypes.INTEGER,
        defaultValue: 100,
      },
      gst_included: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      gst_percentage: {
        type: DataTypes.DECIMAL(5, 2),
        defaultValue: 18.0,
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

    return SubscriptionPlan;
  };
