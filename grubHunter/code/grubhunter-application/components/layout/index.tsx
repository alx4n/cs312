import { Header } from "../header"

interface LayoutProps {
    children : React.JSX.Element
};

export const LayoutComponent = (props: LayoutProps) : React.JSX.Element => {
    return (
        <main className="layout-grid">
            <Header></Header>
            {props.children}
        </main>
    )
}
