const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Location = require('./Location');
const CountryCode = require('./CountryCode');
const Activity = require('./Activity');
const Cuisine = require('./Cuisine');
const PostLocation = require('./PostLocation');
const PostActivity = require('./PostActivity');
const PostCuisine = require('./PostCuisine');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

Post.belongsToMany(Location, {
    through: PostLocation,
    as: 'locations',
    foreignKey: 'post_id'
});

Location.belongsToMany(Post, {
    through: PostLocation,
    as: 'posts',
    foreignKey: 'location_id'
});

Post.belongsToMany(CountryCode, {
    through: PostCountryCode,
    as: 'codes',
    foreignKey: 'post_id'
});

CountryCode.belongsToMany(Post, {
    through: PostCountryCode,
    as: 'posts',
    foreignKey: 'country_code_id'
});

Post.belongsToMany(Activity, {
    through: PostActivity,
    as: 'activities',
    foreignKey: 'post_id'
});

Activity.belongsToMany(Post, {
    through: PostActivity,
    as: 'posts',
    foreignKey: 'activity_id'
});

Post.belongsToMany(Cuisine, {
    through: PostCuisine,
    as: 'cuisine',
    foreignKey: 'post_id'
});

Cuisine.belongsToMany(Post, {
    through: PostCuisine,
    as: 'posts',
    foreignKey: 'cuisine_id'
});

module.exports = {
    User,
    Post,
    Comment,
    Location,
    CountryCode,
    Activity,
    Cuisine,
    PostLocation,
    PostActivity,
    PostCuisine
};