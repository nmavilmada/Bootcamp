module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    // this is mostly boiler plate code
    // title,body and categorty are the columns in the table
   title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2,100]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Personal"
    }
  });
  return Post;
};

