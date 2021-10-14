import Axios from "axios";
import { apiCallBegin, apiCallFailed, apiCallSuccess } from "../api";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== apiCallBegin.type) return next(action);
    const { url, method, data, onSuccess, onError } = action.payload;
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
      //Gerneral
      dispatch(apiCallFailed({ error }));

      if (onError)
        dispatch({
          type: onError,
          payload: error,
        });
    }
  };

export default api;
