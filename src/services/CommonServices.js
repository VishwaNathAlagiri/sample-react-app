import Api from "./Api.js";

export default {
  getUserDetails(userID) {
    return Api()
      .get(`userDetails/${userID}`)
      .then(({ data }) => data)
      .catch((e) => e.response);
  },

  getOnTrack(userID) {
    return Api()
      .get(`OnTrack/${userID}`)
      .then(({ data }) => data)
      .catch((e) => e.response);
  },

  getOnDelayed(userID) {
    return Api()
      .get(`onDelayed/${userID}`)
      .then(({ data }) => data)
      .catch((e) => e.response);
  },

  getOnHold(userID) {
    return Api()
      .get(`onHold/${userID}`)
      .then(({ data }) => data)
      .catch((e) => e.response);
  },
};
