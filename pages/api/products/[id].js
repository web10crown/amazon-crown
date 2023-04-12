import dbConnect from "../../../util/mongo";
import products from "../../../models/Products";

export default async function handler(req, res) {
	await dbConnect();
	const {
		method,
		query: { id },
	} = req;

	if (method === "GET") {
		try {
			const data = await products.findById(id);
			res.status(200).json(data);
		} catch (err) {
			console.log(err);
		}
	}
}
