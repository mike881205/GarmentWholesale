module.exports = function (sequelize, DataTypes) {
    var Stock = sequelize.define("Stock", {
        qty: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        freezeTableName: true
    }
    );

    Stock.associate = models => {
        Stock.belongsTo(models.Size, {
            foreignKey: {
                allowNull: false
            }
        });
        Stock.belongsTo(models.Warehouse, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Stock;
};