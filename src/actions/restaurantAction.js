import { RESTAURANT_LIST_SUCCESS, RESTAURANT_LIST_FAIL } from "../constants";
import axios from "axios";
export const  listRestaurants= () => async (dispatch) => {
  try {
    const { data } = await axios.get("res.json");
    console.log("data is",data.restaurants)
    dispatch({
      type: RESTAURANT_LIST_SUCCESS,
      payload: data.restaurants
    });
  } catch (error) {
    dispatch({
      type: RESTAURANT_LIST_FAIL,
      error: error
    });
  }
  
};
