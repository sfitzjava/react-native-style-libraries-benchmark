import { View } from "react-native";
import { COUNT } from "../utils";
import { Button } from '@rneui/themed';

const ReactNativeElement = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      {new Array(COUNT).fill(0).map((_, i) => (
        <Button key={i} />
      ))}
    </View>
  );
};

export default ReactNativeElement;
