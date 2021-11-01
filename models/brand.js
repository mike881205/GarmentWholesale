module.exports = function(sequelize, DataTypes) {
    var Brand = sequelize.define("Brand", {
        brandName: {
            type: DataTypes.STRING,            
            allowNull: false
        },
        abrv: {
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