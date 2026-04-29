import type { Lap } from "@/types/app";

interface DefaultProps {
  children?: React.ReactNode;
}

export interface LapProps {
  lap: Lap;
}

export type CronoProviderProps = DefaultProps;

export type LapsProviderProps = DefaultProps;

export type UiProviderProps = DefaultProps;
