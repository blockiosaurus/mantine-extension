import { createTheme, MantineTheme } from "@mantine/core";

declare module "@mantine/core" {
    export interface MantineThemeOverride extends MantineTheme {
        spacing: Record<"none" | "xs" | "sm" | "md" | "lg" | "xl", string>;
    }
}

const theme = createTheme({
    spacing: {
        none: "0rem",
    },
})