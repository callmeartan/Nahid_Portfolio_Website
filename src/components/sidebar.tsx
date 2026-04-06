import Link from "next/link";
import { cn } from "@/lib/utils";

type SidebarItem = {
  title: string;
  href: string;
  active?: boolean;
};

const sidebarItems: SidebarItem[] = [
  { title: "LLMs & RAG", href: "#", active: true },
  { title: "Multimodal AI", href: "#" },
  { title: "Computer Vision", href: "#" },
  { title: "Autonomous Systems", href: "#" },
];

export function Sidebar() {
  return (
    <aside className="w-full md:w-72 py-12 px-6">
      <div className="mb-10">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Machine Learning Engineer specializing in LLMs, multimodal AI, and autonomous systems.
        </p>
      </div>
      
      <nav className="space-y-1">
        {sidebarItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className={cn(
              "flex items-center py-4 px-3 rounded-md transition",
              item.active
                ? "bg-gray-100 dark:bg-gray-800"
                : "hover:bg-gray-50 dark:hover:bg-gray-900"
            )}
          >
            <span className={cn(
              "block w-2 h-2 rounded-full mr-3",
              item.active ? "bg-black dark:bg-white" : "bg-transparent"
            )} />
            <span className={cn(
              "font-medium",
              item.active ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400"
            )}>
              {item.title}
            </span>
          </Link>
        ))}
      </nav>
      
      <div className="mt-auto pt-8">
        <h3 className="text-sm font-medium mb-2">Connect</h3>
      </div>
    </aside>
  );
} 
