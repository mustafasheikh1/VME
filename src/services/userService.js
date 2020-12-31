import http from "./httpService";
import { apiUrl } from "../utils/config.json";

const apiEndpoint = apiUrl + "/users";

export function getUsers() {
  return http.get(apiEndpoint);
}

export function deleteUser(userId) {
  return http.delete(apiEndpoint + "/" + userId);
}

export function getUser(id) {
  return http.get(apiEndpoint + "/" + id);
}

export function saveUser(user) {
  if (user.id) {
    const body = { ...user };
    delete body.id;
    return http.put(apiEndpoint + "/" + user.id, body);
  }
  return http.post(apiEndpoint, user);
}
