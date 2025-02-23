export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white forced-color-none">
      {children}
    </section>
  );
}
