"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

const SearchParamsHandler = ({
  onUpdate,
}: {
  onUpdate: (id: string | null) => void;
}) => {
  return (
    <Suspense fallback={null}>
      <SearchParamsLogic onUpdate={onUpdate} />
    </Suspense>
  );
};

const SearchParamsLogic = ({
  onUpdate,
}: {
  onUpdate: (id: string | null) => void;
}) => {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");

  useEffect(() => {
    if (section) onUpdate(section);
  }, [section, onUpdate]);

  return null;
};

export default SearchParamsHandler;
