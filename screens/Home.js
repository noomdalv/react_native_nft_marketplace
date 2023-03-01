import { useState } from "react";
import { View, SafeAreaView, FlatList, Text } from "react-native";

import { COLORS, NFTData } from "../constants";
import { HomeHeader, FocusedStatusBar, NFTCard } from "../components";

function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
    </SafeAreaView>
  );
}

export default Home;
