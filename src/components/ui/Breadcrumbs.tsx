import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbItem = { name: string; href: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1">
            {index > 0 && <ChevronRight className="h-4 w-4 shrink-0" aria-hidden />}
            {index === items.length - 1 ? (
              <span className="font-medium text-green-800" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-green-700 hover:underline">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
