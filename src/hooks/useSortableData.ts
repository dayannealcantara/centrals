import { useMemo, useState } from "react";

type SortConfig<T> = {
  key: keyof T;
  direction: "asc" | "desc";
};

export function useSortableData<T>(data: T[], defaultKey: keyof T) {
  const [sortConfig, setSortConfig] = useState<SortConfig<T>>({
    key: defaultKey,
    direction: "asc",
  });

  const sortedData = useMemo(() => {
    const sorted = [...data];
    sorted.sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];

      if (typeof aVal === "string" && typeof bVal === "string") {
        return sortConfig.direction === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }

      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortConfig.direction === "asc" ? aVal - bVal : bVal - aVal;
      }

      return 0;
    });
    return sorted;
  }, [data, sortConfig]);

  const toggleSort = (key: keyof T) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return { sortedData, toggleSort, sortConfig };
}
