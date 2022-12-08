import { RESTAURANT_LIST_FAIL, RESTAURANT_LIST_SUCCESS } from "../constants";

export const restaurantReducer = (state = { restaurant: [] }, action) => {
  switch (action.type) {
    case RESTAURANT_LIST_SUCCESS:
      console.log("reducer",action.payload)
      return { restaurant: action.payload ,
      };
    case RESTAURANT_LIST_FAIL:
      return { restaurant: action.error   };
    default:
      return state;
  }
};
