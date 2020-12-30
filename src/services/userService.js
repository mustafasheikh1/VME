import http from "./httpService";
import { apiUrl } from "../utils/config.json";

const apiEndpoint = apiUrl + "/users";

export function getUsers() {
  return http.get(apiEndpoint);
}

export function deleteMovie(userId) {
  return http.delete(apiEndpoint + "/" + userId);
}

export function getUser(id) {
  return http.get(apiEndpoint + "/" + id);
}
