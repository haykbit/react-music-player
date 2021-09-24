import axios from "axios";
import { getCurrentUserToken } from "../services/auth";

export async function syncUserData(user) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_API_BASE_URL}/users/login`,
    data: { user },
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

export async function updateUserProfile(id, user) {
  const userToken = await getCurrentUserToken();

  return axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_API_BASE_URL}/users/${id}`,
    data: { ...user },
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}
