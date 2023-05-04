import { useQuery, UseQueryResult } from "react-query";
import { INews } from "./types";

import api from "../../../api";
import { API_KEY, API_URL } from "../../../lib/constants";

type QueryType = () => UseQueryResult<INews, unknown>;

export const useNewsQuery: QueryType = () => {
  return useQuery(
    ["news"],
    async ({ signal }) => {
      const { data: news } = await api.get(
        `https://newsapi.org/v2/top-headlines?country=ru&category=business&apiKey=25c771dec4fb42b68c9f193e107be19f`,
        {
          signal,
        }
      );

      return news;
    },
    { refetchOnMount: true }
  );
};
