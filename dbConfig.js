const mongoose = require("mongoose");
const createCo = async () => {
  try {
    const dbcon = await mongoose.connect(
      "mongodb+srv://anandhapadmanabhan58:anandhu1231@cluster0.fmpki.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    console.log(dbcon.connection.host);
  } catch (e) {
    console.log(e);
  }
};
module.exports = createCo;
