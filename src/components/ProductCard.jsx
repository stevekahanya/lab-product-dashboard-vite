import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  const cardClass = product.inStock ? styles.productCard : `${styles.productCard} ${styles.outOfStock}`;

  return (
    <div className={cardClass}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      
      {product.inStock ? (
        <span className={styles.inStockLabel}>In Stock</span>
      ) : (
        <span className={styles.outOfStockLabel}>Out of Stock</span>
      )}

      {/* Added Remove button for the 4th test requirement */}
      <button onClick={() => onRemove(product.id)} className={styles.removeBtn}>
        Remove
      </button>
    </div>
  );
};

// CRITICAL: Ensure this line exists!
export default ProductCard;