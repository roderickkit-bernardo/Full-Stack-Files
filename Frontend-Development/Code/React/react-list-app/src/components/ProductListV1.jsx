// Developer: Roderick Bernardo
// Purpose: React list demo

function ProductList(props) {
  return (
    <section className="hero">
      <div className="hero-body">
        <p className="title">List demo using map</p>
        <p className="is-size-4">Using ()</p>
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
                      src={`/images/${(index % 20) + 1}.jpg`}
                      alt={product.name}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="is-size-4">Using &#123; &#125; and a return statement</p>
        <div className="table-container">
          <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <tbody>
              <tr>
                {props.data.productHeadings.map((productHeading) => {
                  return <th key={productHeading}>{productHeading}</th>;
                })}
              </tr>

              {props.data.products.map((product, index) => {
                return (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td className="has-text-right">${product.price}</td>
                    <td>{product.category}</td>
                    <td>
                      <img
                        src={`/images/${(index % 20) + 1}.jpg`}
                        alt={product.name}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ProductList;
