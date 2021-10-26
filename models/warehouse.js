module.exports = function(sequelize, DataTypes) {
    var Warehouse = sequelize.define("Warehouse", {
        location: {
            type: DataTypes.STRING,            
            allowNull: false
        }
    });

    Warehouse.associate = models => {
        Warehouse.hasMany(models.Stock, {
            onDelete: "cascade"
        });
    };

    return Warehouse;
};