import styles from "@/styles/components/Footer.module.css";
import Image from "next/image";

const Footer = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.top}>
						<div className={styles.left}>
							<h4>Get to Know Us</h4>
							<p>About Us</p>
							<p>Careers</p>
							<p>Press Releases</p>
							<p>Crown Science</p>
						</div>
						<div className={styles.center}>
							<h4>Connect with Us</h4>
							<p>Facebook</p>
							<p>Twitter</p>
							<p>Instagram</p>
						</div>
						<div className={styles.right}>
							<h4>Make Money with Us</h4>
							<p>Sell on Crown</p>
							<p>Sell under Crown Accelerator</p>
							<p>Protect and Build Your Brand</p>
							<p>Crown Global Selling</p>
							<p>Become an Affiliate</p>
							<p>Fulfilment by Crown</p>
							<p>Advertise Your Products</p>
							<p>Amazon Pay on Merchants</p>
						</div>
					</div>

					<div className={styles.bottom}>
						<div className={styles.logoContainer}>
							<div className={styles.logo}>
								{/* <Image
									src="/logo/logo.png"
									alt="Amazon"
									fill
									sizes="auto"
									priority={true}
									size="auto"
								/> */}
								<h2>Crown</h2>
							</div>
						</div>
						<p>
							Conditions of Use & Sale Privacy Notice
							Interest-Based Ads © 1996-2023, Crown.com, Inc. or
							its affiliates{" "}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default Footer;
