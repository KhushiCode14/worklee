import User from "../models/User.js";

const GetSingleClient = async (req, res) => {
  const { id } = req.params;
  const role = User.findOne({ role });
  if (role === "client") {
    try {
      const client = await User.findById(id);
      if (!client) {
        return res.status(404).json({ msg: "Client not found" });
      }
      res.json(client);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Server Error" });
    }
  }
};

export { GetSingleClient };
