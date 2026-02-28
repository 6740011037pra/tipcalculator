import ProductCard from "./ProductCard"

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products?limit=3")
  const data = await res.json()
  return data
}

export default async function ProductsPage() {
  const products = await getData()

  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Products</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((item: any) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}