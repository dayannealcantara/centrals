import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createCentral } from "../services/centralServices";

export function useCreateCentral() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCentral,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["centrals"] });
    },
  });
}
