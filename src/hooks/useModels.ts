import { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";

import { getModels } from "../services/centralServices";
import { useCentralStore } from "../store/centralStore";
import { Model } from "../types/models.t";

export function useFetchModels() {
  const setModels = useCentralStore((state) => state.setModels);

  const { data, isLoading, error } = useQuery<Model[], Error>({
    queryKey: ["models"],
    queryFn: getModels,
  });

  useEffect(() => {
    if (data) {
      setModels(data as Model[]);
    }
  }, [data, setModels]);

  return { data, isLoading, error };
}
