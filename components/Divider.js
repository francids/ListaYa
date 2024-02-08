import { View } from "react-native";

export default function Divider({ height = 1, dividerStyle }) {
  const dividerStyles = [(width = "100%"), (height = "100%"), dividerStyle];

  return <View style={dividerStyles} />;
}
