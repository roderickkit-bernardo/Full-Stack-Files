import "bulma/css/bulma.min.css";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  // JSON data used for this app
  const appConfig = {
    title: "Rogers-Bell Communications",
    description: "3 Internet Packages to choose from",
    internetPackages: [
      {
        title: "Ignite Internet 50",
        price: "$ 59.99 / month",
        listItems: [
          "50 Mbps download speed",
          "Powerful WiFi 6 technology",
          "Add Ignite Streaming for $5/month",
          "Wifi Satisfaction Guarantee",
        ],
      },
      {
        title: "Ignite Internet 150",
        price: "$ 69.99 / month",
        listItems: [
          "150 Mbps download speed",
          "Powerful WiFi 6 technology",
          "Add Ignite Streaming for $5/month",
          "Wifi Satisfaction Guarantee",
        ],
      },
      {
        title: "Ignite Internet 500",
        price: "$ 89.99 / month",
        listItems: [
          "500 Mbps download speed",
          "Powerful WiFi 6 technology",
          "Add Ignite Streaming for $5/month",
          "Wifi Satisfaction Guarantee",
        ],
      },
    ],
  };

  return (
    <>
      <Hero
        heroData={{
          title: appConfig.title,
          description: appConfig.description,
        }}
      ></Hero>
      <Content contentData={appConfig.internetPackages}></Content>
      <Footer></Footer>
    </>
  );
}

export default App;
