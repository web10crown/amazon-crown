import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/Cookerware.module.css";
const Cookerware = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<h2>
						Up to 30% off | Shop for new Cookerware from local shops
					</h2>
					<Link href={`/products?cat=cookerware`}>
						<div className={styles.cards}>
							<div className={styles.card}>
								<div className={styles.imgContainer}>
									<Image
										src="/cooker/c1.jpg"
										alt=""
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
										src="/cooker/c2.jpg"
										alt=""
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
										src="/cooker/c3.jpg"
										alt=""
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
										src="/cooker/c4.jpg"
										alt=""
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
										src="/cooker/c5.jpg"
										alt=""
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
										src="/cooker/c6.jpg"
										alt=""
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
										src="/cooker/c7.jpg"
										alt=""
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
										src="/cooker/c8.jpg"
										alt=""
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

export default Cookerware;
