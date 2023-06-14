import { baseUrl } from "../config/axios";
import { trending, post } from "./slice";

export const getTrending = () => {
  return (dispatch) => {
    baseUrl.get("best.json").then(
      ({
        data: {
          data: { children },
        },
      }) => {
        dispatch(trending(children));
      }
    );
  };
};

export const filter = (type) => {
  return (dispatch) => {
    baseUrl.get(`${type}.json`).then(
      ({
        data: {
          data: { children },
        },
      }) => {
        console.log(children);
        dispatch(post(children));
      }
    );
  };
};
