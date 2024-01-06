import dbConnect from "../../../util/mongo";
import products from "../../../models/Products";

const handler = async (req, res) => {
  const dummy = {
    brand:"Pigeon",
    cat: "kitchenware",
    desc: "Pigeon Polypropylene Mini Handy and Compact Chopper with 3 Blades for Effortlessly Chopping Vegetables and Fruits for Your Kitchen Green, 400 m",
    img: "http://res.cloudinary.com/dpxa7serz/image/upload/v1678994759/uploads/jj8cf7zanwbgzwpxlwhq.jpg",
    name: "Compact Chopper",
    price: 199,
    _id: "64136d48b18e8b69a01348d8"
  }
  return res.status(200).json(dummy);
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
