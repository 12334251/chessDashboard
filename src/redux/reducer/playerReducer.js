import {
    GET_PLAYERLIST_FAIL,
    GET_PLAYERLIST_REQUEST,
    GET_PLAYERLIST_SUCCESS,
    GET_PLAYERDETAILS_FAIL,
    GET_PLAYERDETAILS_REQUEST,
    GET_PLAYERDETAILS_SUCCESS,
  } from "../types/playerConstant";
  
  export const getPlayerList = (state = {}, action) => {
    switch (action.type) {
      case GET_PLAYERLIST_REQUEST:
        return { loading: true };
      case GET_PLAYERLIST_SUCCESS:
        return { loading: false, playerList: action.payload };
      case GET_PLAYERLIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const getPlayerDetails = (state = {}, action) => {
    switch (action.type) {
      case GET_PLAYERDETAILS_REQUEST:
        return { loading: true };
      case GET_PLAYERDETAILS_SUCCESS:
        return { loading: false, playerDetails: action.payload };
      case GET_PLAYERDETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };