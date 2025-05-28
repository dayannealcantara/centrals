import { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";

import { getCentrals } from "../services/centralServices";
import { useCentralStore } from "../store/centralStore";
import { Central } from "../types/central";

export function useFetchCentrals() {
  const setCentrals = useCentralStore((state) => state.setCentrals);

  const { data, isLoading, error } = useQuery<Central[], Error>({
    queryKey: ["centrals"],
    queryFn: async () => getCentrals(),
  });

  useEffect(() => {
    if (data) {
      setCentrals(data as Central[]);
    }
  }, [data, setCentrals]);

  return { data, isLoading, error };
}
