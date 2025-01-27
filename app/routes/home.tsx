
import { I18nProvider } from "@lingui/react";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New dqwdqwReact Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
        <ModeToggle/>
    <div>
      {/* <Trans>Hello</Trans>; */}

      <div className="m-10 p-10">
      </div>
      {/* <ParentComponent/> */}
      {/* <Button>Welcome To France</Button> */}
    </div>
    </>
  );
}
