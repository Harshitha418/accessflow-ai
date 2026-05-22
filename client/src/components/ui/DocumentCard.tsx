type DocumentCardProps = {
  name: string;
  uploadedAt: string;
  size: number;
};

export default function DocumentCard({
  name,
  uploadedAt,
  size,
}: DocumentCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">

      <p className="text-sm uppercase tracking-[0.3em] text-purple-300">
        Uploaded Document
      </p>

      <h3 className="mt-4 text-2xl font-semibold">
        {name}
      </h3>

      <div className="mt-6 space-y-2 text-sm text-gray-400">

        <p>
          Uploaded: {new Date(uploadedAt).toLocaleString()}
        </p>

        <p>
          Size: {(size / 1024).toFixed(2)} KB
        </p>

      </div>

    </div>
  );
}