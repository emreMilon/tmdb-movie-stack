import * as React from "react";
import { FC } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "../styles/Card.scss";
import { useHistory } from "react-router-dom";

interface MovieCardProps {
  movie: {
    name: string;
    overview: string;
    title: string;
    first_air_date: string;
    release_date: string;
    poster_path: string;
    id: number;
  };
  setDet: () => void;
}

const baseImageUrl = "http://image.tmdb.org/t/p/w500";

const RecipeReviewCard: FC<MovieCardProps> = ({ movie, setDet }) => {
  const history = useHistory();
  const onDetail = () => {
    setDet();
    history.push(`detailed/${movie?.id}`);
  };
  return (
    <div onClick={onDetail} key={movie?.id}>
      <Card sx={{ maxWidth: 345 }} className="Card">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="movie">
              {movie?.name ? movie?.name[0] : movie?.title[0]}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={movie?.name ? movie?.name : movie?.title}
          subheader={
            movie?.first_air_date ? movie?.first_air_date : movie?.release_date
          }
        />
        <CardMedia
          component="img"
          height="194"
          image={
            movie?.poster_path
              ? baseImageUrl + movie?.poster_path
              : "https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png"
          }
          alt={movie?.name ? movie?.name : movie?.title}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            className="overview"
          >
            {movie?.overview}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className="CardActions">
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default RecipeReviewCard;
