type SectionTitleProps = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-14 text-center">

      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-purple-300">
        {subtitle}
      </p>

      <h2 className="text-4xl font-bold md:text-5xl">
        {title}
      </h2>

    </div>
  );
}