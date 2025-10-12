import { Lap } from "@src/entities/app";

interface DefaultProps {
  children?: React.ReactNode;
}

export interface LapProps {
  lap: Lap;
}

export interface CronoContextProps extends DefaultProps {}

export interface LapsContextProps extends DefaultProps {}

export interface UiContextProps extends DefaultProps {}
