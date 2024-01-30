import "../styles/global/css";

const MyApp = ({ Component, pageProps }) => (
    <div>
        <Component {...pageProps} />
    </div>
);

export default MyApp;