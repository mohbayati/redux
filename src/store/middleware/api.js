import Axios from "axios";
import { apiCallBegin, apiCallFailed, apiCallSuccess } from "../api";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== apiCallBegin.type) return next(action);
    const { url, method, data, onStart, onSuccess, onError } = action.payload;

    if (onStart)
      dispatch({
        type: onStart,
      });
    next(action);
    try {
      const response = await Axios.request({
        baseURL: "http://localhost:9001/api",
        url,
        method,
        data,
      });
      //Gerneral
      dispatch(apiCallSuccess(response.data));
      //Specific
      if (onSuccess)
        dispatch({
          type: onSuccess,
          payload: response.data,
        });
    } catch (error) {
      if (onError)
        dispatch({
          type: onError,
          payload: error.message,
        });
      //Gerneral
      dispatch(apiCallFailed(error.message));
    }
  };

export default api;
