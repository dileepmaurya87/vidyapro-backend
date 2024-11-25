const { User, Role, Permission } = require('../models');

const authorize = (requiredPermission) => {
  return async (req, res, next) => {
    try {
      const user = await User.findByPk(req.user.id, {
        include: [
          {
            model: Role,
            include: [Permission],
          },
        ],
      });

      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }

      const hasPermission = user.Roles.some((role) =>
        role.Permissions.some((permission) => permission.permission_name === requiredPermission)
      );

      if (!hasPermission) {
        return res.status(403).json({ message: 'Forbidden' });
      }

      next();
    } catch (error) {
      res.status(500).json({ error: 'An error occurred during authorization' });
    }
  };
};

module.exports = authorize;
