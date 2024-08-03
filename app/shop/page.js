import ProductList from "../components/ProductList";
import mockData from "../data/mockData";

export default function Home() {
  return (
    <>
      <ProductList data={mockData} category={'all'} />
    </>
  );
}
