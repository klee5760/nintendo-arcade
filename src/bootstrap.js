nodule.exports = async () => {

    const Tweet = require("./models/Tweet");
    const User = require("./models/User");

    User.hasMany(Tweet, {as: "Tweets", foreginKey: 'userId '});
    Tweet.belongsTo(User, { as: "User", foreignKey: "userId" });



    const errHandler = (err) =>
    console.error("Error: ", err);

    const user = await User.create({ 
        username: "sevenout", 
        password: "sevencard" 
    }).catch(errHandler);

    const tweet = await Tweet.create({ 
        content: 'This is actually the tweet content Tweeted from Iphone', 
        userId: user.id
 }).catch(errHandler);

const users = await User.findAll({ 
    where: { username: 'sevenout'}, 
    include: [ { model: Tweet, as: "Tweets"} ] 
}).catch(errHandler);

console.log("KevinAMC Tweets: ", users);

};