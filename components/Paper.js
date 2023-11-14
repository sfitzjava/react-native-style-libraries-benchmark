import { View,  } from "react-native";
import { PaperProvider, Surface, MD3LightTheme as DefaultTheme, ActivityIndicator,  Text } from 'react-native-paper';

import { COUNT } from "../utils";


const theme = {
  ...DefaultTheme,
  
  // Specify custom property
  myOwnProperty: true,
     ...DefaultTheme.colors,
  // Specify custom property in nested object
  colors: {
    myOwnColor: 'red',
  },
};
const PaperUIProvider = () => {
  return (
      <View style={{ height: 10, display: "flex", flexDirection: "row" }}>
        {new Array(COUNT).fill(0).map((_, i) => (
          <View   key={i} style={{ borderColor: theme.colors.myOwnColor, borderWidth: 2, padding:5}} />
        ))}
        </View>

  );
};

export default PaperUIProvider

export const PaperProviderImpl = PaperProvider;

/**  
 *              Styled View:      RN Button:    Button:        Text:
 *  RN              157ms          1471ms        1471ms        540ms
 *  NativeWind      345ms          n/a            n/a            n/a
 *  Zephyr          213ms          n/a            n/a            n/a
 *  Tamagui         315ms          1896ms        1896ms        467ms
 *  Paper           162ms          1669ms        2996ms        558ms
 * 
 * 
 */