import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/Kitchen.module.css";
const Kitchen = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<h2>
						Up to 60% off | Shop for new kitchenware from local
						shops
					</h2>
					<Link href={`/products?cat=kitchenware`}>
						<div className={styles.cards}>
							<div className={styles.card}>
								<div className={styles.imgContainer}>
									<Image
										src="/kitchen/k1.jpg"
										alt="k1"
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
										src="/kitchen/k2.jpg"
										alt="k2"
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
										src="/kitchen/k3.jpg"
										alt="k3"
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
										src="/kitchen/k4.jpg"
										alt="k4"
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
										src="/kitchen/k5.jpg"
										alt="k5"
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
										src="/kitchen/k6.jpg"
										alt="k6"
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
										src="/kitchen/k7.jpg"
										alt="k7"
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
										src="/kitchen/k8.jpg"
										alt="k8"
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

export default Kitchen;
