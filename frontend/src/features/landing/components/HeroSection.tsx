import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";

export default function HeroSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-4xl">
          <h1
            className="
            text-5xl
            font-bold
            leading-tight
            "
          >
            Belanja Dalam
            Dunia Virtual 3D
          </h1>

          <p
            className="
            mt-6
            text-lg
            text-slate-400
            "
          >
            Jelajahi marketplace
            secara interaktif,
            dengarkan promosi seller,
            dan berbelanja layaknya
            berada di pusat perbelanjaan.
          </p>

          <div className="mt-8 flex gap-4">
            <Button>
              Masuk Marketplace
            </Button>

            <Button variant="secondary">
              Daftar Seller
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}