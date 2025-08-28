"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

export function RegisterButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full"
    >
      {pending ? "Criando conta..." : "Criar Conta"}
    </Button>
  );
}