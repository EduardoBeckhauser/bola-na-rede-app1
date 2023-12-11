import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import {
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  StyleSheet,
} from "react-native";

export default function Item({ route, navigation }) {
  const { item } = route.params;

  return (
    <ScrollView showsVerticalScrollIndicator={true} style={styles.container}>
      <View style={styles.Item}>
        <Image source={{ uri: item.capa.url }} style={styles.imagem} />
        <Text style={styles.nome}>{item.descricao}</Text>
        <Text style={styles.valor}>R${item.preco}</Text>
        <Text>Restam apenas {item.quantidade} camisas!</Text>
        <TouchableOpacity style={styles.botao}>COMPRAR</TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    marginHorizontal: 0,
    alignContent: "center",
  },
  Item: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    marginLeft: 20,
  },
  titulo: {
    fontSize: 23,
    fontWeight: "bold",
  },
  lista: {
    marginTop: 10,
    paddingLeft: 20,
  },
  item: {
    marginRight: 15,
    alignItems: "center",
  },
  imagem: {
    width: 250*2,
    height: 290*2,
    borderRadius: 10,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  categoriaTitulo: {
    fontSize: 16,
    marginTop: 10,
    color: "#999",
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  valor: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  botao: {
    backgroundColor: "black",
    color: "white",
    borderWidth: 1,
    borderRadius: 36,
    width: 100,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
