import { Accordion, Title } from "@mantine/core";
import React, { useState } from "react";
import WalletSummary from "../components/WalletSummary";

const Home = () => {
  const [wallets, setWallets] = useState([
    {
      name: "Personal",
      address: "3HxqsUguP6E7CNqjvpEAnJ8v86qbyJgWvN2idAKygLdD",
      balance: 1.0,
    },
    {
      name: "Burner",
      address: "8kRQuces4JT7nNqSrvTZXbu9gL6rcQDWDZmCzH1SVzUC",
      balance: 2.0,
    },
    {
      name: "Dev",
      address: "DhYCi6pvfhJkPRpt5RjYwsE1hZw84iu6twbRt9B6dYLV",
      balance: 3.0,
    },
  ]);

  return (
    <Accordion>
      {wallets.map((wallet) => (
        <Accordion.Item key={wallet.address} value={wallet.address} w={"100%"}>
          <Accordion.Control>
            <Title order={4}>{wallet.name}</Title>
          </Accordion.Control>
          <Accordion.Panel>
            <WalletSummary wallet={wallet} />
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default Home;
