import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { TouchableOpacity, useColorScheme, View } from "react-native";
import { Colors } from "@/constants/Colors";

type DrawHistoryCardProps = {
  type: string;
  title: string;
  date: string;
  participants: number;
  results: number;
};
export default function DrawHistoryCard({
  type,
  title,
  date,
  participants,
  results,
}: DrawHistoryCardProps) {
  const colorScheme = useColorScheme();
  return (
    <TouchableOpacity>
      <ThemedView
        style={{
          padding: 16,
          borderRadius: 8,
          backgroundColor: Colors[colorScheme ?? "light"].background,
        }}
      >
        <View
          style={{
            backgroundColor: Colors[colorScheme ?? "light"].secondaryTint,
            padding: 8,
            borderRadius: 20,
          }}
        >
          <ThemedText type="link">{type}</ThemedText>
        </View>
        <ThemedText type="title">{title}</ThemedText>
        <ThemedText type="subtitle">
          <MaterialCommunityIcons name="calendar" size={24} />
          {date}
        </ThemedText>
        <ThemedText type="subtitle">
          <Feather name="users" size={24} />
          {participants} participantes
        </ThemedText>
        <ThemedText type="subtitle">
          <Feather name="award" size={24} />
          {results} resultados
        </ThemedText>
        <ThemedText type="link">Ver detalhes</ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );
}
