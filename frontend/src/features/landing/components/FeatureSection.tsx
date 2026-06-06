import Card from "@/components/ui/Card/Card";
import Container from "@/components/ui/Container/Container";

const features = [
  {
    title: "Marketplace 3D",
    desc: "Jelajahi toko virtual."
  },
  {
    title: "Live Chat",
    desc: "Chat langsung dengan seller."
  },
  {
    title: "Promo Audio",
    desc: "Dengar promosi terdekat."
  }
];

export default function FeatureSection() {
  return (
    <section className="py-20">
      <Container>
        <div
          className="
          grid
          gap-6
          md:grid-cols-3
          "
        >
          {features.map((feature) => (
            <Card key={feature.title}>
              <h3 className="font-bold">
                {feature.title}
              </h3>

              <p className="mt-2 text-slate-400">
                {feature.desc}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}