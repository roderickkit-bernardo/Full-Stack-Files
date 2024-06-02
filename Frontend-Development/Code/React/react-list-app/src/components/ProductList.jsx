// Developer: Roderick Bernardo
// Purpose: React list demo

function ProductList(props) {
  return (
    <section className="hero">
      <div className="hero-body">
        <p className="title">List demo using map</p>
        <div className="content">
          <ol>
            {props.data.products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default ProductList;
