// Developer: Roderick Bernardo
// Purpose: React quiz app

function Message({ title = "Title not set.", message = "Message not set." }) {
  const className = `hero-body ${
    title === "Error" ? "has-background-warning" : "has-background-info"
  }`;

  return (
    <>
      <section className="hero">
        <div className={className}>
          <div className="block">
            <p className="is-size-2 has-text-centered">{title}</p>
          </div>
          <div className="block">
            <p className="is-size-5 has-text-centered">{message}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Message;
