import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/Sports.module.css";
const Sports = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<h2>Best Sellers in Sports, Fitness & Outdoors</h2>
					<Link href={`/products?cat=sport`}>
						<div className={styles.cards}>
							<div className={styles.card}>
								<div className={styles.imgContainer}>
									<Image
										src="/sports/s1.jpg"
										alt="s1"
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
										src="/sports/s2.jpg"
										alt="s2"
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
										src="/sports/s3.jpg"
										alt="s3"
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
										src="/sports/s4.jpg"
										alt="s4"
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
										src="/sports/s5.jpg"
										alt="s5"
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
										src="/sports/s6.jpg"
										alt="s6"
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
										src="/sports/s7.jpg"
										alt="s7"
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
										src="/sports/s8.jpg"
										alt="s8"
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

export default Sports;
