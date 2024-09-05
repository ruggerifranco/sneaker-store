import ProductList from "../components/ProductList";

const getProducts = async () => {
    try {
        const productosRef = collection(db, "products")

        const querySnapshot = await getDocs(productosRef)
        const docs = querySnapshot.docs.map(doc => doc.data())
        return docs;
    } catch (error) {

    }
}

const Products = async () => {
    const products = await getProducts();
    return (
        <>
            <ProductList category={'all'} products={products} />
        </>
    )
}

export default Products