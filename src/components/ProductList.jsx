import styles from './ProductList.module.css';

export function ProductList({ products }) {
    var category = 'category';
    var limit = 12;
    var apiUrl =
    `https://dummyjson.com/products/category/${category}?limit=${limit}&select=id,thumbnail,title,price,description`;

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    return <div className= {styles.container}>
        <h1> TRJ Megastore</h1>
        {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
                <img src={product.thumbnail} alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
            </div>
        ))}
               
    </div>;

}
