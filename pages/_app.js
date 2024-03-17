import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <div className="bg-gray-700 min-w-scren min-h-screen">
                <Component {...pageProps} />
            </div>
        </Layout>
    );
}

export default MyApp;
