# 📐 Regras — Stacks, Clean Code, Documentação e Componentização

## 🎯 Objetivo
- Garantir código limpo, consistente, bem documentado e componível.  
- Respeitar os padrões da aplicação e boas práticas de arquitetura.  

---

## 🧭 Princípios Gerais
- Preferir clareza sobre esperteza; código deve ser fácil de ler por outro dev.  
- Funções/métodos: curtos, única responsabilidade, nomes descritivos.  
- Evitar duplicação (DRY) — extrair utilitários ou hooks quando fizer sentido.  
- Manter baixo acoplamento e alta coesão.  
- Aplicar **YAGNI** (You Aren’t Gonna Need It).  
- Aplicar **KISS** (Keep It Simple, Stupid).  
- 
---

## 🔤 Nomenclatura
- **Variáveis/props**: camelCase.  
- **Componentes/classes**: PascalCase.  
- **Constantes globais**: UPPER_SNAKE_CASE.  
- **Arquivos/pastas**: kebab-case.  
- Evitar abreviações ambíguas; usar siglas apenas se forem padrão do domínio.  

---

## 🎨 Componentização (Front-end / UI)
- Componentes pequenos, previsíveis, com única responsabilidade.  
- Props mínimas, tipadas e documentadas.  
- Preferir **composição** a boolean flags.  
- Separar **Container (estado)** de **Presentation (UI)**.  
- Estilos isolados ( Tailwind).  
- Componentes reutilizáveis devem ter exemplo/story associado.  

---

## 📂 Estrutura de Projeto
- Seguir arquitetura definida:  
  - `src/components`  
  - `src/pages`  
  - `src/services`  
  - `src/hooks`  
  - `src/models`  
- Usar barrel files (`index.ts`) apenas quando fizer sentido.  

---

## 📚 Documentação
- Cada módulo público deve ter comentário de topo explicando propósito.  
- Funções e componentes exportados devem ter docstring com parâmetros e retorno.  
- Criar **README** por pacote/componente com exemplos de uso e notas de integração.  
- Manter **CHANGELOG** atualizado (semver-friendly).  

---

## 🛠️ Qualidade e Ferramentas
- Linter + formatter obrigatórios (**ESLint + Prettier**).  
- TypeScript no modo estrito (`strict`).  
- Uso de `any` deve ser evitado; se necessário, justificar em comentário.  
- Cobertura mínima de testes definida pelo time (ex.: **80%**).  
- Testes unitários para lógica, integração para fluxos principais.  
- Testes devem rodar no **CI**.  

---

## 🔍 Revisão e Pull Requests
- PRs pequenos (< 400 linhas preferencialmente).  
- Descrição clara: objetivo, mudanças, como testar.  
- **Checklist PR**:  
  - [ ] Lint/formatter aplicados  
  - [ ] Tipos definidos (sem `any` solto)  
  - [ ] Testes passaram  
  - [ ] Documentação atualizada (README/CHANGELOG)  
  - [ ] Screenshots/videos se houver alteração visual  
- Reviewers devem focar em: legibilidade, arquitetura e impacto no domínio.  

---

## 🔒 Segurança
- Nunca commitar secrets, chaves ou tokens.  
- Usar **variáveis de ambiente** e vaults seguros.  
- Validar e sanitizar entradas externas.  
- Seguir guidelines **OWASP** e internas do time.  

---

## 📦 Dependências e Performance
- Avaliar antes de adicionar dependência (peso, manutenção, comunidade).  
- Preferir libs leves e bem documentadas.  
- Atualizar dependências regularmente (**Dependabot/Renovate**).  
- Monitorar **bundle size** e **runtime** em mudanças significativas.  

---

## 🛡️ Manutenibilidade
- Refatorar de forma incremental, sempre com testes cobrindo comportamento.  
- Evitar breaking changes sem documentação e versionamento adequado (**semver**).  
- Garantir backward compatibility ou fornecer migração clara.  

---

## ✅ Checklist Final (antes do merge)
- [ ] Código legível e comentado quando necessário  
- [ ] Linter/formatter aplicados  
- [ ] Tipos definidos corretamente  
- [ ] Testes cobrindo novas lógicas  
- [ ] Documentação e exemplos atualizados  
