import { Lap } from "@src/entities/app";

interface DefaultProps {
  children?: React.ReactNode;
}

export interface LapProps {
  lap: Lap;
}

export interface CronoProviderProps extends DefaultProps {}

export interface LapsProviderProps extends DefaultProps {}

export interface UiProviderProps extends DefaultProps {}
