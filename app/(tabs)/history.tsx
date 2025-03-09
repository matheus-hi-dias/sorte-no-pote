import { StyleSheet, ScrollView, FlatList } from "react-native";
import DrawHistoryCard from "@/components/DrawHistoryCard";

export default function HistoryScreen() {
  const cards = [
    <DrawHistoryCard
      type="Sorteio único"
      title="Sorteio de Natal"
      date="25/12/2021"
      participants={10}
      results={1}
    />,
    <DrawHistoryCard
      type="Sorteio único"
      title="Sorteio de Natal"
      date="25/12/2021"
      participants={10}
      results={1}
    />,
  ];
  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <FlatList
        data={cards}
        renderItem={({ item }) => <>{item}</>}
        keyExtractor={(_, index) => `index-${index}`}
        contentContainerStyle={{ gap: 8 }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
