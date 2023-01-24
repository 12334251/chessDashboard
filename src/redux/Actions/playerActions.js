import { axiosGet } from "../axios";
import {
  GET_PLAYERLIST_FAIL,
  GET_PLAYERLIST_REQUEST,
  GET_PLAYERLIST_SUCCESS,
  GET_PLAYERDETAILS_FAIL,
  GET_PLAYERDETAILS_REQUEST,
  GET_PLAYERDETAILS_SUCCESS,
} from "../types/playerConstant";

export const getPlayerListActions = (currentPage) => async (dispatch) => {
  try {
    // console.log("Data")
    dispatch({ type: GET_PLAYERLIST_REQUEST });
    // console.log("Data2")

    const { data } = await axiosGet(`https://api.chess.com/pub/leaderboards`);
    // const {data} = await axiosGet(`https://PLAYER-task.vercel.app/api/popular?page`);

    dispatch({
      type: GET_PLAYERLIST_SUCCESS,
      payload: data.daily,
    });
    return data;
  } catch (error) {
    dispatch({
      type: GET_PLAYERLIST_FAIL,
      payload: error.response && error?.response?.data?.detail,
    });
  }
};

export const getPlayerDetailsActions = (playerId) => async (dispatch) => {
  try {

    dispatch({ type: GET_PLAYERDETAILS_REQUEST });

    const { data } = await axiosGet(`https://api.chess.com/pub/player/${playerId}`);

    dispatch({
      type: GET_PLAYERDETAILS_SUCCESS,
      payload: data,
    });
    return data;
  } catch (error) {
    dispatch({
      type: GET_PLAYERDETAILS_FAIL,
      payload: error.response && error?.response?.data?.detail,
    });
  }
};