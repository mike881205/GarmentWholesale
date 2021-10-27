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
        Stock.belongsTo(models.Size, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Stock;
};