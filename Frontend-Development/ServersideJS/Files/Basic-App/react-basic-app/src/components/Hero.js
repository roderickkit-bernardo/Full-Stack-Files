function Hero(props) {
  return (
    <section class="hero has-background-dark">
      <div class="hero-body has-text-centered">
        <div class="block">
          <p class="title has-text-white">{props.heroData.title}</p>
        </div>
        <div class="block">
          <p class="subtitle has-text-white">{props.heroData.description}</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
