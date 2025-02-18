import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import { Helmet } from "react-helmet-async";
import Footer from "./components/footer/Footer";

function App() {

  const routes = useRoutes([
    { path: "/", element: <Home/> },
  ])

  return (
    <>
    {/* SEO */}
      <Helmet>
        <title>Klöntalersee - Breathtaking Swiss Alps Views</title>
        <meta
          name="description"
          content="Discover the beauty of Klöntalersee, a hidden Swiss gem surrounded by breathtaking mountains."
        />
        <meta
          property="og:title"
          content="Klöntalersee - Breathtaking Swiss Alps Views"
        />
        <meta
          property="og:description"
          content="Discover the beauty of Klöntalersee, a hidden Swiss gem surrounded by breathtaking mountains."
        />
        <meta property="og:image" content="/assets/heroImg.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Klöntalersee - Breathtaking Swiss Alps Views"
        />
        <meta
          name="twitter:description"
          content="Discover the beauty of Klöntalersee, a hidden Swiss gem surrounded by breathtaking mountains."
        />
      </Helmet>
      <div className="app">
        <div className="content">{routes}</div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
