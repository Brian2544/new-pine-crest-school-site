export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-live="polite">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-green-200 border-t-green-800" />
      <span className="sr-only">Loading page…</span>
    </div>
  );
}
