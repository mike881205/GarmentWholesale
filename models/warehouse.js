module.exports = function (sequelize, DataTypes) {
    var Warehouse = sequelize.define("Warehouse", {
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        }
    });

    Warehouse.associate = models => {
        Warehouse.hasMany(models.Stock, {
            onDelete: "cascade"
        });
    };

    return Warehouse;
};