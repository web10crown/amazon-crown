import styles from "@/styles/components/Banner.module.css";
import { Menu } from "@mui/icons-material/";
const Banner = () => {
	return (
		<>
			<div className={styles.bottom}>
				<div className={styles.bLeft}>
					<Menu />
					ALL
				</div>
				<div className={styles.bCenter}>
					<p>Amazon miniTV</p>
					<p>Sell</p>
					<p>Best Sellers</p>
					<p>Mobiles</p>
					<p>Customer Service</p>
					<p>Today's Deals</p>
					<p>Electronics</p>
					<p>Prime</p>
					<p>Amazon Pay</p>
				</div>
				<div className={styles.bRight}></div>
			</div>
		</>
	);
};

export default Banner;
