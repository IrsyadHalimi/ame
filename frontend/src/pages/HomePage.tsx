import Button from "@/components/ui/Button/Button";
import Card from "@/components/ui/Card/Card";
import Container from "@/components/ui/Container/Container";
import PageHeader from "@/components/ui/PageHeader/PageHeader";

export default function HomePage() {
  return (
    <Container>
      <div className="py-20">
        <PageHeader
          title="AME Marketplace"
          subtitle="Virtual Marketplace 3D"
        />

        <Card>
          <p className="mb-4">
            Selamat datang di AME
          </p>

          <Button>
            Masuk Marketplace
          </Button>
        </Card>
      </div>
    </Container>
  );
}