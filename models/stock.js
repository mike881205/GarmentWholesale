module.exports = function (sequelize, DataTypes) {
    var Stock = sequelize.define("Stock", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        qty: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
        {
            freezeTableName: true
        }
    );

    Stock.associate = models => {
        Stock.belongsTo(models.Warehouse, {
            foreignKey: {
                allowNull: false
            }
        });
        Stock.hasOne(models.Size, {
            onDelete: "cascade"
        });
    };

    return Stock;
};