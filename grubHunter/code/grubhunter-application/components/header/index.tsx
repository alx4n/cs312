import { Logo } from "./logo";

export const Header = (): React.JSX.Element => {
    return (
        <header>
            <div className="layout-grid">
                <Logo></Logo>
            </div>
        </header>
    )
};