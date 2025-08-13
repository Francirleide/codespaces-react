import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ProductForm.module.css";

export function ProductForm({ products, setProducts }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const editingProduct = products.find((p) => p.id === Number(id));

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setPrice(editingProduct.price.toString());
    } else {
      setName("");
      setPrice("");
    }
  }, [editingProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !price.trim()) {
      alert("Preencha nome e preço");
      return;
    }

    if (editingProduct) {
      setProducts(
        products.map((p) =>
          p.id === editingProduct.id
            ? { ...p, name: name.trim(), price: parseFloat(price) }
            : p
        )
      );
    } else {
      setProducts([
        ...products,
        { id: Date.now(), name: name.trim(), price: parseFloat(price) },
      ]);
    }

    navigate("/products");
  };

  return (
    <div className={styles.container}>
      <h2>{editingProduct ? "Editar Produto" : "Novo Produto"}</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Nome do produto</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />

        <label htmlFor="price">Preço</label>
        <input
          id="price"
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className={styles.input}
        />

        <button type="submit" className={styles.button}>
          {editingProduct ? "Salvar" : "Adicionar"}
        </button>
      </form>
    </div>
  );
}
