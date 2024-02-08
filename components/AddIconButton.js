import { Plus } from "lucide-react-native";
import { TouchableOpacity, StyleSheet } from "react-native";

export default function AddIconButton({ onPress, iconColor, iconBackground }) {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: iconBackground,
      borderRadius: 50,
      padding: 10,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Plus color={iconColor} size={30} />
    </TouchableOpacity>
  );
}
