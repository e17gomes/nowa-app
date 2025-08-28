"use client"

import { Shield, Star, Users, Zap } from "lucide-react";
import { usePathname } from "next/navigation";

export function AuthBrand() {
  const pathname = usePathname();
  const isRegister = pathname.includes('/register');
  return (
    <div className="flex flex-col justify-center items-center h-full bg-primary/20 text-primary p-8">
      <div className="text-center space-y-8">
        <div className="flex items-center justify-center gap-4">
          <span className="h-14 w-14 text-5xl text-center">🚀</span>
          <h1 className="text-6xl font-bold">Nowa</h1>
        </div>

        <div className="flex gap-3 justify-center">
          <span className="bg-foreground text-background px-5 py-2 rounded-full text-base font-medium flex items-center gap-2">
            <div className="h-5 w-5 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-sm flex items-center justify-center">
              <Star className="h-3 w-3 text-yellow-900" fill="currentColor" />
            </div>
            Novo
          </span>
          <span className="bg-foreground text-background px-5 py-2 rounded-full text-base font-medium flex items-center gap-2">
            <div className="h-5 w-5 bg-gradient-to-b from-gray-400 to-gray-600 rounded-sm flex items-center justify-center">
              <Shield className="h-3 w-3 text-gray-900" fill="currentColor" />
            </div>
            Seguro
          </span>
        </div>

        <div className="space-y-2">
          <p className="text-3xl font-bold">
            {isRegister 
              ? "🚀 Transforme suas ideias em realidade!"
              : "👋 Bem-vindo de volta!"
            }
          </p>
          <p className="text-xl opacity-90">
            {isRegister 
              ? "Junte-se a milhares de usuários que já estão criando o futuro. Comece sua jornada hoje mesmo!"
              : "Que bom te ver novamente! Continue de onde parou e alcance seus objetivos."
            }
          </p>
        </div>

        <div className="space-y-6 max-w-md">
          <div className="flex items-center gap-4 text-left">
            <div className="h-10 w-10 bg-gradient-to-b from-green-400 to-green-600 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-green-900" fill="currentColor" />
            </div>
            <span className="text-base opacity-75">
              Colaboração em tempo real
            </span>
          </div>
          <div className="flex items-center gap-4 text-left">
            <div className="h-10 w-10 bg-gradient-to-b from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="h-6 w-6 text-purple-900" fill="currentColor" />
            </div>
            <span className="text-base opacity-75">Performance otimizada</span>
          </div>
          <div className="flex items-center gap-4 text-left">
            <div className="h-10 w-10 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="h-6 w-6 text-blue-900" fill="currentColor" />
            </div>
            <span className="text-base opacity-75">Segurança avançada</span>
          </div>
        </div>
      </div>
    </div>
  );
}
