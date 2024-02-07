import { View } from "react-native";

export default function Divider({
  width = 1,
  orientation = "horizontal",
  color = "#000",
  transparent = false,
  dividerStyle,
}) {
  const dividerStyles = [
    { width: orientation === "horizontal" ? "100%" : width },
    { height: orientation === "vertical" ? "100%" : width },
    { backgroundColor: color },
    transparent && { backgroundColor: "transparent" },
    dividerStyle,
  ];

  return <View style={dividerStyles} />;
}
