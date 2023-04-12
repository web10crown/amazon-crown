import Image from "next/image";
import styles from "@/styles/components/Deals.module.css";
import Link from "next/link";
const Deal = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<h2>Today’s Deals</h2>
					<Link
						href={`/products?cat=deal`}
						style={{ textDecoration: "none", color: "black" }}
					>
						<div className={styles.cards}>
							<div className={styles.card}>
								<div className={styles.imgContainer}>
									<Image
										src="/deals/d1.jpg"
										alt="deal1"
										fill
										sizes="auto"
										priority={true}
										className={styles.img}
									/>
								</div>
								<div>
									<button className={styles.btn}>
										up to 54% off
									</button>
								</div>
								<p>Mad offers on oneplus</p>
							</div>

							<div className={styles.card}>
								<div className={styles.imgContainer}>
									<Image
										src="/deals/d2.jpg"
										alt="deal2"
										sizes="auto"
										priority={true}
										fill
										className={styles.img}
									/>
								</div>
								<div>
									<button className={styles.btn}>
										up to 41% off
									</button>
								</div>
								<p>Budget latops under 42000</p>
							</div>

							<div className={styles.card}>
								<div className={styles.imgContainer}>
									<Image
										src="/deals/d3.jpg"
										alt="deal3"
										fill
										sizes="auto"
										priority={true}
										className={styles.img}
									/>
								</div>
								<div>
									<button className={styles.btn}>
										up to 30% off
									</button>
								</div>
								<p>High performance desktop</p>
							</div>

							<div className={styles.card}>
								<div className={styles.imgContainer}>
									<Image
										src="/deals/d4.jpg"
										alt="deals4"
										fill
										sizes="auto"
										priority={true}
										className={styles.img}
									/>
								</div>
								<div>
									<button className={styles.btn}>
										up to 20% off
									</button>
								</div>
								<p>Samsung tablets </p>
							</div>

							<div className={styles.card}>
								<div className={styles.imgContainer}>
									<Image
										src="/deals/d5.jpg"
										alt="deal5"
										fill
										sizes="auto"
										priority={true}
										className={styles.img}
									/>
								</div>
								<div>
									<button className={styles.btn}>
										up to 20% off
									</button>
								</div>
								<p>Vivo y100 buy now</p>
							</div>

							<div className={styles.card}>
								<div className={styles.imgContainer}>
									<Image
										src="/deals/d3.jpg"
										alt="deal6"
										fill
										sizes="auto"
										priority={true}
										className={styles.img}
									/>
								</div>
								<div>
									<button className={styles.btn}>
										up to 30% off
									</button>
								</div>
								<p>High performance desktop</p>
							</div>

							<div className={styles.card}>
								<div className={styles.imgContainer}>
									<Image
										src="/deals/d6.jpg"
										alt="deal6"
										fill
										sizes="auto"
										priority={true}
										className={styles.img}
									/>
								</div>
								<div>
									<button className={styles.btn}>
										up to 47% off
									</button>
								</div>
								<p>Lenovo tablets </p>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};
export default Deal;
