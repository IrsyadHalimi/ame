import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";

export default function CTASection() {
  return (
    <section className="py-24">
      <Container>
        <div
          className="
          rounded-3xl
          border
          border-slate-800
          bg-slate-900
          p-12
          text-center
          "
        >
          <h2 className="text-4xl font-bold">
            Siap Memasuki Marketplace?
          </h2>

          <div className="mt-8">
            <Button>
              Mulai Sekarang
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}