import {
  AppShell,
  Group,
  SimpleGrid,
  ActionIcon,
  Avatar,
  Title,
  Select,
  Center,
} from "@mantine/core";
import { useEffect, useState } from "react";
import {
  IconHome,
  IconBox,
  IconHistory,
  IconSettings,
} from "@tabler/icons-react";
import "./Popup.css";
import Home from "./Home";
import Assets from "./Assets";
import History from "./History";
import Settings from "./Settings";

const TabView = {
  Home: "Home",
  Assets: "Assets",
  History: "History",
  Settings: "Settings",
};

export default function () {
  const [tab, setTab] = useState(TabView.Home);
  useEffect(() => {
    console.log("Hello from the popup!");
  }, []);

  return (
    <AppShell
      padding="xs"
      header={{ height: 60, breakpoint: "sm" }}
      footer={{ height: 60, padding: "xs" }}
    >
      <AppShell.Header>
        <SimpleGrid cols={3} spacing="xs">
          <Avatar
            src="https://yjzvy322x423xmvvs4b6x4gceuh2ztbomc56g6ervz2qrk23pu4q.arweave.net/wnNcb1q_NbuytZcD6_DCJQ-szC5gu-N4ka51CKtbfTk"
            padding="sm"
            m="xs"
          />
          <Center>
            <Title order={4}>Blockiosaurus</Title>
          </Center>
          <Center>
            <Select
              size="xs"
              maw={100}
              defaultValue="mainnet-beta"
              data={[
                { value: "mainnet-beta", label: "Mainnet" },
                { value: "devnet", label: "Devnet" },
                { value: "testnet", label: "Testnet" },
              ]}
            />
          </Center>
        </SimpleGrid>
      </AppShell.Header>
      <AppShell.Main style={{ width: "100%" }}>
        {tab === TabView.Home && <Home />}
        {tab === TabView.Assets && <Assets />}
        {tab === TabView.History && <History />}
        {tab === TabView.Settings && <Settings />}
      </AppShell.Main>
      <AppShell.Footer>
        <Group justify="center" gap="none" grow>
          <ActionIcon
            variant="filled"
            size="xl"
            aria-label="Home"
            onClick={() => setTab(TabView.Home)}
          >
            <IconHome />
          </ActionIcon>
          <ActionIcon
            variant="filled"
            size="xl"
            aria-label="Assets"
            onClick={() => setTab(TabView.Assets)}
          >
            <IconBox />
          </ActionIcon>
          <ActionIcon
            variant="filled"
            size="xl"
            aria-label="History"
            onClick={() => setTab(TabView.History)}
          >
            <IconHistory />
          </ActionIcon>
          <ActionIcon
            variant="filled"
            size="xl"
            aria-label="Settings"
            onClick={() => setTab(TabView.Settings)}
          >
            <IconSettings />
          </ActionIcon>
        </Group>
      </AppShell.Footer>
    </AppShell>
  );
}
