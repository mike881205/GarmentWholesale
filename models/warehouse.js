module.exports = function (sequelize, DataTypes) {
    var Warehouse = sequelize.define("Warehouse", {
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip: {
            type: DataTypes.INTEGER,
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
        Warehouse.hasMany(models.Product, {
            onDelete: "cascade"
        });
    };

    return Warehouse;
};