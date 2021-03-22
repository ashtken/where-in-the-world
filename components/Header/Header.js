import styles from "./Header.module.scss";
import { useTheme } from "next-themes";

export const Header = () => {
	const { theme, setTheme } = useTheme();
	const themeToggler = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};
	return (
		<div className={styles.header}>
			<h1>Where in the world?</h1>
			<button onClick={themeToggler}>Switch Theme {theme}</button>
		</div>
	);
};
