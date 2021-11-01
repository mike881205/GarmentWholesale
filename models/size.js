module.exports = function(sequelize, DataTypes) {
    var Size = sequelize.define("Size", {
        size: {
            type: DataTypes.STRING,            
            allowNull: false
        },
        cost: {
            type: DataTypes.DECIMAL(10,2),            
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

    Size.associate = models => {
        Size.belongsTo(models.Brand, {
            foreignKey: {
                allowNull: false
            }
        });
        Size.belongsTo(models.Style, {
            foreignKey: {
                allowNull: false
            }
        });
        Size.belongsTo(models.Color, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Size;
};