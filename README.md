# Gym Log

PWA para registrar carga e séries de treino na academia. React 19 + TypeScript + Vite, sem backend — os dados ficam no `localStorage` do dispositivo.

## Comandos

| Tarefa | Comando |
| --- | --- |
| Dev server | `yarn dev` |
| Build | `yarn build` |
| Typecheck | `yarn typecheck` |
| Preview do build | `yarn preview` |

## Funcionalidades

A tela inicial é o **histórico**; o registro abre num sheet pelo botão flutuante *Registrar*.

- **Registrar** — nome do aparelho (com autocomplete dos já usados), data preenchida com o dia atual, e três tipos de série:
  - **Carga fixa** — mesmo peso e reps em todas as séries
  - **Progressão de carga** — mantém as reps e sobe o peso a cada série
  - **Pirâmide crescente** — sobe o peso e reduz as reps a cada série

  O gerador monta as séries a partir de séries/reps/peso/incremento, e cada série ainda pode ser editada na mão.
- **Último treino** — ao digitar um exercício já registrado, aparece o que foi feito da última vez, com botão *Repetir*.
- **Histórico** — tela inicial: treinos por dia, com volume total, busca por exercício e remoção.
- **Evolução** — por exercício: recorde de carga, variação vs. o treino anterior e os últimos treinos.
- **Backup** — exportar/importar JSON e limpar tudo.

## Persistência

Chave `gym-log:sessions:v1` no `localStorage` (`src/lib/storage.ts`), formato `{ "YYYY-MM-DD": ExerciseEntry[] }`. Não há sincronização entre dispositivos — use *Exportar* para backup.

## PWA

`vite-plugin-pwa` com `registerType: 'autoUpdate'` e precache do app shell, então funciona offline. Instalável pelo navegador do celular ("Adicionar à tela de início").
