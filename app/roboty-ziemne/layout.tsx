export default function PricingLayout({
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
