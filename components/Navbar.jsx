import styles from "@/styles/components/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import {
	Search,
	FmdGoodOutlined,
	ShoppingBagOutlined,
	PersonOutlineOutlined,
	Menu,
} from "@mui/icons-material/";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

const Navbar = () => {
	const cart = useSelector((state) => state.cart);
	const router = useRouter();
	const [find, setFind] = useState("");

	const findHandler = () => {
		if (find !== "") {
			router.push({
				pathname: "/products",
				query: { find: find },
			});
		} else {
			router.push("/products");
		}
	};
	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.top}>
						<div className={styles.tLeft}>
							<Link href="/">
								<div className={styles.logoContainer}>
									<div className={styles.logo}>
										<Image
											src="/logo/logo.png"
											alt="amazon.in"
											fill
											priority={true}
											sizes="auto"
										/>
									</div>
								</div>
							</Link>
							<div className={styles.locationContainer}>
								<FmdGoodOutlined
									style={{
										alignSelf: "flex-end",
										fontSize: "18px",
									}}
								/>
								<div className={styles.location}>
									<p>Hello</p>
									<h4>Select your address</h4>
								</div>
							</div>
						</div>
						<div className={styles.tCenter}>
							<div className={styles.searchbar}>
								<div className={styles.selector}>
									<select>
										<option value="All">All</option>
										<option value="Laptops">Laptops</option>
										<option value="goods">
											Goods and accesories
										</option>
									</select>
								</div>
								<div className={styles.search}>
									<input
										type="text"
										className="pInput"
										placeholder="Search Amazon.in"
										onChange={(e) =>
											setFind(
												e.target.value.toLowerCase()
											)
										}
									/>
								</div>

								<div
									className={styles.lens}
									onClick={findHandler}
								>
									<Search
										style={{
											color: "white",
											height: "100%",
										}}
									/>
								</div>
							</div>
						</div>
						<div className={styles.tRight}>
							<div className={styles.lang}>
								<div className={styles.ind}>
									<Image
										src="/logo/ind.png"
										alt="IND"
										fill
										sizes="auto"
										priority={true}
									/>
								</div>
								EN
							</div>
							<Link
								href="/login"
								style={{
									color: "white",
									textDecoration: "none",
								}}
							>
								<div className={styles.login}>
									<PersonOutlineOutlined />
									Login
								</div>
							</Link>
							<Link
								href="/cart"
								style={{
									color: "white",
									textDecoration: "none",
								}}
							>
								<div className={styles.cart}>
									<Badge
										color="secondary"
										badgeContent={cart.quantity}
										showZero
									>
										<ShoppingBagOutlined />
									</Badge>
									Cart
								</div>
							</Link>
						</div>
					</div>
					{/*mobile devices html here fro searcbar =====================> */}

					<div className={styles.mobile}>
						<div className={styles.Msearchbar}>
							<div className={styles.selector}>
								<select>
									<option value="All">All</option>
									<option value="Laptops">Laptops</option>
									<option value="goods">
										Goods and accesories
									</option>
								</select>
							</div>
							<div className={styles.search}>
								<input
									type="text"
									className="mInput"
									placeholder="Search Amazon.in"
									onChange={(e) =>
										setFind(e.target.value.toLowerCase())
									}
								/>
							</div>

							<div className={styles.lens} onClick={findHandler}>
								<Search
									style={{
										color: "white",
										height: "100%",
									}}
								/>
							</div>
						</div>

						<div className={styles.MlocationContainer}>
							<FmdGoodOutlined
								style={{
									alignSelf: "flex-end",
									fontSize: "18px",
								}}
							/>
							<div className={styles.location}>
								<p>Hello</p>
								<h4>Select your address</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Navbar;
