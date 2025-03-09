import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemedView } from "../ThemedView";
import { TouchableOpacity, useColorScheme, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "../ThemedText";

type DrawCardProps = {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  title: string;
  description: string;
  buttonText: string;
  onPress: () => void;
};
export default function DrawCard({
  icon,
  title,
  description,
  buttonText,
  onPress,
}: DrawCardProps) {
  const colorScheme = useColorScheme();
  return (
    <ThemedView
      style={{
        padding: 16,
        borderRadius: 8,
        backgroundColor: Colors[colorScheme ?? "light"].background,
      }}
    >
      <ThemedView
        style={{ flexDirection: "row", alignItems: "center", gap: 16 }}
      >
        <View
          style={{
            backgroundColor: Colors[colorScheme ?? "light"].secondaryTint,
            padding: 8,
            borderRadius: 50,
          }}
        >
          <MaterialCommunityIcons
            name={icon}
            size={24}
            color={Colors[colorScheme ?? "light"].tint}
          />
        </View>
        <ThemedText type="title">{title}</ThemedText>
      </ThemedView>
      <ThemedText type="subtitle">{description}</ThemedText>
      <TouchableOpacity
        onPress={onPress}
        style={{
          marginTop: 16,
          backgroundColor: Colors[colorScheme ?? "light"].tint,
          padding: 8,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
        }}
      >
        <ThemedText type="defaultSemiBold">{buttonText}</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}
