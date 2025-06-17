import { Zap, FileText, Settings, Users } from "lucide-react";

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const BentoCard = ({
  title,
  description,
  icon,
  className = "",
}: BentoCardProps) => {
  return (
    <div
      className={`bg-white/5 backdrop-blur-xl border border-white/30 rounded-3xl p-8 flex flex-col items-center text-center hover:bg-white/10 hover:border-white/40 transition-all duration-500 shadow-2xl shadow-black/20 ${className}`}
    >
      <div className="text-[#ffffe4] mb-6 p-4 bg-white/15 backdrop-blur-sm rounded-full border border-white/20 shadow-lg">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[#ffffe4] mb-4 uppercase tracking-wide">
        {title}
      </h3>
      <p className="text-[#ffffe4]/90 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const Grid = () => {
  const features = [
    {
      title: "Fast Funding",
      description:
        "Get approved and funded within 24 hours. Our streamlined process ensures you receive grants quickly.",
      icon: <Zap size={32} />,
    },
    {
      title: "Easy Application",
      description:
        "Simple, straightforward application process. No complex paperwork or lengthy requirements.",
      icon: <FileText size={32} />,
    },
    {
      title: "Flexible Terms",
      description:
        "Customizable grant conditions that adapt to your project needs and timeline requirements.",
      icon: <Settings size={32} />,
    },
    {
      title: "Expert Support",
      description:
        "Dedicated support team to guide you through every step of the funding process.",
      icon: <Users size={32} />,
    },
  ];

  const cardSizes = [
    "col-span-2", // Card 1 - wider
    "col-span-1", // Card 2 - smaller
    "col-span-1", // Card 3 - smaller
    "col-span-2", // Card 4 - wider
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <BentoCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            className={`min-h-[200px] ${cardSizes[index]}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
