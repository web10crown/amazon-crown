import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/Cookerware.module.css";

const Cookerware = () => {
	
	const cookerwareImages = Array.from({ length: 8 }, (_, index) => `/cooker/c${index + 1}.jpg`);
	const handleLeftArrowClick = () => {
		const cards = document.querySelector("#scrollk");
		const cardWidth = cards.offsetWidth; 
		const scrollAmount = cardWidth; 

		cards.scrollBy({
			left: -scrollAmount, 
			behavior: "smooth", 
		});
	};
	const handleRightArrowClick = () => {
		const cards = document.querySelector("#scrollk");
		const cardWidth = cards.offsetWidth; 
		const scrollAmount = cardWidth; 

		cards.scrollBy({
			left: scrollAmount,
			behavior: "smooth", 
		});
	};

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.leftArrow} onClick={handleLeftArrowClick}>
					&larr;
				</div>
				<h2>Up to 30% off | Shop for new Cookerware from local shops</h2>
				<Link href={`/products?cat=cookerware`}>
					<div id="scrollk" className={styles.cards}>
						{cookerwareImages.map((image, index) => (
							<div key={index} className={styles.card}>
								<div className={styles.imgContainer}>
									<Image src={image} alt={`c${index + 1}`} sizes="auto" priority={true} fill className={styles.img} />
								</div>
							</div>
						))}
					</div>
				</Link>
				<div className={styles.rightArrow} onClick={handleRightArrowClick}>
					&rarr;
				</div>
			</div>
		</div>
	);
};

export default Cookerware;
