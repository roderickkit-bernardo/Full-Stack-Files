// Developer: Roderick Bernardo
// Purpose: React list demo

function ProductList(props) {
  return (
    <section className="hero">
      <div className="hero-body">
        <p className="title">List demo using map</p>

        <div className="table-container">
          <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <tbody>
              <tr>
                {props.data.productHeadings.map((productHeading) => (
                  <th key={productHeading}>{productHeading}</th>
                ))}
              </tr>

              {props.data.products.map((product, index) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td className="has-text-right">${product.price}</td>
                  <td>{product.category}</td>
                  <td>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/${
                        (index % 20) + 1
                      }.jpg`}
                      alt={product.name}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ProductList;
