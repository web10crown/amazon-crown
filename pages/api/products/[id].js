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

			if (!data) {
				// Product not found
				res.status(404).json({ error: "Product not found" });
				return;
			}

			// Product found, send data
			res.status(200).json(data);
		} catch (err) {
			// Handle errors
			console.error(err);
			res.status(500).json({ error: "Internal Server Error" });
		}
	}
}
