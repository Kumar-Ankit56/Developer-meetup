//api/new-meetup
const mongoose = require("mongoose");

//Conntect database with mongoose
mongoose
  .connect(
    "mongodb+srv://Codewave:codewaveatlas@cluster0.7tjzuru.mongodb.net/DevMeetup?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((con) => {
    //console.log(con.connections);
    console.log("Successfull");
  })
  .catch((e) => {
    console.log(e);
  });

//Creating New Schema for Item
const meetupSchema = new mongoose.Schema({
  title: String,
  content: String,
});

async function handler(req, res) {
  if (req.method === "post") {
    const data = req.body;

    //Conntect database with mongoose
    mongoose
      .connect(
        "mongodb+srv://Codewave:codewaveatlas@cluster0.7tjzuru.mongodb.net/DevMeetup?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then((con) => {
        //console.log(con.connections);
        console.log("Successfull");
      })
      .catch((e) => {
        console.log(e);
      });

    //Creating New Schema for Item
    const meetupSchema = new mongoose.Schema({
      title: String,
      img: String,
      address: String,
      description: String,
    });

    const Meetup = mongoose.model("Meetup", meetupSchema);

    const result = await Meetup.insertOne({ data });
    console.log(result);

    res.status(200).json({
      message: "Meetup inserted",
    });
  }
}

export default handler;
