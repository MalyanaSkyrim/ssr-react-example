import axios from "axios";
const GITHUB_ACCESS_TOKEN = "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";
axios.defaults.baseURL = "https://api.github.com";

export const loadReposByPage = async (page) => {
  console.log("loadReposByPage", { page });
  const dateBefore = getDateBefore(30);
  const res = await axios.get(
    "/search/repositories?q=created:>" +
      dateBefore +
      "&sort=stars&order=desc&page=" +
      page
  );

  return { data: res, hasMore: page < 9 };
};

export const getUser = async (username) => {
  console.log("getUser", { username });
  const res = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Accept: "application/json",
      Authorization: GITHUB_ACCESS_TOKEN,
    },
  });

  return res.data;
};

const getDateBefore = (days) => {
  var today = new Date();
  today.setDate(today.getDate() - days);
  return today.toISOString().substring(0, 10).trim();
};
