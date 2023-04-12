import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/Furnitures.module.css";
const Furnitures = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<h2>
						Up to 60% off | Curated furniture picks for your home
					</h2>
					<Link href={`/products?cat=furniture`}>
						<div className={styles.cards}>
							<div className={styles.card}>
								<div className={styles.imgContainer}>
									<Image
										src="/furnitures/f1.jpg"
										alt="f1"
										sizes="auto"
										priority={true}
										fill
										className={styles.img}
									/>
								</div>
							</div>

							<div className={styles.card}>
								<div className={styles.imgContainer}>
									<Image
										src="/furnitures/f2.jpg"
										alt="f2"
										sizes="auto"
										priority={true}
										fill
										className={styles.img}
									/>
								</div>
							</div>

							<div className={styles.card}>
								<div className={styles.imgContainer}>
									<Image
										src="/furnitures/f3.jpg"
										alt="f3"
										sizes="auto"
										priority={true}
										fill
										className={styles.img}
									/>
								</div>
							</div>

							<div className={styles.card}>
								<div className={styles.imgContainer}>
									<Image
										src="/furnitures/f4.jpg"
										alt="f4"
										sizes="auto"
										priority={true}
										fill
										className={styles.img}
									/>
								</div>
							</div>

							<div className={styles.card}>
								<div className={styles.imgContainer}>
									<Image
										src="/furnitures/f5.jpg"
										alt="f5"
										sizes="auto"
										priority={true}
										fill
										className={styles.img}
									/>
								</div>
							</div>

							<div className={styles.card}>
								<div className={styles.imgContainer}>
									<Image
										src="/furnitures/f6.jpg"
										alt="f6"
										sizes="auto"
										priority={true}
										fill
										className={styles.img}
									/>
								</div>
							</div>

							<div className={styles.card}>
								<div className={styles.imgContainer}>
									<Image
										src="/furnitures/f7.jpg"
										alt="f7"
										sizes="auto"
										priority={true}
										fill
										className={styles.img}
									/>
								</div>
							</div>

							<div className={styles.card}>
								<div className={styles.imgContainer}>
									<Image
										src="/furnitures/f8.jpg"
										alt="f8"
										sizes="auto"
										priority={true}
										fill
										className={styles.img}
									/>
								</div>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Furnitures;
