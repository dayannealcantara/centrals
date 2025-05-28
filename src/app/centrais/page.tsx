import HomeLayout from "@app/(inicio)/layout";
import { CentralsPage } from "@pages/centrals";

export default function Home() {
  return (
    <HomeLayout>
      <CentralsPage />
    </HomeLayout>
  );
}
