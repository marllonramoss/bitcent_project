# Bitcent 💰

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-13.0.4-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.3-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-9.14.0-orange?style=for-the-badge&logo=firebase&logoColor=white)

Plataforma financeira para gerenciamento de finanças pessoais desenvolvida com Next.js e Firebase.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/marllonramos)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/marllonramos)

</div>

## 📋 Sobre o Projeto

Bitcent é uma aplicação web moderna para gerenciamento de finanças pessoais, permitindo que usuários controlem suas receitas e despesas de forma simples e eficiente. A plataforma oferece uma interface intuitiva e recursos avançados para análise financeira.

### ✨ Funcionalidades

- 🔐 Autenticação com Google
- 💰 Cadastro de receitas e despesas
- 📊 Dashboard com gráficos e análises
- 📱 Interface responsiva
- 🌙 Modo escuro/claro
- 🔒 Dados seguros com Firebase

## 🚀 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) - Framework React para produção
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript com tipagem estática
- [Firebase](https://firebase.google.com/) - Plataforma de desenvolvimento de aplicativos
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Mantine](https://mantine.dev/) - Biblioteca de componentes React
- [React](https://reactjs.org/) - Biblioteca JavaScript para interfaces

## 🛠️ Como Executar

### Pré-requisitos

- Node.js (versão LTS recomendada)
- npm ou yarn
- Conta no Firebase

### Configuração do Firebase

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
2. Ative o Firestore e Autenticação com Google
3. Configure as regras do Firestore conforme abaixo:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }

    match /financas/{email}/transacoes/{id} {
      allow read: if (request.auth != null && request.auth.token.email == email);
      allow write: if (request.auth != null && request.auth.token.email == email);
    }

    match /usuarios/{email} {
      allow read: if (request.auth != null && request.auth.token.email == email);
      allow write: if (request.auth != null && request.auth.token.email == email);
    }
  }
}
```

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/marllonramos/bitcent_project.git
cd bitcent_project
```

2. Instale as dependências
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente
- Copie o arquivo `.env.sample` para `.env.local`
- Preencha as variáveis com suas credenciais do Firebase:
```bash
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

4. Inicie o servidor de desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis
├── data/          # Dados e configurações
├── logic/         # Lógica de negócios
├── pages/         # Páginas da aplicação
└── styles/        # Estilos globais
```

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvedor

- **Marllon Ramos**
  - GitHub: [@marllonramos](https://github.com/marllonramos)
  - LinkedIn: [Marllon Ramos](https://linkedin.com/in/marllonramos)
  - Email: marllonramos@gmail.com

---
<div align="center">
Feito com ❤️ por Marllon Ramos
</div>
