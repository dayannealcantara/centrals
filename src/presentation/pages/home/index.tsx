import { Title } from "@components/core/title";

import * as styles from "./styles/home-page.css";

export const HomePage = () => {
  return (
    <div className={styles.containerPage}>
      <Title.Root size="medium">
        <Title.Text>Bem-vindos a central da Intelbras-Defense </Title.Text>
      </Title.Root>
    </div>
  );
};
