"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SearchParamsHandler({
  onUpdate,
}: {
  onUpdate: (name: string | null) => void;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const name = searchParams.get("route");
    if (name) {
      onUpdate(name);
      router.replace("/", { scroll: false }); // Remove query params after processing
    }
  }, [searchParams, onUpdate, router]);

  return null; // This component doesn't render anything
}
