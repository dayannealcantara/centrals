import { Model } from "../../types/models.t";

export function createModelMap(models: Model[]): Map<number, string> {
  return new Map(models.map((model) => [Number(model.id), model.name]));
}
