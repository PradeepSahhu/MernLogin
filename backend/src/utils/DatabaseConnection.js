import mongoose from "mongoose";

const DatabaseConnection = async () => {
  try {
    // here %40 - @  as because mongoose interprate @ as special symbol.
    const ConnectionInstance = await mongoose.connect(
      `mongodb+srv://PradeepSahu:Pradeep%402002@cluster0.vkgne.mongodb.net/wisePayment?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log(`Database Connected!!! ${ConnectionInstance.connection.host}`);
    console.table([ConnectionInstance.connection.host]);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// DatabaseConnection();
export default DatabaseConnection;

// mongodb+srv://PradeepSahu:<db_password>@cluster0.vkgne.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
