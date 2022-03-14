const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections')

// create our post model
class Post extends Model{}

// create fields/columns for Post model
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_url: {
            type: DataTypes.STRING,
            allowNull: false,
            // Sequelize has ability to offer validation in the schema definition. Here we ensure that the url is a verified link by setting the isURL propery to true.
            validate: {
                isURL: true
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            // Using the reference property, we establish the relationship between this post and the user by creating a reference to the User model
            // specifically to the id column that is defined by the key property, which is the primary key. The user_id is conversely defined as the
            // foreign key and will be the matching link.
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
)

module.exports = Post;