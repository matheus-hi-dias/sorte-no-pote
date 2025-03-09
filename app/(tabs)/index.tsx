import { StyleSheet, ScrollView, Text, FlatList } from "react-native";
import DrawCard from "@/components/DrawCard";

export default function HomeScreen() {
  const drawCards = [
    <DrawCard
      icon="ticket"
      title="Sorteio Único"
      description="Cadastre os participantes e realize um sorteio com um único ganhador"
      buttonText="Iniciar Sorteio"
      onPress={() => {}}
    />,
    <DrawCard
      icon="ticket"
      title="Sorteio Múltiplo"
      description="Realize vários sorteios com a mesma lista de participantes"
      buttonText="Iniciar Sorteio"
      onPress={() => {}}
    />,
    <DrawCard
      icon="ticket"
      title="Amigo Secreto"
      description="Realize um sorteio de amigo secreto com a lista de participantes"
      buttonText="Iniciar Sorteio"
      onPress={() => {}}
    />,
  ];
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={drawCards}
        renderItem={({ item }) => <>{item}</>}
        keyExtractor={(_, index) => `index-${index}`}
        contentContainerStyle={{ gap: 8 }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
