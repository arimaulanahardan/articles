import { useCallback, useEffect, useState } from "react";
import { IDataItem } from "@/interfaces";
import { fetchArticles } from "@/services/dataArticleService";

export const useFetchDataArticle = () => {
  const [data, setData] = useState<IDataItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetchArticles();
      setData(response.data);
    } catch (err) {
        console.error(err); 
      } finally {
        setLoading(false);
      }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading };
};