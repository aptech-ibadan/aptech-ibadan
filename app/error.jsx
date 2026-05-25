"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <h2 className="text-xl font-semibold text-[#020B2D]">Something went wrong</h2>
      <p className="max-w-md text-sm text-gray-600">
        {error?.message || "An unexpected error occurred."}
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-lg bg-[#FFC107] px-5 py-2 text-sm font-semibold text-[#020B2D]"
      >
        Try again
      </button>
    </div>
  );
}
