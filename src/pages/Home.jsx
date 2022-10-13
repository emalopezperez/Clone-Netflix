import Main from "../components/Main";
import Filas from "../components/Filas";
import requests from "../Request";

const Home = () => {
  return (
    <>
      <Main />
      <Filas
        filasId="1"
        titulo="Próximamente"
        fetchUrl={requests.requestUpcoming}
      />
      <Filas filasId="2" titulo="Popular" fetchUrl={requests.requestPopular} />
      <Filas
        filasId="3"
        titulo="Tendencias"
        fetchUrl={requests.requestTrending}
      />
      <Filas
        filasId="4"
        titulo="Los más valorados"
        fetchUrl={requests.requestTopRated}
      />
      <Filas filasId="5" titulo="Horror" fetchUrl={requests.requestHorror} />
    </>
  );
};

export default Home;
