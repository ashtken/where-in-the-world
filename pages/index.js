import Head from "next/head";
import { Country } from "../components/Country/Country";
import { Header } from "../components/Header/Header";
import { Search } from "../components/Search/Search";
import styles from "../styles/Home.module.scss";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Search />
			<Country />
		</div>
	);
}
