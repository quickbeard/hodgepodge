import { ThemeToggle } from "@/components/buttons/ThemeToggle";
import DemoMultiSelect from "@/components/DemoMultiSelect";

import { auth } from "@/server/auth";

export default async function Home() {
  const session = await auth();

  return (
    <>
      <ThemeToggle />
      <DemoMultiSelect />
    </>
  );
}
