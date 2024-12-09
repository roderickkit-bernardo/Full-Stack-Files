// Developer: Roderick Bernardo
// Purpose: React list demo

function ProductList(props) {
  return (
    <section className="hero">
      <div className="hero-body">
        <p className="title">List demo using map</p>
        <div className="content">
          <p className="is-size-4">Using ()</p>
          <ol>
            {props.data.products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ol>
          <p className="is-size-4">
            Using &#123; &#125; and a return statement
          </p>
          <ol>
            {props.data.products.map((product) => {
              return <li key={product.id}>{product.name}</li>;
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default ProductList;
