import axios from "axios";
import { getCurrentUserToken } from "../services/auth";

export async function syncUserData() {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_API_BASE_URL}/users/login`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function getUserProfile(id) {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_API_BASE_URL}/users/${id}`,
  });
}
