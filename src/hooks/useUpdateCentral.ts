import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateCentral } from "../services/centralServices";

export const useUpdateCentral = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCentral,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["centrals"] });
    },
  });
};
