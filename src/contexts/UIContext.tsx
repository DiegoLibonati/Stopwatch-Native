import { createContext, useState } from "react";
import { Animated, Dimensions } from "react-native";

interface UIContextProps {
  children: React.ReactNode;
}

export const UIContext = createContext<null | any>(null);

export const UIProvider: React.FunctionComponent<UIContextProps> = ({
  children,
}) => {
  const [widthAnim] = useState(new Animated.Value(1000));
  const [modal, setModal] = useState(false);

  const openNavBar = () => {
    return Animated.timing(widthAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const closeNavBar = () => {
    return Animated.timing(widthAnim, {
      toValue: 5000,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const handleModal = (boolean: boolean) => {
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
