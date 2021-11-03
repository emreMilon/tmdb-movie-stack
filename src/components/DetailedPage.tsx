import { FC, useState, useEffect } from "react";
import { useParams } from "react-router";
import { useStore } from "../context/StoreContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../styles/DetailedCard.scss";

export type DetailedPageParams = {
  id: string;
};

const DetailedPage: FC = () => {
  const movieList = useStore();
  let { id } = useParams<DetailedPageParams>();
  let ids = Number(id);
  const [data, setData] = useState<any>([]);
  const getDetailedMovie = (ids: number) => {
    movieList.getDetailedMovie(ids).then(() => setData(movieList?.movieList));
  };
  const baseImageUrl = "http://image.tmdb.org/t/p/w500";

  useEffect(() => {
    getDetailedMovie(ids);
  }, [ids]);

  return (
    <div className="Container">
      <Card className="DetailedCard">
        <CardMedia
          className="media"
          component="img"
          height="140"
          image={
            data?.poster_path
              ? baseImageUrl + data?.poster_path
              : "https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png"
          }
          alt={data?.name ? data?.name : data?.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data?.name ? data?.name : data?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data?.overview}
          </Typography>
          <div className="div1">
            <Typography
              className="lang"
              variant="body2"
              color="textSecondary"
              component="p"
            >
              Language:{" "}
              <span className="spann">
                {" "}
                {data?.spoken_languages &&
                  data?.spoken_languages.map((language: any, index: number) => (
                    <span key={index}> {language.english_name} </span>
                  ))}{" "}
              </span>
            </Typography>
            <Typography
              className="lang"
              variant="body2"
              color="textSecondary"
              component="p"
            >
              Kind:{" "}
              {data?.adult ? (
                <span className="spann"> Adult </span>
              ) : (
                <span className="spann"> Family </span>
              )}
            </Typography>
            <Typography
              className="lang"
              variant="body2"
              color="textSecondary"
              component="p"
            >
              Release Date:{" "}
              <span className="spann"> {data?.release_date} </span>
            </Typography>
          </div>
          <div className="div1">
            <Typography
              className="lang"
              variant="body2"
              color="textSecondary"
              component="p"
            >
              Vote Average:{" "}
              <span className="spann"> {data?.vote_average} </span>
            </Typography>
            <Typography
              className="lang"
              variant="body2"
              color="textSecondary"
              component="p"
            >
              Votes: <span className="spann"> {data?.vote_count} </span>
            </Typography>
            <Typography
              className="lang"
              variant="body2"
              color="textSecondary"
              component="p"
            >
              Genres:{" "}
              <span className="spann">
                {data?.genres && data?.genres[0]?.name
                  ? data?.genres[0]?.name + ", " + data?.genres[1]?.name
                  : null}{" "}
              </span>
            </Typography>
          </div>

          <p className="link">
            {" "}
            <a href={data?.homepage}>
              Please click to send the movie homepage...
            </a>{" "}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailedPage;
