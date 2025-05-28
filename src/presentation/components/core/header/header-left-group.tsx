"use client";

import { FC } from "react";
import classNames from "classnames";

import { headerLeftGroupStyle } from "./styles/header-left-group.css";
import { HeaderRootProps } from "./types";
import { CentralCounter } from "@components/centralCounter";
import { useCentralStore } from "../../../../store/centralStore";

export const HeaderLeftGroup: FC<HeaderRootProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(headerLeftGroupStyle, className);
  const centrals = useCentralStore((state) => state.centrals);

  return (
    <div {...rest} className={classes}>
      <CentralCounter centralCount={centrals?.length} />
    </div>
  );
};
