import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/Sports.module.css";
const Sports = () => {

	const handleLeftArrowClick = () => {
		const cards = document.querySelector("#scrolls");
		const cardWidth = cards.offsetWidth;
		const scrollAmount = cardWidth;

		cards.scrollBy({
			left: -scrollAmount,
			behavior: "smooth",
		});
	};
	const handleRightArrowClick = () => {
		const cards = document.querySelector("#scrolls");
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
					<h2>Fitness & Outdoors</h2>
					<Link href={`/products?cat=sport`}>
						<div id="scrolls" className={styles.cards}>
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
					<div className={styles.rightArrow} onClick={handleRightArrowClick}>
						&rarr;
					</div>
				</div>
			</div>
		</>
	);
};

export default Sports;
