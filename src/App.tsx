import React, { useCallback } from "react";
import "./App.css";
import { useStore } from "./context/StoreContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Navbar/Menu";
import TrendMovies from "./components/TrendMovies";
import DetailedPage from "./components/DetailedPage";
import CardList from "./components/CardList";
import Search from "./components/Search";
import CircularProgress from "./components/CircularProgress";
import "./styles/TrendMovies.scss";

function App() {
  const movieList = useStore();
  const [data, setData] = React.useState<any>([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [page, setPage] = React.useState(3);
  const [detail, setDetail] = React.useState(false);
  const [search, setSearch] = React.useState(false);
  const [hamburgerMenu, setHamburgerMenu] = React.useState(false);

  const getTrendies = useCallback(() => {
    setSearch(false);
    movieList.getTrendMovies().then(() => setData(movieList?.movieList));
    setDetail(false);
  }, [search]);

  const onSubmit = () => {
    try {
      movieList
        .getSearchedMovies(page, searchTerm)
        .then(() => setData(movieList?.movieList))
        .then(() => setSearch(true));
    } catch (err: any) {
      console.log(err);
    }
  };

  const setOpen = () => {
    setHamburgerMenu(!hamburgerMenu);
  };
  const setFalse = () => {
    setHamburgerMenu(false);
    getTrendies();
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  const loadBack = () => {
    setPage(page - 1);
  };

  const setDet = () => {
    setDetail(true);
  };

  React.useEffect(() => {
    getTrendies();
  }, [movieList]);

  return (
    <Router>
      {!data ? (
        <CircularProgress />
      ) : (
        <>
          {" "}
          <Navbar
            hamburgerMenu={hamburgerMenu}
            setOpen={setOpen}
            getTrendies={getTrendies}
          />
          <Menu hamburgerMenu={hamburgerMenu} setFalse={setFalse} />
          {!detail ? (
            <Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              onSubmit={onSubmit}
            />
          ) : null}
          <Switch>
            <Route path="/" exact>
              {search ? (
                <CardList
                  data={data}
                  page={page}
                  setDet={setDet}
                  loadMore={loadMore}
                  loadBack={loadBack}
                  onSubmit={onSubmit}
                />
              ) : (
                <TrendMovies data={data} setDet={setDet} />
              )}
            </Route>

            <Route path={`/detailed/:id`} component={DetailedPage} />
          </Switch>
          {/* <Footer /> */}{" "}
        </>
      )}
    </Router>
  );
}

export default App;
