"use client";

import { useState } from "react";
import { TableControls } from "@components/tableControls";

import * as styles from "./styles/centrals-page.css";
import { CreateCentralModal } from "@components/modalAddCentral";

import { useFetchModels } from "../../../hooks/useModels";
import { useFetchCentrals } from "../../../hooks/useCentral";
import { Central } from "../../../types/central";
import { useCentralStore } from "../../../store/centralStore";
import { filterCentralsBySearch } from "../../utils/filterCentralsBySearch";

export const CentralsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCentral, setSelectedCentral] = useState<Central | undefined>(
    undefined,
  );
  const [searchTerm, setSearchTerm] = useState("");

  useFetchModels();
  useFetchCentrals();

  const centrals = useCentralStore((state) => state.centrals);
  const models = useCentralStore((state) => state.models);

  const handleEdit = (central: Central) => {
    setSelectedCentral(central);
    setIsModalOpen(true);
  };

  const filteredCentrals = filterCentralsBySearch(centrals, models, searchTerm);

  return (
    <div className={styles.containerPage}>
      <div className={styles.actions}>
        <input
          type="text"
          placeholder="Buscar por Nome ou Modelo"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <button
          className={styles.createButton}
          onClick={() => {
            setSelectedCentral(undefined);
            setIsModalOpen(true);
          }}
        >
          Criar Central
        </button>
      </div>

      <div className={styles.actions}>
        <TableControls onEdit={handleEdit} centralsFilter={filteredCentrals} />
      </div>

      {isModalOpen && (
        <CreateCentralModal
          onClose={() => setIsModalOpen(false)}
          central={selectedCentral ?? undefined}
        />
      )}
    </div>
  );
};
