import { FC } from "react";
import CardMovie from "./CardMovie";
import Button from "@mui/material/Button";
import "../styles/CardList.scss";

interface Props {
  data: any[];
  page: number;
  loadMore: () => void;
  loadBack: () => void;
  onSubmit: () => void;
  setDet: () => void;
}

const CardList: FC<Props> = ({
  data,
  page,
  loadMore,
  loadBack,
  onSubmit,
  setDet,
}) => {
  console.log(page);
  console.log(data[0]?.title);

  return (
    <div>
      <div className="CardList">
        {data &&
          data.map((movie: any) => (
            <CardMovie movie={movie} setDet={setDet} key={movie.id} />
          ))}
      </div>
      <div>
        {page === 1 ? (
          <Button variant="contained" onClick={() => [loadMore(), onSubmit()]}>
            Next Page
          </Button>
        ) : (
          <div>
            {" "}
            <Button
              variant="contained"
              onClick={() => [loadBack(), onSubmit()]}
            >
              Previous Page
            </Button>
            <Button
              variant="contained"
              onClick={() => [loadMore(), onSubmit()]}
            >
              Next Page
            </Button>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardList;
