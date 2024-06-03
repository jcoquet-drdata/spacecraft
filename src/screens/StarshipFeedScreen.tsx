import React from "react";
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import useStarships from "~/hooks/useStarships";

type ItemProps = {
  item: {
    name: string;
  };
};

const Item = ({ item }: ItemProps) => (
  <View>
    <Text>{item.name}</Text>
    <Image
      source={{ uri: `https://picsum.photos/seed/400/200` }}
      width={50}
      height={50}
    />
  </View>
);
export const StarshipFeedScreen = () => {
  const { isLoading, data } = useStarships();
  if (isLoading) return <Text>loading...</Text>;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <FlatList
          data={data.results}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.name}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0, // only for Android to avoid status bar overlap
  },
  headerContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
