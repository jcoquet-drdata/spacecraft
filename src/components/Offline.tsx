import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useIsConnected } from "react-native-offline";
import { ActivityIndicator } from "react-native-paper";

export const Offline = () => {
  const isConnected = useIsConnected();
  console.log({ isConnected });
  if (isConnected) return null;

  return (
    <View>
      <Text>
        Boo! <ActivityIndicator />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FEE2E2",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    padding: 20,
    position: "absolute",
    top: 55,
    width: "90%",
  },
  message: {
    color: "#991B1B",
  },
});
