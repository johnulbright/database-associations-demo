const User=require('./User')
const Dog=require('./Dog')
const Profile=require('./Profile')
const Group=require('./Group')

User.hasOne(Profile);
Profile.belongsTo(User);

User.hasMany(Dog);
Dog.belongsTo(User);

User.belongsToMany(Dog,{through:'likes',as:"likee"});
Dog.belongsToMany(User,{through:'likes',as:"liker"});

module.exports={
    User,
    Dog,
    Profile,
    Group
}