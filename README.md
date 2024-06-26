# Slick's Slices 🍕

## 📖 Description

**Slick's Slices** is a dynamic, visually appealing web application designed to showcase a variety of pizzas. Built with [Gatsby](https://www.gatsbyjs.com/), a modern web framework based on React, this project leverages the power of static site generation for fast loading times and optimal performance. Users can explore a wide range of pizza options, ingredients, and recipes, making it an ideal platform for pizza enthusiasts and food bloggers alike. With its responsive design, **Slick's Slices** ensures a seamless browsing experience across all devices, inviting users to dive into the world of pizzas anytime, anywhere.

## 🔗 Links

[Sanity](https://kondratiev-gatsby.sanity.studio/desk/person)

## 🛠 Installation

To get started with **Slick's Slices**, ensure you have Node.js version 16.20.0 installed on your system. Follow these steps to set up the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/slicks-slices.git
```

### 2. ENV

Create .env file inside of ```./gatsby/``` folder and fill environment variables

```bash
SANITY_ID=
SANITY_DATASET=
SANITY_TOKEN=

GATSBY_SERVERLESS_BASE=

# https://ethereal.email/create
MAIL_HOST=
MAIL_USER=
MAIL_PASS=
```

### 3. Run Gatsby app

Navigate to the Gatsby project folder, install dependencies, and start the development server:

```bash
cd ./gatsby/
npm install
npm run develop
```

### 4. Download and init Sanity

In a new terminal window, set up Sanity by installing the Sanity CLI, initializing a new Sanity project, and starting the Sanity studio:

```bash
cd ./sanity/
npm install -g @sanity/cli
sanity init
```

### 5. Run Sanity app

Finally, start the Sanity studio server:

```bash
npm install
sanity start
```

Now, you're all set to explore Slick's Slices locally! Enjoy exploring and contributing to Slick's Slices! 🚀