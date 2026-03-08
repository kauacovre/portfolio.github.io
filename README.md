# Portfólio — Kauã Covre Martins

Portfólio pessoal desenvolvido com HTML, CSS e JavaScript puro. Design minimalista, responsivo e com animações de scroll.

Acesse online: [kauacovre.github.io/portfolio.github.io](https://kauacovre.github.io/portfolio.github.io/)

---

## Estrutura do projeto

```
portfolio.github.io/
├── index.html              # Página principal
├── css/
│   ├── reset.css           # Normalização cross-browser
│   ├── tokens.css          # Variáveis de design (cores, fontes, espaçamentos)
│   ├── layout.css          # Estrutura base e utilitários
│   ├── components.css      # Cursor, botões, nav, tags
│   ├── sections.css        # Hero, about, projetos, footer
│   ├── animations.css      # Reveals e animações de entrada
│   └── responsive.css      # Breakpoints mobile/tablet
├── js/
│   ├── cursor.js           # Cursor customizado com inertia
│   ├── nav.js              # Scroll + burger mobile + parallax
│   └── reveal.js           # Animações ao rolar a página
└── assets/
    └── docs/
        └── CV_DevKauã.pdf  # Currículo para download
```

---

Visualizar localmente

Opção 1 — Abrir direto no navegador

1. Clone o repositório:
   ```bash
   git clone https://github.com/kauacovre/portfolio.github.io.git
   ```
2. Navegue até a pasta:
   ```bash
   cd portfolio.github.io
   ```
3. Abra o arquivo `index.html` no seu navegador (duplo clique ou arraste).

---

Opção 2 — Servidor local com VS Code (recomendado)

> Garante que fontes, CSS e JS carregam corretamente.

1. Instale a extensão **Live Server** no VS Code
2. Abra a pasta do projeto no VS Code:
   ```bash
   code portfolio.github.io
   ```
3. Clique com o botão direito em `index.html` → **"Open with Live Server"**
4. O site abre automaticamente em `http://127.0.0.1:5500`

---

Opção 3 — Servidor local com Python

```bash
# Dentro da pasta do projeto:
python -m http.server 8000
```
Acesse: [http://localhost:8000](http://localhost:8000)

---

##  Tecnologias

- HTML5 semântico
- CSS3 (variáveis, grid, animações)
- JavaScript puro (ES6+)
- Fontes: [Syne](https://fonts.google.com/specimen/Syne) + [DM Mono](https://fonts.google.com/specimen/DM+Mono) via Google Fonts

---

##  Contato

- Email: kauacovre222@gmail.com
- LinkedIn: [linkedin.com/in/kauã-martins](https://www.linkedin.com/in/kauã-martins/)
- GitHub: [github.com/kauacovre](https://github.com/kauacovre)
