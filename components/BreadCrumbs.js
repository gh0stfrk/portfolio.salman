"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname(); // Get the current path
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <nav className="text-sm text-gray-600 my-4">
      <ul className="flex items-center gap-2">
        <li>
          <div className="hover:underline">
            home
          </div>
        </li>
        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const isLast = index === pathSegments.length - 1;

          return (
            <li key={href} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-gray-500">{segment.toString().replace(/-/g, ' ')}</span>
              ) : (
                <Link href={href} className="hover:underline">
                  {segment.toString()}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;