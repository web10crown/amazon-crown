import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/components/Kitchen.module.css';

const Kitchen = () => {
	const kitchenImages = [
		'/kitchen/k1.jpg',
		'/kitchen/k2.jpg',
		'/kitchen/k3.jpg',
		'/kitchen/k4.jpg',
		'/kitchen/k5.jpg',
		'/kitchen/k6.jpg',
		'/kitchen/k7.jpg',
		'/kitchen/k8.jpg',
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const handleLeftArrowClick = () => {
		const cards = document.querySelector("#scroll");
		const cardWidth = cards.offsetWidth; // Adjust this based on your card width
		const scrollAmount = cardWidth; // Adjust this based on how much you want to scroll
	  
		cards.scrollBy({
		  left: -scrollAmount, // Use a negative value for left scrolling
		  behavior: "smooth", // Use smooth behavior for a smooth scroll effect
		});
	};

	const handleRightArrowClick = () => {
		const cards = document.querySelector("#scroll");
		const cardWidth = cards.offsetWidth; // Adjust this based on your card width
		const scrollAmount = cardWidth; // Adjust this based on how much you want to scroll

		cards.scrollBy({
			left: scrollAmount,
			behavior: "smooth", // Use smooth behavior for a smooth scroll effect
		});
	};

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.leftArrow} onClick={handleLeftArrowClick}>
					&larr;
				</div>
				<h2>Up to 60% off | Shop for new kitchenware from local shops</h2>
				<Link href={`/products?cat=kitchenware`}>
					<div id="scroll"className={styles.cards}>
						{kitchenImages.map((image, index) => (
							<div key={index} className={styles.card}>
								<div className={styles.imgContainer}>
									<Image
										src={image}
										alt={`k${index + 1}`}
										sizes="auto"
										priority={true}
										fill
										className={styles.img}
									/>
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

export default Kitchen;
