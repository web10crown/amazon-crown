import dbConnect from "../../../util/mongo";
import products from "../../../models/Products";

const handler = async (req, res) => {
  await dbConnect();
  const {
    method,
    query: { cat, find },
  } = req;

  if (method === "GET") {
    if (cat) {
      const allData = await products.find({});
      const data = allData.filter((p) => p.cat.toLowerCase().includes(cat));
      res.status(200).json(data);
    } else if (find) {
      const allData = await products.find({});
      const data = allData.filter(
        (d) =>
          d.name.toLowerCase().includes(find) ||
          d.cat.toLowerCase().includes(find) ||
          d.brand.toLowerCase().includes(find) ||
          d.desc.toLowerCase().includes(find)
      );
      res.status(200).json(data);
    } else {
      const data = await products.find({});

      res.status(200).json(data);
    }
  
  }

  if (method === "POST") {
    try {
      const data = await products.create(req.body);
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};
export default handler;
