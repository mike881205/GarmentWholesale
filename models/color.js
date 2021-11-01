module.exports = function(sequelize, DataTypes) {
    var Color = sequelize.define("Color", {
        color: {
            type: DataTypes.STRING,            
            allowNull: false
        },
        hexCode: {
            type: DataTypes.STRING,            
            allowNull: false
        },
        img: {
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

    Color.associate = models => {
        Color.belongsTo(models.Brand, {
            foreignKey: {
                allowNull: false
            }
        });
        Color.belongsTo(models.Style, {
            foreignKey: {
                allowNull: false
            }
        });
        Color.hasMany(models.Size, {
            onDelete: "cascade"
        });
    };

    return Color;
};