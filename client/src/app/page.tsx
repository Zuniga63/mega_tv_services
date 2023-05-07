"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col justify-center items-center min-h-screen w-10/12 mx-auto">
      <section className="mb-10">
        <h1 className="text-center text-4xl text-blue-600 lg:text-6xl max-w-xl mb-8 font-display">
          The Best TV Service around!
        </h1>
        <p className="text-center font-sans">
          Are you ready to enjoy ultra-best service
        </p>
      </section>
      <Button onClick={() => router.push("/subscription")}>
        Let&apos;s do it
      </Button>
    </main>
  );
}
