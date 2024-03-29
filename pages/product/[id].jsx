import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from "@/styles/pages/product.module.css";
import { publicRequest } from "../../request";
import Image from "next/image";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "@/redux/cartSlice";
import Loader from '@/components/Loader';

const Product = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const [product, setProduct] = useState(null);
	const [quantity, setQuantity] = useState(1);
	const [loading, setLoading] = useState(true);

	const addProduct = () => {
		if (product) {
			const { price, _id } = product;
			dispatch(add({ ...product, price, quantity, _id }));
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { id } = router.query;

				const res = await axios.get(`${publicRequest}/api/products/${id}`);
				setProduct(res.data);
				setLoading(false);
			} catch (error) {
				console.error(`Error fetching product with ID ${router.query.id}:`, error);
			}
		};
		fetchData();
	}, [router.query.id]);
	

	return (
		<>
			{loading ? <Loader /> : (
				<div className={styles.container}>
					<h5>{product.cat.toUpperCase() + " >"}</h5>
					<div className={styles.wrapper}>
						<div className={styles.left}>
							<div className={styles.imgContainer}>
								<div className={styles.img}>
									<Image
										src={`${product.img.replace(/^http:/, 'https:')}`}
										alt="image"
										fill
										style={{ objectFit: "contain" }}
										sizes="auto"
										priority={true}
									/>
								</div>
							</div>
						</div>
						<div className={styles.center}>
							<div className={styles.heading}>
								<h2>{product.desc}</h2>
							</div>
							<hr />
							<div className={styles.price}>
								<p style={{ color: "red" }}>Deal of the Day</p>
								<div className={styles.amount}>
									<h4>-26%</h4>
									<h3>₹ {product.price}</h3>
								</div>
								<p>Inclusive of all taxes</p>
								<p>
									<b>EMI</b> starts at ₹
									{Math.round(product.price / 6)} No Cost EMI
									available
								</p>
							</div>
							<hr />
							<div className={styles.details}>
								<div className={styles.dHead}>
									<p>Brand</p>
									<p>Name</p>
									<p>Cat</p>
									<p>Price</p>
									<p>Details</p>
								</div>
								<div className={styles.dDetails}>
									<p>{product.brand}</p>
									<p>{product.name}</p>
									<p>{product.cat}</p>
									<p>{product.price}</p>
									<p>{product.desc.slice(0, 50)}...</p>
								</div>
							</div>
							<div className={styles.amountContainer}>
								<input
									type="number"
									min="1"
									defaultValue="1"
									onChange={(e) => setQuantity(e.target.value)}
								/>
								<button onClick={addProduct}>Add +</button>
							</div>
						</div>
						<div className={styles.right}>
							<h4>No offers available</h4>
						</div>
					</div>
				</div>
			)} 
		</>
	);
};

export default Product;



// ===============================================================================================>
// import styles from "@/styles/pages/product.module.css";
// import { publicRequest } from "../../request";
// import Image from "next/image";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { add } from "@/redux/cartSlice";
// import { useState } from "react";

// const Product = ({ product }) => {
// 	const dispatch = useDispatch();
// 	const [quantity, setQuantity] = useState(1);

// 	const addProduct = () => {
// 		const { price, _id } = product;
// 		dispatch(add({ ...product, price, quantity, _id }));
// 	};
// 	return (
// 		<>
// 			<div className={styles.container}>
// 				<h5>{product.cat.toUpperCase() + " >"}</h5>
// 				<div className={styles.wrapper}>
// 					<div className={styles.left}>
// 						<div className={styles.imgContainer}>
// 							<div className={styles.img}>
// 								<Image
// 									src={`${product.img.replace(/^http:/, 'https:')}`}
// 									alt="image"
// 									fill
// 									style={{ objectFit: "contain" }}
// 									sizes="auto"
// 									priority={true}
// 								/>
// 							</div>
// 						</div>
// 					</div>
// 					<div className={styles.center}>
// 						<div className={styles.heading}>
// 							<h2>{product.desc}</h2>
// 						</div>
// 						<hr />
// 						<div className={styles.price}>
// 							<p style={{ color: "red" }}>Deal of the Day</p>
// 							<div className={styles.amount}>
// 								<h4>-26%</h4>
// 								<h3>₹ {product.price}</h3>
// 							</div>
// 							<p>Inclusive of all taxes</p>
// 							<p>
// 								<b>EMI</b> starts at ₹
// 								{Math.round(product.price / 6)} No Cost EMI
// 								available
// 							</p>
// 						</div>
// 						<hr />
// 						<div className={styles.details}>
// 							<div className={styles.dHead}>
// 								<p>Brand</p>
// 								<p>Name</p>
// 								<p>Cat</p>
// 								<p>Price</p>
// 								<p>Details</p>
// 							</div>
// 							<div className={styles.dDetails}>
// 								<p>{product.brand}</p>
// 								<p>{product.name}</p>
// 								<p>{product.cat}</p>
// 								<p>{product.price}</p>
// 								<p>{product.desc.slice(0, 50)}...</p>
// 							</div>
// 						</div>
// 						<div className={styles.amountContainer}>
// 							<input
// 								type="number"
// 								min="1"
// 								defaultValue="1"
// 								onChange={(e) => setQuantity(e.target.value)}
// 							/>
// 							<button onClick={addProduct}>Add +</button>
// 						</div>
// 					</div>
// 					<div className={styles.right}>
// 						<h4>No offers available</h4>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };
// export default Product;

// export const getServerSideProps = async ({ params }) => {
// 	try {
// 		const res = await axios.get(`${publicRequest}/api/products/${params.id}`);
// 		return {
// 			props: {
// 				product: res.data,
// 			},
// 		};
// 	} catch (error) {
// 		console.error(`Error fetching product with ID ${params.id}:`, error);

// 		return {
// 			notFound: true, // Returns a 404 response
// 		};
// 	}
// };