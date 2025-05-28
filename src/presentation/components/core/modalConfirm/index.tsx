"use client";

import { Title } from "@components/core/title";

import { ConfirmModalProps } from "./types";

import * as styles from "./styles/modal-confirm.css";

export const ConfirmModal = ({
  message,
  onConfirm,
  onCancel,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
}: ConfirmModalProps) => {
  return (
    <div className={styles.wrapperModal}>
      <div className={styles.modal}>
        <div className={styles.containerModal}>
          <Title.Root size="medium">
            <Title.Text className={styles.title}>{message}</Title.Text>
          </Title.Root>
          <div className={styles.buttonGroup}>
            <button onClick={onCancel} className={styles.button}>
              {cancelLabel}
            </button>
            <button onClick={onConfirm} className={styles.button}>
              {confirmLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
