var mongoose = require('mongoose');
const mongo = process.env.MONGO_URI || 'localhost'
mongoose.connect(mongo, (err) => {
  if (err){
    console.log(err)
  }
  console.log('success connecting to mongo');
})

const db = mongoose.connection;
/////////////////////

const leaderBoardSchema = new mongoose.Schema({
  name: String,
  capital: Number
});

const LeaderBoard = mongoose.model("LeaderBoard", leaderBoardSchema);
////////////////
const save = (playerStats) => {
  return LeaderBoard.findOneAndUpdate(
    {name : playerStats.name},
    {
      name: playerStats.name,
      capital: playerStats.capital
    },
    { upsert: true}
  ).exec()
}

const retrieve = () => {
  return LeaderBoard.find({})
             .sort('-capital')
             .limit(5)
             .exec()
}

module.exports.save = save;
module.exports.retrieve = retrieve;
