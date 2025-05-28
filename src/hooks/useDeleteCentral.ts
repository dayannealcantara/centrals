import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteCentral } from "../services/centralServices";

export function useDeleteCentral() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCentral,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["centrals"] });
    },
  });
}
