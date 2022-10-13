import Main from "../components/Main";
import Filas from "../components/Filas";
import requests from "../Request";

const Home = () => {
  return (
    <>
      <Main />
      <Filas titulo="Up Coming" fetchUrl={requests.requestUpcoming} />
      <Filas titulo="Popular" fetchUrl={requests.requestPopular} />
      <Filas titulo="Trending" fetchUrl={requests.requestTrending} />
      <Filas titulo="Top Rated" fetchUrl={requests.requestTopRated} />
      <Filas titulo="Horror" fetchUrl={requests.requestHorror} />
    </>
  );
};

export default Home;
