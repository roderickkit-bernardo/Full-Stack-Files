function Content(props) {
  return (
    <section class="section">
      <div class="container">
        <div class="columns">
          {props.contentData.map((internetPackage) => (
            <div class="column">
              <div class="box">
                <p class="has-text-centered is-size-4">
                  {internetPackage.title}
                </p>
                <p class="has-text-centered is-size-3">
                  {internetPackage.price}
                </p>
                <hr />
                <div class="content">
                  <p>Comes with:</p>
                  <ul class="is-size-6">
                    {internetPackage.listItems.map((listItem) => (
                      <li>{listItem}</li>
                    ))}
                  </ul>
                </div>
                <button class="button is-fullwidth">Check Availability</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Content;
