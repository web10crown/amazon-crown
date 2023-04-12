import styles from "@/styles/components/Crousal.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
const Crousal = () => {
	const [slide, setSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSlide(slide < 2 ? slide + 1 : 0);
		}, 3000);
		return () => clearInterval(interval);
	}, [slide]);

	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.slider}>
						<div
							className={styles.imgContainer}
							style={{
								transform: `translateX(${slide * -100}vw)`,
							}}
						>
							<div className={styles.img}>
								<Image
									src="/crousal/c2.jpg"
									alt="image"
									fill
									sizes="auto"
									priority={true}
									className={styles.image}
								/>
							</div>
							<div className={styles.img}>
								<Image
									src="/crousal/c1.jpg"
									alt="image"
									fill
									sizes="auto"
									priority={true}
									className={styles.image}
								/>
							</div>
							<div className={styles.img}>
								<Image
									src="/crousal/c3.jpg"
									alt="image"
									fill
									sizes="auto"
									priority={true}
									className={styles.image}
								/>
							</div>
						</div>
					</div>

					<div className={styles.bottom}>
						<div className={styles.products}>
							<div className={styles.cardContainer}>
								<h2> Up to 60% off | Styles for women </h2>
								<div className={styles.cards}>
									<div className={styles.card}>
										<div className={styles.pImage}>
											<Link href="/products?find=cloth women">
												<Image
													src="/crousal/products/p1.1.jpg"
													alt="product"
													fill
													sizes="auto"
													priority={true}
												/>
											</Link>
										</div>
										<p>Clothing</p>
									</div>
									<div className={styles.card}>
										<div className={styles.pImage}>
											<Link href="/products?find=footwear women">
												<Image
													src="/crousal/products/p1.2.jpg"
													alt="product"
													fill
													sizes="auto"
													priority={true}
												/>
											</Link>
										</div>
										<p>Footwear </p>
									</div>
									<div className={styles.card}>
										<div className={styles.pImage}>
											<Link href="/products?find=watch women">
												<Image
													src="/crousal/products/p1.3.jpg"
													alt="product"
													fill
													sizes="auto"
													priority={true}
												/>
											</Link>
										</div>
										<p>Watches</p>
									</div>
									<div className={styles.card}>
										<div className={styles.pImage}>
											<Link href="/products?find=jewellery women">
												<Image
													src="/crousal/products/p1.4.jpg"
													alt="product"
													fill
													sizes="auto"
													priority={true}
												/>
											</Link>
										</div>
										<p>Jewellery</p>
									</div>
								</div>
								<div className={styles.offers}>
									<Link
										href="/products?find=women"
										style={{
											color: "inherit",
											textDecoration: "none",
										}}
									>
										see all offers{" "}
									</Link>
								</div>
							</div>

							<div className={styles.cardContainer}>
								<h2> Up to 60% off | Styles for men </h2>
								<div className={styles.cards}>
									<div className={styles.card}>
										<div className={styles.pImage}>
											<Link href="/products?find=cloth men">
												<Image
													src="/crousal/products/p2.1.jpg"
													alt="product"
													fill
													sizes="auto"
													priority={true}
												/>
											</Link>
										</div>
										<p>Clothing</p>
									</div>
									<div className={styles.card}>
										<div className={styles.pImage}>
											<Link href="/products?find=footwear men">
												<Image
													src="/crousal/products/p2.2.jpg"
													alt="product"
													fill
													sizes="auto"
													priority={true}
												/>
											</Link>
										</div>
										<p>Footwear</p>
									</div>
									<div className={styles.card}>
										<div className={styles.pImage}>
											<Link href="/products?find=watch men">
												<Image
													src="/crousal/products/p2.3.jpg"
													alt="product"
													fill
													sizes="auto"
													priority={true}
												/>
											</Link>
										</div>
										<p>Watches</p>
									</div>
									<div className={styles.card}>
										<div className={styles.pImage}>
											<Link href="/products?find=bag men">
												<Image
													src="/crousal/products/p2.4.jpg"
													alt="product"
													fill
													sizes="auto"
													priority={true}
												/>
											</Link>
										</div>
										<p>Bags</p>
									</div>
								</div>
								<div className={styles.offers}>
									<Link
										href="/products?find=men"
										style={{
											color: "inherit",
											textDecoration: "none",
										}}
									>
										see all offers
									</Link>
								</div>
							</div>

							<div className={styles.cardContainer}>
								<h2>
									Home appliances | 10% off on selected cards
								</h2>
								<div className={styles.cards}>
									<div className={styles.card}>
										<div className={styles.pImage}>
											<Link href="/products?find=conditioner">
												<Image
													src="/crousal/products/p3.1.jpg"
													alt="product"
													fill
													sizes="auto"
													priority={true}
												/>
											</Link>
										</div>
										<p>Conditioners</p>
									</div>
									<div className={styles.card}>
										<div className={styles.pImage}>
											<Link href="/products?find=refrigerator">
												<Image
													src="/crousal/products/p3.2.jpg"
													alt="product"
													fill
													sizes="auto"
													priority={true}
												/>
											</Link>
										</div>
										<p>Refrigerators</p>
									</div>
									<div className={styles.card}>
										<div className={styles.pImage}>
											<Link href="/products?find=microwave">
												<Image
													src="/crousal/products/p3.3.jpg"
													alt="product"
													fill
													sizes="auto"
													priority={true}
												/>
											</Link>
										</div>
										<p>Microwaves</p>
									</div>
									<div className={styles.card}>
										<div className={styles.pImage}>
											<Link href="/products?find=washing machine">
												<Image
													src="/crousal/products/p3.4.jpg"
													alt="product"
													fill
													sizes="auto"
													priority={true}
												/>
											</Link>
										</div>
										<p>Washing mashines</p>
									</div>
								</div>
								<div className={styles.offers}>
									<Link
										href="/products?find=electronics"
										style={{
											color: "inherit",
											textDecoration: "none",
										}}
									>
										see all offers
									</Link>
								</div>
							</div>

							<div className={styles.cardContainer}>
								<h2>Revamp your home in style </h2>
								<div className={styles.cards}>
									<div className={styles.card}>
										<div className={styles.pImage}>
											<Link href="/products?find=bedsheet">
												<Image
													src="/crousal/products/p4.1.jpg"
													alt="product"
													fill
													sizes="auto"
													priority={true}
												/>
											</Link>
										</div>
										<p>Bedsheets & more</p>
									</div>
									<div className={styles.card}>
										<div className={styles.pImage}>
											<Link href="/products?find=decoration">
												<Image
													src="/crousal/products/p4.2.jpg"
													alt="product"
													fill
													sizes="auto"
													priority={true}
												/>
											</Link>
										</div>
										<p>Home Decoration</p>
									</div>
									<div className={styles.card}>
										<div className={styles.pImage}>
											<Link href="/products?find=storage">
												<Image
													src="/crousal/products/p4.3.jpg"
													alt="product"
													fill
													sizes="auto"
													priority={true}
												/>
											</Link>
										</div>
										<p>Home Storage</p>
									</div>
									<div className={styles.card}>
										<div className={styles.pImage}>
											<Link href="/products?find=lighting">
												<Image
													src="/crousal/products/p4.4.jpg"
													alt="product"
													fill
													sizes="auto"
													priority={true}
												/>
											</Link>
										</div>
										<p>Lighting</p>
									</div>
								</div>
								<div className={styles.offers}>
									<Link
										href="/products?find=home"
										style={{
											color: "inherit",
											textDecoration: "none",
										}}
									>
										see all offers
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Crousal;
