"use client";
import { usePathname, useRouter } from "next/navigation";
import CounterValue from "./component/CounterValue";

export default function Home() {
  const pathname = usePathname();
  const router = useRouter();
  if (pathname === "/") {
    router.push("/shop");
  }
  return (
    <div>
      <CounterValue />
    </div>
  );
}
