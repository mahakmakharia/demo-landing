import React from 'react';
import FreeProductCard from './FreeProductCard';
import styles from './product.module.css'

const FreeProductsSection = () => {
    const products = [
        {
            src: "/assets/imgs/policy.png",
            name: "Privacy Policy Generator",
            description: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
        },
        {
            src: "/assets/imgs/terms.png",
            name: "Terms & Conditions Generator",
            description: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
        },
        {
            src: "/assets/imgs/domain.png",
            name: "Domain Name Generator",
            description: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
        },
        {
            src: "/assets/imgs/invoice.png",
            name: "Invoice Generator",
            description: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
        }
    ]
    return (
        <div className={styles.productContainer} >
            <p className={styles.heading}>Try our other free products</p>
            <div className={styles.productList}>
                {products.map(product => {
                    return (
                        <FreeProductCard key={product.name} name={product.name} description={product.description} src={product.src} />
                    )
                })}

            </div>

        </div>
    );
}

export default FreeProductsSection;