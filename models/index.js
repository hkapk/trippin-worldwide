const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Location = require('./Location');
const Activity = require('./Activity');
const Cuisine = require('./Cuisine');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Location.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

Post.hasMany(Location, {
    foreignKey: 'post_id'
});

Activity.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

Post.hasMany(Activity, {
    foreignKey: 'post_id'
});

Cuisine.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

Post.hasMany(Cuisine, {
    foreignKey: 'post_id'
});


module.exports = { User, Post, Comment, Location, Activity, Cuisine }