# Deployment Instructions

## Vercel
O projeto agora possui um arquivo `vercel.json` na raiz. Ao importar o projeto no Vercel, ele detectará automaticamente as configurações corretas:
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

## Cloudflare Pages
Ao criar um projeto no Cloudflare Pages, conecte o seu repositório e certifique-se de configurar:
- **Framework Preset:** Selecione `None` ou `Vite`.
- **Build Command:** `npm run build`
- **Build Output Directory:** `dist`

## GitHub Pages
Para fazer o deploy no GitHub Pages sem domínio customizado, você precisa de duas coisas:

1. **Vite Config Base Path:** O GitHub Pages hospeda seu site em `https://<usuario>.github.io/<nome-do-repositorio>/`. Devido a isso, você **DEVE** editar o arquivo `vite.config.js` e descomentar a linha `base`, alterando-a para o nome exato do seu repositório. Exemplo: Se o repositório for `landing-page`, configure `base: '/landing-page/'`.

2. **GitHub Actions (Recomendado):** Crie um arquivo em `.github/workflows/deploy.yml` para compilar o Vite e fazer o deploy da pasta `dist` automaticamente. Exemplo de workflow:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches:
      - main
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Lembre-se de ir nas configurações do seu repositório no GitHub -> Pages -> Build and deployment -> Source e selecionar **GitHub Actions**.

---
**Nota sobre o Erro 404:**
O erro 404 e o problema de MIME Type (`text/jsx`) que você enfrentou ocorreram porque as plataformas estavam tentando servir o código-fonte (a raiz do projeto) em vez do código compilado. O Vite requer que um servidor estático sirva a pasta `dist` que é gerada após rodar `npm run build`. As instruções acima garantem que o servidor leia a pasta correta com os arquivos HTML e JS já transpilados.
