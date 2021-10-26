module.exports = function(sequelize, DataTypes) {
    var Style = sequelize.define("Style", {
        styleNum: {
            type: DataTypes.STRING,            
            allowNull: false
        },
        styleName: {
            type: DataTypes.STRING,            
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,            
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,            
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,            
            allowNull: false
        }
    });

    Style.associate = models => {
        Style.belongsTo(models.Brand, {
            foreignKey: {
                allowNull: false
            }
        });
        Style.hasMany(models.Color, {
            onDelete: "cascade"
        });
        Style.hasMany(models.Size, {
            onDelete: "cascade"
        });
    };
    return Style;
};