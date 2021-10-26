module.exports = function(sequelize, DataTypes) {
    var Brand = sequelize.define("Brand", {
        brandName: {
            type: DataTypes.STRING,            
            allowNull: false
        }
    });

    Brand.associate = models => {
        Brand.hasMany(models.Style, {
            onDelete: "cascade"
        });
        Brand.hasMany(models.Color, {
            onDelete: "cascade"
        });
        Brand.hasMany(models.Size, {
            onDelete: "cascade"
        });
    };

    return Brand;
};