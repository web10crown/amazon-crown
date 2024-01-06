import dbConnect from "../../../util/mongo";
import products from "../../../models/Products";

const handler = async (req, res) => {
  await dbConnect();
  const {
    method,
    query: { cat, find },
  } = req;

  if (method === "GET") {
    const filterConditions = {};

    if (cat) {
      filterConditions.cat = { $regex: new RegExp(cat, 'i') };
    }

    if (find) {
      filterConditions.$or = [
        { name: { $regex: new RegExp(find, 'i') } },
        { cat: { $regex: new RegExp(find, 'i') } },
        { brand: { $regex: new RegExp(find, 'i') } },
        { desc: { $regex: new RegExp(find, 'i') } },
      ];
    }

    try {
      const data = await products.find(filterConditions);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  if (method === "POST") {
    try {
      const data = await products.create(req.body);
      res.status(201).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};
export default handler;
