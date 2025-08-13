import { Routes, Route } from "react-router-dom";
import { ProductList } from "./ProductList";  // seu componente já existente
import { ProductForm } from "./ProductForm";  // componente de formulário que vamos criar

export function ProductsManager() {
  const [products, setProducts] = useState([]);

  return (
    <Routes>
      <Route
        path="/"
        element={<ProductList products={products} setProducts={setProducts} />}
      />
      <Route
        path="new"
        element={<ProductForm products={products} setProducts={setProducts} />}
      />
      <Route
        path=":id/edit"
        element={<ProductForm products={products} setProducts={setProducts} />}
      />
    </Routes>
  );
}
