export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white">
      {children}
    </section>
  );
}
