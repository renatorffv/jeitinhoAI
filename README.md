# JeitinhoAI

Site institucional da **JeitinhoAI** — _Tecnologia com IA, do seu jeito._

Feito com [Next.js](https://nextjs.org) (Node.js), pronto para deploy no [Vercel](https://vercel.com).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Estrutura

- `app/page.js` — página inicial (hero, serviços, como funciona, diferenciais, FAQ, contato)
- `app/globals.css` — estilos e paleta da marca
- `components/site.js` — **textos, serviços e contatos** (WhatsApp, e-mail) — edite aqui
- `components/Logo.js` — logotipo em SVG
- `components/ContactForm.js` — formulário que abre o WhatsApp com a mensagem pronta

## Deploy no Vercel

1. Suba o projeto para o GitHub.
2. No Vercel, clique em **Add New → Project** e importe o repositório.
3. O framework Next.js é detectado automaticamente — é só clicar em **Deploy**.
