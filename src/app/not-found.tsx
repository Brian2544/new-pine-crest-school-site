import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-8xl font-bold text-green-200">404</p>
      <h1 className="mt-4 font-serif text-3xl font-bold text-green-950">Page Not Found</h1>
      <p className="mt-4 max-w-md text-slate-600">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/">Go Home</Button>
        <Link href="/contact" className="text-green-800 underline hover:text-green-600">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
