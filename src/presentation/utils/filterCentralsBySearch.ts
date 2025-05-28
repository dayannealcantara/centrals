import { Central } from "../../types/central";
import { Model } from "../../types/models.t";

import { createModelMap } from "./createModelMap";

export function filterCentralsBySearch(
  centrals: Central[],
  models: Model[],
  searchTerm: string,
): Central[] {
  const modelMap = createModelMap(models);

  return centrals.filter((central) => {
    const lowerName = central.name.toLowerCase();
    const modelName = modelMap.get(central.modelId) || "";
    const lowerModelName = modelName.toLowerCase();
    const lowerSearch = searchTerm.toLowerCase();

    return (
      lowerName.includes(lowerSearch) || lowerModelName.includes(lowerSearch)
    );
  });
}
