import ModernTemplate from "@/components/templates/modern/ModernTemplate";
import RusticTemplate from "@/components/templates/rustic/RusticTemplate";
import { notFound } from "next/navigation";

const dummyData = {
  groomName: "Ruspian",
  brideName: "Anik",
  date: new Date("2026-12-25T10:00:00"),
  location: "Villa Alam Asri, Bandung",
  coverImageUrl:
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070&auto=format&fit=crop",
};

interface PageProps {
  params: Promise<{ theme: string }>;
}

export default async function DemoPage({ params }: PageProps) {
  const resolvedParams = await params;
  const theme = resolvedParams.theme;

  let TemplateComponent;

  switch (theme) {
    case "modern":
      TemplateComponent = <ModernTemplate {...dummyData} />;
      break;
    case "rustic":
      TemplateComponent = <RusticTemplate {...dummyData} />;
      break;
    default:
      return notFound();
  }

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center py-0 lg:py-10">
      {TemplateComponent}
    </div>
  );
}
