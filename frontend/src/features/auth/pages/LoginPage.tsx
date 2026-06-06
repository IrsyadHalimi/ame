import Card from "@/components/ui/Card/Card";
import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button/Button";

export default function LoginPage() {
  return (
    <Card>
      <div className="w-[400px]">
        <h1 className="mb-6 text-2xl font-bold">
          Login
        </h1>

        <div className="space-y-4">
          <Input
            placeholder="Email"
          />

          <Input
            type="password"
            placeholder="Password"
          />

          <Button
            className="w-full"
          >
            Masuk
          </Button>
        </div>
      </div>
    </Card>
  );
}