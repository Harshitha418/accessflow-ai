type FeatureCardProps = {
  title: string;
  description: string;
};

export default function FeatureCard({
  title,
  description,
}: FeatureCardProps) {
  return (
  <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-purple-500/30 hover:bg-white/10">

    <h2 className="text-2xl font-semibold transition group-hover:text-purple-300">
      {title}
    </h2>

    <p className="mt-4 text-gray-400">
      {description}
    </p>

  </div>
);
}