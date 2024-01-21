// import { useState, useEffect, use } from 'react';
// import { useRouter } from 'next/router';
// import styles from "@/styles/pages/Products.module.css";
// import axios from "axios";
// import Image from "next/image";
// import Link from "next/link";
// import { publicRequest } from "../request";
// import Loader from '@/components/Loader';

// export default function Products() {
//   const [data, setData] = useState([]);
//   const router = useRouter();
//   const [loading, setloading] = useState(true);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { cat, find } = router.query;
//         const endpoint =
//           cat
//             ? `${publicRequest}/api/products?cat=${cat}`
//             : find
//               ? `${publicRequest}/api/products?find=${find}`
//               : `${publicRequest}/api/products`;

//         const res = await axios.get(endpoint);
//         setData(res.data);
//         setloading(false);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchData();
//   }, [router.query]);

//   return (
//     <>
//       {loading ? <Loader /> : (
//         <div className={styles.container}>
//           <h1>{data[0] ? "PRODUCTS " : "Not Available"}</h1>
//           <div className={styles.wrapper}>
//             <div className={styles.filters}>
//               <h2>Average Customer Review</h2>
//               <p>filter 1</p>
//             </div>
//             <div className={styles.cardContainer}>
//               {data.slice().reverse().map((p) => (
//                 <div className={styles.card} key={p._id}>
//                   <Link
//                     href={`/product/${p._id}`}
//                     style={{
//                       color: "#131921",
//                       textDecoration: "none",
//                     }}
//                   >
//                     <>
//                       <div className={styles.imgContainer}>
//                         <Image
//                           src={p.img.replace(/^http:/, 'https:')}
//                           alt={p.name}
//                           fill
//                           style={{ objectFit: "contain" }}
//                           sizes="auto"
//                           priority={true}
//                         />
//                       </div>

//                       <div className={styles.info}>
//                         <button>{p.name}</button>
//                         <h4>{p.price} ₹</h4>
//                         <p>{p.desc.slice(0, 70)}...</p>
//                       </div>
//                     </>
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// code using next js serverside functions commeted because nextjs serverside functions are not optimized for cold start=>

import styles from "@/styles/pages/Products.module.css";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { publicRequest } from "../request";

export default function Products({ data }) {
	return (
		<div className={styles.container}>
			<h1>{data[0] ? "PRODUCTS " : "Not Availiable"}</h1>
			<div className={styles.wrapper}>
				<div className={styles.filters}>
					<h2>Average Customer Review</h2>
					<p>filter 1</p>
				</div>
				<div className={styles.cardContainer}>
					{data
						.slice()
						.reverse()
						.map((p) => (
							<div className={styles.card} key={p._id}>
								<Link
									href={`/product/${p._id}`}
									style={{
										color: "#131921",
										textDecoration: "none",
									}}
								>
									<>
										<div className={styles.imgContainer}>
											<Image
												src={p.img.replace(/^http:/, 'https:')}
												alt={p.name}
												fill
												style={{ objectFit: "contain" }}
												sizes="auto"
												priority={true}
											/>
										</div>

										<div className={styles.info}>
											<button>{p.name}</button>
											<h4>{p.price} ₹</h4>
											<p>{p.desc.slice(0, 70)}...</p>
										</div>
									</>
								</Link>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}

export const getServerSideProps = async ({ query }) => {
	const { cat = '', find = '' } = query;
	try {
		let res;

		if (cat) {
			res = await axios.get(`${publicRequest}/api/products?cat=${cat}`);
		} else if (find) {
			res = await axios.get(`${publicRequest}/api/products?find=${find}`);
		} else {
			res = await axios.get(`${publicRequest}/api/products`,{ timeout: 15000 });
		}

		return {
			props: { data: res.data },
		};
	} catch (err) {
		console.error(err);

		return {
			props: { data: [] },
		};
	}
};
