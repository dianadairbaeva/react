import { CSSProperties } from "react";
import { Product } from "@/hooks/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article style={styles.card}>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={styles.image}
      />

      <div style={styles.content}>
        <p style={styles.category}>{product.category}</p>
        <h3 style={styles.title}>{product.title}</h3>
        <p style={styles.description}>{product.description}</p>
      </div>

      <div style={styles.footer}>
        <strong>${product.price}</strong>
        <span>⭐ {product.raiting}</span>
      </div>
    </article>
  );
}

const styles: Record<string, CSSProperties> = {
  card: {
    width: "300px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
  },

  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  },

  content: {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  category: {
    color: "#777",
    fontSize: "14px",
    textTransform: "uppercase",
    margin: 0,
  },

  title: {
    margin: 0,
    fontSize: "20px",
    fontWeight: "bold",
  },

  description: {
    color: "#555",
    fontSize: "14px",
    margin: 0,
  },

  footer: {
    padding: "16px",
    borderTop: "1px solid #eee",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "18px",
  },
};