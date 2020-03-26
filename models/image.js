'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;
  class Image extends Model {
    updateScore(newScore) {
      console.log('aaaaaaa');
      this.score = newScore;
    }
  }
  Image.init({
    url: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    score: DataTypes.INTEGER
  },
    {
      sequelize,
      hooks: {
        beforeCreate: (image, option) => {
          image.score = 0;
        }
      }
    })
  Image.associate = function (models) {
    Image.belongsToMany(models.User, { through: models.ImageUser })
  };
  return Image;
};