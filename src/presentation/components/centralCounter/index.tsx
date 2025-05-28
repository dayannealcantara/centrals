"use client";

import React from "react";

import * as styles from "./styles/central-counter.css";

interface CountProps {
  centralCount: number;
}

export const CentralCounter = ({ centralCount }: CountProps) => {
  return (
    <div className={styles.contentCounterStyle}>
      Total de Centrais: {centralCount}
    </div>
  );
};
