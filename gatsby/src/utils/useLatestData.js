import { useState, useEffect } from "react";

const data = `
    name
    _id
    image {
      asset {
        url
        metadata {
          lqip
        }
      }
    }
`;

export default function useLatestData() {
  const [pizzas, setPizzas] = useState();
  const [masters, setMasters] = useState();

  useEffect(() => {
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: String.raw`
          query {
            StoreSettings(id: "downtown") {
              name
              masters {
                ${data}
              }
              pizzas {
                ${data}
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setPizzas(res.data.StoreSettings.pizzas);
        setMasters(res.data.StoreSettings.masters);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return {
    pizzas,
    masters,
  };
}
