import styles from "@/styles/components/Banner.module.css";
import { Menu } from "@mui/icons-material/";
import Link from "next/link";

const Banner = () => {
	const links = [
		{ href: "/products?cat=kitchenware", text: "All Products" },
		{ href: "/products?cat=kitchenware", text: "Kitchenware" },
		{ href: "/products?cat=deal", text: "Deals" },
		{ href: "/products?cat=furniture", text: "Furniture" },
		{ href: "/products?cat=grocery", text: "Grocery" },
		{ href: "/products?cat=cookerware", text: "Cookerware" },
		{ href: "/products?cat=sport", text: "Sports & Equipments" },
		{ href: "/products?find=cloth%20men", text: "Style Men" },
		{ href: "/products?find=cloth%20women", text: "Style Women" },
		{ href: "/products?find=shoe", text: "Shoes" },
		{ href: "/products?find=electronics", text: "Electronics" },
	];

	const duplicatedLinks = [...links,...links];

	return (
		<>
			<div className={styles.bottom}>
				{/* <div className={styles.bLeft}>
          <Menu />
          ALL
        </div> */}


				<div className={styles.bCenter}>
					<div className={styles.marquee}>
						<div className={styles.marqueeContent}>
							{duplicatedLinks.map((link, index) => (
								<Link
									key={index}
									href={link.href}
									style={{
										color: "white",
										textDecoration: "none",
									}}
								>
									<p>{link.text}</p>
								</Link>
							))}
						</div>
						<div className={styles.marqueeContent}>
							{duplicatedLinks.map((link, index) => (
								<Link
									key={index}
									href={link.href}
									style={{
										color: "white",
										textDecoration: "none",
									}}
								>
									<p>{link.text}</p>
								</Link>
							))}
						</div>			
					</div>
				</div>
				<div className={styles.bRight}></div>
			</div>
		</>
	);
};

export default Banner;