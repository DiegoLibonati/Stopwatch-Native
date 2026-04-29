import React from "react";
import { View } from "react-native";

export const Image = ({ testID }: { testID?: string }): React.ReactElement =>
  React.createElement(View, { testID });
