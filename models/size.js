module.exports = function(sequelize, DataTypes) {
    var Size = sequelize.define("Size", {
        size: {
            type: DataTypes.STRING,            
            allowNull: false
        },
        cost: {
            type: DataTypes.DECIMAL(10,2),            
            allowNull: false
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
        Size.belongsTo(models.Stock, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Size;
};