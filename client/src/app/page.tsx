"use client";

import Button from "@/components/Button";
import { resetSubscription } from "@/features/Subscription";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();

  const goToSubscription = () => {
    dispatch(resetSubscription());
    router.push("/subscriptions");
  };

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
      <Button onClick={goToSubscription}>Let&apos;s do it</Button>
    </main>
  );
}
