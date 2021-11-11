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
        gender_age: {
            type: DataTypes.STRING,            
            allowNull: false
        },
        fabric: {
            type: DataTypes.STRING,            
            allowNull: false
        },
        sleeveLength: {
            type: DataTypes.STRING,            
            allowNull: true
        },
        sleeveType: {
            type: DataTypes.STRING,            
            allowNull: true
        },
        neckline: {
            type: DataTypes.STRING,            
            allowNull: true
        },
        fleeceType: {
            type: DataTypes.STRING,            
            allowNull: true
        },
        hatType: {
            type: DataTypes.STRING,            
            allowNull: true
        },
        hatClosure: {
            type: DataTypes.STRING,            
            allowNull: true
        },
        hatStructure: {
            type: DataTypes.STRING,            
            allowNull: true
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