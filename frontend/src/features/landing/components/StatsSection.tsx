import Container from "@/components/ui/Container/Container";

export default function StatsSection() {
  return (
    <section className="py-20">
      <Container>
        <div
          className="
          grid
          grid-cols-3
          gap-6
          text-center
          "
        >
          <div>
            <h2 className="text-4xl font-bold">
              100+
            </h2>

            <p>Produk</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">
              20+
            </h2>

            <p>Seller</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">
              500+
            </h2>

            <p>Transaksi</p>
          </div>
        </div>
      </Container>
    </section>
  );
}