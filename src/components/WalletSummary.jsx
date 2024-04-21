import { Badge, Group, NumberFormatter } from "@mantine/core";

const WalletSummary = ({ wallet }) => {
  const walletShort = `${wallet.address.slice(0, 4)}...${wallet.address.slice(
    -4
  )}`;
  return (
    <Group justify="space-between">
      <Badge color="blue" size="xl" radius="md">
        {walletShort}
      </Badge>
      <NumberFormatter
        value={wallet.balance}
        suffix=" SOL"
        thousandSeparator
        decimalScale={4}
      />
    </Group>
  );
};

export default WalletSummary;
