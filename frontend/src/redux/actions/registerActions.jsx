import axios from "axios";
import { setAllInfo } from "../slices/registrationSlice";
export const saveAllInfoToDB = (allInfo) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/auth/register",
      allInfo
    );
    console.log("Response from backend:", response.data);

    // Dispatch action to update Redux state with the full data
    dispatch(setAllInfo(allInfo));
  } catch (error) {
    console.error("Error saving all info to database:", error);
  }
};
