# Slick's Slices 🍕

## 📖 Description

**Slick's Slices** is a vibrant web app showcasing diverse pizzas, built with Gatsby for speed and performance. It offers pizza lovers and food bloggers a platform to explore recipes and ingredients, with a responsive design for seamless browsing on any device.

## 🔗 Links

- [Master Gatsby](https://mastergatsby.com/) - An in-depth online course designed to teach web developers how to build modern, fast, and scalable websites using Gatsby.
- [Gatsby](https://www.gatsbyjs.com/) - A modern web framework for blazing fast websites, leveraging React and GraphQL for building static and dynamic sites.
- [Sanity](https://www.sanity.io/) - A platform for structured content that comes with an open-source editing environment, Sanity Studio, which can be customized with React.
- [GitHub](https://github.com/oleksandr-kondratiev/pizza-gatsby) - The repository for the Gatsby-based project, showcasing code, documentation, and collaboration on the pizza website development.
- [Application](https://kondratiev-gatsby.netlify.app/) - The live version of the pizza website, hosted on Netlify, demonstrating the project's end result with Gatsby's static site generation capabilities.
- [CMS](https://kondratiev-gatsby.sanity.studio/desk/person) - The content management interface for the pizza website project, hosted on Sanity Studio, allowing for real-time content updates and management.

## 🛠 Installation

To get started with **Slick's Slices**, ensure you have Node.js version 16.20.0 installed on your system. Follow these steps to set up the project locally:

### 1. Clone the repository
```bash
git clone git@github.com:oleksandr-kondratiev/pizza-gatsby.git
```

### 2. Run Gatsby App

Navigate to the Gatsby project folder, install dependencies, and start the development server:

Create .env file inside of ```./gatsby/``` folder and fill environment variables

```bash
SANITY_ID=
SANITY_DATASET=
SANITY_TOKEN=

GATSBY_SERVERLESS_BASE=

MAIL_HOST=
MAIL_USER=
MAIL_PASS=
```

```bash
cd ./gatsby/
npm install
npm run netlify
```

### 3. Run Sanity app

Navigate to the Gatsby project folder, install dependencies, and start sanity:

```bash
cd ./sanity/
npm install
sanity init
sanity graphql deploy production
sanity start
```

Now, you're all set to explore Slick's Slices locally! Enjoy exploring and contributing to Slick's Slices! 🚀