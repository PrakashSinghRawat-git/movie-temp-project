import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <div className="bg-gray-700">
                <Component {...pageProps} />
            </div>
        </Layout>
    );
}

export default MyApp;
