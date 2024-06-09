// Developer: Roderick Bernardo
// Purpose: Basic react app

function Content(props) {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          {props.contentData.map((internetPackage, internetPackageIndex) => (
            <div
              key={`${internetPackage.title}${internetPackageIndex}`}
              className="column"
            >
              <div className="box">
                <p className="has-text-centered is-size-4">
                  {internetPackage.title}
                </p>
                <p className="has-text-centered is-size-3">
                  {internetPackage.price}
                </p>
                <hr />
                <div className="content">
                  <p>Comes with:</p>
                  <ul className="is-size-6">
                    {internetPackage.listItems.map(
                      (listItem, listItemIndex) => (
                        <li key={`${listItem}${listItemIndex}`}>{listItem}</li>
                      )
                    )}
                  </ul>
                </div>
                <button className="button is-fullwidth">
                  Check Availability
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Content;
