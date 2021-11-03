import { FC, useState, useEffect } from "react";
import MovieCard from "./CardMovie";
import "../styles/TrendMovies.scss";
import { Movie } from "../store/MovieStore";
import { useHistory } from "react-router-dom";

interface Props {
  data: any[];
  setDet: () => void;
}

const TrendMovies: FC<Props> = ({ data, setDet }) => {
  const history = useHistory();
  const baseImageUrl = "http://image.tmdb.org/t/p/w500";

  const [trend1, setTrend1] = useState(0);
  const [trend2, setTrend2] = useState(1);
  const [trend3, setTrend3] = useState(2);
  const [counter, setCounter] = useState(1);

  const carosel = () => {
    setTimeout(() => [setTrend1(3), setTrend2(4), setTrend3(5)], 3000);
    setTimeout(() => [setTrend1(6), setTrend2(7), setTrend3(8)], 6000);
    setTimeout(() => [setTrend1(9), setTrend2(10), setTrend3(11)], 9000);
    setTimeout(() => [setTrend1(12), setTrend2(13), setTrend3(14)], 12000);
    setTimeout(() => [setTrend1(15), setTrend2(16), setTrend3(17)], 15000);
    setTimeout(() => [setTrend1(18), setTrend2(19), setTrend3(1)], 18000);
    setTimeout(() => [setTrend1(0), setTrend2(1), setTrend3(2)], 21000);
    setTimeout(() => [setCounter(counter + 1)], 23000);
  };

  useEffect(() => {
    carosel();
    return () => {
      clearTimeout();
    };
  }, [counter]);

  return (
    <>
      <h1>Welcome to Movie Stack</h1>
      <div className="TrendMovies">
        <MovieCard movie={data[trend1]} setDet={setDet} />
        <MovieCard movie={data[trend2]} setDet={setDet} />
        <MovieCard movie={data[trend3]} setDet={setDet} />
        <ul className="TrendList">
          <h3> The Most Watched </h3>
          {data &&
            data.map((movie: Movie) => (
              <li
                key={movie.id}
                onClick={() => [
                  history.push(`detailed/${movie?.id}`),
                  setDet(),
                ]}
              >
                <p className="title">
                  {" "}
                  {movie?.name ? movie?.name : movie?.title}{" "}
                </p>
                <p className="date">{movie?.vote_average}</p>
                <img
                  alt={movie?.poster_path}
                  src={
                    movie.poster_path
                      ? baseImageUrl + movie?.poster_path
                      : "https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png"
                  }
                />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default TrendMovies;
