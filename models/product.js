module.exports = function (sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
        productNum: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        qty: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Product.associate = models => {
        Product.belongsTo(models.Warehouse, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Product;
};