function Hero(props) {
  return (
    <section className="hero has-background-dark">
      <div className="hero-body has-text-centered">
        <div className="block">
          <p className="title has-text-white">{props.heroData.title}</p>
        </div>
        <div className="block">
          <p className="subtitle has-text-white">
            {props.heroData.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
