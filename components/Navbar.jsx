import styles from "@/styles/components/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
	Search,
	FmdGoodOutlined,
	ShoppingBagOutlined,
	PersonOutlineOutlined,
	Menu,
	Person,
	PersonAdd,
	LocalMall,
	HomeRepairService,
} from "@mui/icons-material/";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import axios from "axios";
import { publicRequest } from "@/request";

const Navbar = () => {

	const fetchData = async()=>{
		try{
			const res = await axios.get(`${publicRequest}/api/products/`);
			// console.log(res);
		}catch(err){
			console.log(err);
		}
	}
	useEffect(()=>{
		fetchData();
	},[])

	const cart = useSelector((state) => state.cart);
	const router = useRouter();
	const [find, setFind] = useState("");

	const handleKey = (e) =>{
		console.log("colled this function")
		console.log(e.key);
	}
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
							<Link href="/" style={{color:"white",textDecoration:"none"}}>
								<div className={styles.logoContainer}>
									<div className={styles.logo}>
										<Image
											src="/logo/crown.png"
											alt="amazon.in"
											fill
											className="main-logo"
											priority={true}
										/>
										{/* <h2>Crown</h2> */}
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
									<select name="category">
										<option value="All">All</option>
										<option value="Laptops">Laptops</option>
										<option value="goods">
											Goods and accesories
										</option>
									</select>
								</div>
								<div className={styles.search} >
									<input
										type="text"
										className="pInput"	
										name="search"									
										placeholder="Search Crown.in"
										onKeyUp={(e)=>{if(e.key==='Enter')findHandler()}}
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
							{/* <div className={styles.lang}>
								<div className={styles.ind}>
									
								</div>
								
							</div> */}
							<Link
								href="/products"
								style={{
									color: "white",
									textDecoration: "none",
								}}
							>
								<div className={styles.login}>
								<HomeRepairService style={{fontSize:"30px"}} />									
								</div>
							</Link>
							<Link
								href="/login"
								style={{
									color: "white",
									textDecoration: "none",
								}}
							>
								<div className={styles.login}>
									<Person style={{fontSize:"30px"}}/>									
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
										sx={{
											"& .MuiBadge-badge": {
											  backgroundColor: "orange",  // Change background color
											  color: "white", // Change text color if needed
											},
										}}
										badgeContent={cart.quantity}
										showZero
									>
										<LocalMall style={{fontSize:"30px"}}/>
									</Badge>
									
								</div>
							</Link>
						</div>
					</div>
					{/*mobile devices html here fro searcbar =====================> */}

					<div className={styles.mobile}>
						<div className={styles.Msearchbar}>
							<div className={styles.selector}>
								<select name="category">
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
									name="search"
									className="mInput"
									placeholder="Search Crown.in"
									onKeyUp={(e)=>{if(e.key==='Enter')findHandler()}}
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
