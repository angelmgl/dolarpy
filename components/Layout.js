import Head from "next/head";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Head>
                <title>DolarPY</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <main>{children}</main>
            <Footer />
        </div>
    );
}
