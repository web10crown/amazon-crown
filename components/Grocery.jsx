import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/Grocery.module.css";
const Grocery = () => {

	const handleLeftArrowClick = () => {
		const cards = document.querySelector("#scrollg");
		const cardWidth = cards.offsetWidth;
		const scrollAmount = cardWidth;

		cards.scrollBy({
			left: -scrollAmount,
			behavior: "smooth",
		});
	};
	const handleRightArrowClick = () => {
		const cards = document.querySelector("#scrollg");
		const cardWidth = cards.offsetWidth;
		const scrollAmount = cardWidth;

		cards.scrollBy({
			left: scrollAmount,
			behavior: "smooth",
		});
	};
	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.leftArrow} onClick={handleLeftArrowClick}>
						&larr;
					</div>
					<h2>Frequently purchased in Grocery</h2>
					<Link href={`/products?cat=grocery`}>
						<div id="scrollg" className={styles.cards}>
							<div className={styles.card}>
								<div className={styles.imgContainer}>
									<Image
										src="/grocery/g1.jpg"
										alt="g1"
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
										src="/grocery/g2.jpg"
										alt="g2"
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
										src="/grocery/g3.jpg"
										alt="g3"
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
										src="/grocery/g4.jpg"
										alt="g4"
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
										src="/grocery/g5.jpg"
										alt="g5"
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
										src="/grocery/g6.jpg"
										alt="g6"
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
										src="/grocery/g7.jpg"
										alt="g7"
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
										src="/grocery/g8.jpg"
										alt="g8"
										sizes="auto"
										priority={true}
										fill
										className={styles.img}
									/>
								</div>
							</div>
						</div>
					</Link>
					<div className={styles.rightArrow} onClick={handleRightArrowClick}>
						&rarr;
					</div>
				</div>
			</div>
		</>
	);
};

export default Grocery;
