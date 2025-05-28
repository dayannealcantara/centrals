"use client";

import { useState } from "react";
import { ConfirmModal } from "@components/core/modalConfirm";
import { TrashIcon } from "@components/icons/trash";

import { TableControlsProps } from "./types";
import { createModelMap } from "../../utils/createModelMap";

import { useDeleteCentral } from "../../../hooks/useDeleteCentral";
import { useSortableData } from "../../../hooks/useSortableData";
import { useCentralStore } from "../../../store/centralStore";
import { Central } from "../../../types/central";

import * as styles from "./styles/table-controls.css";

export const TableControls = ({
  onEdit,
  centralsFilter,
}: TableControlsProps) => {
  const [centralToDelete, setCentralToDelete] = useState<Central | null>(null);
  const { sortedData: sortedCentrals, toggleSort } = useSortableData(
    centralsFilter,
    "name",
  );

  const { mutate: deleteMutate } = useDeleteCentral();
  const models = useCentralStore((state) => state.models);
  const modelMap = createModelMap(models);

  const handleDelete = (id: number) => {
    deleteMutate(id, {
      onSuccess: () => {
        setCentralToDelete(null);
      },
    });
  };

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th
              className={`${styles.tableHeader} ${styles.sortableHeader}`}
              onClick={() => toggleSort("name")}
            >
              Nome
            </th>
            <th
              className={`${styles.tableHeader} ${styles.sortableHeader}`}
              onClick={() => toggleSort("modelId")}
            >
              Modelo
            </th>
            <th className={styles.tableHeader}>MAC</th>
            <th className={styles.tableHeader}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {sortedCentrals.map((central) => (
            <tr key={central.id}>
              <td
                className={`${styles.tableCell} ${styles.clickableCell}`}
                onClick={() => onEdit(central)}
              >
                {central.name}
              </td>
              <td className={styles.tableCell}>
                {modelMap.get(central.modelId)}
              </td>
              <td className={styles.tableCell}>{central.mac}</td>
              <td className={styles.tableCell}>
                <button
                  onClick={() => setCentralToDelete(central)}
                  className={styles.deleteButton}
                >
                  <TrashIcon customSize="3rem" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {centralToDelete && (
        <ConfirmModal
          message={`Deseja excluir  "${centralToDelete.name}"?`}
          onConfirm={() => handleDelete(centralToDelete.id)}
          onCancel={() => setCentralToDelete(null)}
        />
      )}
    </div>
  );
};
