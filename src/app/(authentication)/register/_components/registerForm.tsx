import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PLACEHOLDERS } from "@/config/helper-texts";
import { SocialAuthButtons } from "@/components/social-auth-buttons";
import { AuthBrand } from "@/components/auth-brand";
import { RegisterButton } from "./registerButton";

export default function RegisterForm() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="flex items-center justify-center p-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Criar Conta</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={PLACEHOLDERS.EMAIL}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder={PLACEHOLDERS.PASSWORD}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                <Input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder={PLACEHOLDERS.PASSWORD}
                  required
                />
              </div>

              <RegisterButton />
              <SocialAuthButtons />
            </form>
          </CardContent>
        </Card>
      </div>
      <AuthBrand />
    </div>
  );
}