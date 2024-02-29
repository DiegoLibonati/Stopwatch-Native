import { createContext, useState } from "react";
import { Animated } from "react-native";
import { UIContextProps, UiContextT } from "../types/entities";

export const UIContext = createContext<UiContextT | null>(null);

export const UIProvider: React.FunctionComponent<UIContextProps> = ({
  children,
}) => {
  const [widthAnim] = useState<Animated.Value>(new Animated.Value(1000));
  const [modal, setModal] = useState<boolean>(false);

  const openNavBar = (): void => {
    return Animated.timing(widthAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const closeNavBar = (): void => {
    return Animated.timing(widthAnim, {
      toValue: 5000,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const handleModal = (boolean: boolean): void => {
    return setModal(boolean);
  };

  return (
    <UIContext.Provider
      value={{ widthAnim, modal, openNavBar, closeNavBar, handleModal }}
    >
      {children}
    </UIContext.Provider>
  );
};
