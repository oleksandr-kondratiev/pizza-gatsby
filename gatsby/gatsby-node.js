import _fetch from "isomorphic-fetch";
import path from "path";

const turnPizzasIntoPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  data.pizzas.nodes.forEach((pizza) => {
    actions.createPage({
      path: `pizza/${pizza.slug.current}`,
      component: path.resolve("./src/templates/Pizza.js"),
      context: {
        slug: pizza.slug.current,
      },
    });
  });
};

const turnToppingsIntoPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      toppings: allSanityTopping {
        nodes {
          id
          name
        }
      }
    }
  `);

  data.toppings.nodes.forEach((topping) => {
    actions.createPage({
      path: `topping/${topping.name}`,
      component: path.resolve("./src/pages/pizzas.js"),
      context: {
        topping: topping.name,
        toppingRegex: `/${topping.name}/i`,
      },
    });
  });
};

const fetchBeersAndTurnIntoNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const beers = await _fetch("https://api.sampleapis.com/beers/ale")
    .then((response) => response.json())
    .catch((error) => console.error(error));

  beers.forEach((beer) => {
    const nodeMeta = {
      id: createNodeId(`beer-${beer.name}`),
      parent: null,
      children: [],
      internal: {
        type: "Beer",
        mediaType: "application/json",
        contentDigest: createContentDigest(beer),
      },
    };

    actions.createNode({
      ...beer,
      ...nodeMeta,
    });
  });
};

const turnMastersIntoPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      masters: allSanityPerson {
        totalCount
        nodes {
          id
          name
          slug {
            current
          }
        }
      }
    }
  `);

  const page_size = 3;
  const pageCount = Math.ceil(data.masters.totalCount / page_size);

  Array.from({ length: pageCount }).forEach((_, i) => {
    actions.createPage({
      path: `/masters/${i + 1}`,
      component: path.resolve("./src/pages/masters.js"),
      context: {
        skip: i * page_size,
        currentPage: i + 1,
        pageSize: page_size,
      },
    });
  });
};

export const sourceNodes = async (params) => {
  await Promise.all([fetchBeersAndTurnIntoNodes(params)]);
};

export const createPages = async (params) => {
  await Promise.all([
    turnPizzasIntoPages(params),
    turnToppingsIntoPages(params),
    turnMastersIntoPages(params),
  ]);
};
