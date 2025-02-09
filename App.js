import { useFonts } from "expo-font";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
 
import Dripsy from "./components/Dripsy";
import EmotionNative from "./components/EmotionNative";
import Paper from "./components/Paper";
import Gluestack from "./components/Gluestack";
import NativeWind from "./components/NativeWind";
import Native from "./components/ReactNative";
import Restyle from "./components/Restyle";
import ReactNativeElement from "./components/ReactNativeElement";
import StyledComponents from "./components/StyledComponents";
import Tamagui from "./components/Tamagui";
import TimedRender from "./components/TimedRender";
import Twrnc from "./components/Twrnc";
import { Zephyr } from "./components/Zephyr";
import FastStyles from "./components/FastStyles";
import Unistyles from "./components/Unistyles";
import { SafeAreaView } from "react-native-safe-area-context";

 export default function App() {
  const [styleType, setStyleType] = useState(undefined);

  const onStyleTypePress = (curry) => () => {
    setStyleType(curry);
  };

  const renderStyleLibrary = () => {
    switch (styleType) {
      case "React Native":
        return <Native />;
      case "Styled Components":
        return <StyledComponents />;
      case "Tamagui":
        return <Tamagui />;
      case "Restyle":
        return <Restyle />;
      case "NativeWind":
        return <NativeWind />;
      case "Emotion Native":
        return <EmotionNative />;
      case "Dripsy":
        return <Dripsy />;
      case "Zephyr":
        return <Zephyr />;
      case "Gluestack":
        return <Gluestack />;
      case "Paper":
        return <Paper />;
      case "Twrnc":
        return <Twrnc />;
      case "FastStyles":
        return <FastStyles />;
      case "Unistyles":
        return <Unistyles />;
        case "RNElement":
          return <ReactNativeElement />;
      default:
        return null;
    }
  };

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tap a style library to start rendering</Text>
      <Button title="React Native" onPress={onStyleTypePress("React Native")} />
      <Button
        title="react-native-unistyles"
        onPress={onStyleTypePress("Unistyles")}
      />
      <Button title="fast-styles" onPress={onStyleTypePress("FastStyles")} />
      <Button
        title="twrnc (tailwind rn class names)"
        onPress={onStyleTypePress("Twrnc")}
      />
      <Button title="Zephyr" onPress={onStyleTypePress("Zephyr")} />
      <Button title="Restyle" onPress={onStyleTypePress("Restyle")} />
      <Button
        title="Styled Components"
        onPress={onStyleTypePress("Styled Components")}
      />
      <Button
        title="Emotion Native"
        onPress={onStyleTypePress("Emotion Native")}
      />
      <Button title="NativeWind" onPress={onStyleTypePress("NativeWind")} />
      <Button title="Tamagui" onPress={onStyleTypePress("Tamagui")} />
      <Button title="Gluestack" onPress={onStyleTypePress("Gluestack")} />
      <Button title="RN Paper" onPress={onStyleTypePress("Paper")} />
      <Button title="RN Element" onPress={onStyleTypePress("RNElement")} />

      <Button title="Dripsy" onPress={onStyleTypePress("Dripsy")} />
      {styleType ? (
        <TimedRender key={styleType}>
          <Text style={styles.text}>
            Rendering with <Text style={styles.bold}>{styleType}</Text>
          </Text>
        </TimedRender>
      ) : null}
      {renderStyleLibrary()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
  text: {
    marginVertical: 12,
  },
  bold: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

