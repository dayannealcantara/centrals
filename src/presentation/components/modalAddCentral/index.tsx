"use client";

import { Title } from "@components/core/title";
import { FormControl } from "@components/formControl";

import * as styles from "./styles/modal-cadatro.css";

interface CreateCentralModalProps {
  onClose: () => void;
  central?: {
    id: number;
    name: string;
    mac: string;
    modelId: number;
  };
}

export const CreateCentralModal = ({
  onClose,
  central,
}: CreateCentralModalProps) => {
  const isEdit = !!central;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.headerModal}>
          <Title.Root size="large">
            <Title.Text className={styles.title}>
              {isEdit ? "Editar Central" : "Criar Central"}
            </Title.Text>
          </Title.Root>
          <button onClick={onClose} className={styles.closeButton}>
            <Title.Root size="large">
              <Title.Text className={styles.title}>X</Title.Text>
            </Title.Root>
          </button>
        </div>
        <FormControl onClose={onClose} initialData={central} />
      </div>
    </div>
  );
};
