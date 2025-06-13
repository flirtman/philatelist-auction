import Layout from "~/Layout";
// @ts-ignore

import ProductsList from "../../components/ProductsList";

const Home = () => {
    return (
        <Layout>
            <h1>Listing</h1>
            <ProductsList/>
        </Layout>
    )
}

export default Home;