module.exports = function(sequelize, DataTypes) {
    var Style = sequelize.define("Style", {
        styleNum: {
            type: DataTypes.STRING,            
            allowNull: false
        },
        styleName: {
            type: DataTypes.TEXT,            
            allowNull: false
        },
        keyWords: {
            type: DataTypes.TEXT,            
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,            
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