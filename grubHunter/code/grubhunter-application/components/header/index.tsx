import styles from "./index.module.css";
import { AuthElement } from "./auth-element";
import { Logo } from "./logo";

export const Header = (): React.JSX.Element => {
    return (
        <header className={styles.root}>
            <div className="layout-grid">
                <nav>
                    <Logo/>
                    <AuthElement/>
                </nav>
            </div>
        </header>
    )
};