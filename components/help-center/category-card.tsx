// components/help-center/category-card.tsx
import Link from "next/link";

type CategoryCardProps = {
  title: string;
  description: string;
  articlesCount: number;
  href: string;
};

export function CategoryCard({ title, description, articlesCount, href }: CategoryCardProps) {
  return (
    <Link href={href} className="block bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <span className="text-sm text-gray-500">{articlesCount} articles</span>
    </Link>
  );
}
