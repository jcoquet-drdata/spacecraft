// App.tsx
import React from "react";
import { SafeAreaView } from "react-native";
import { NetworkProvider } from "react-native-offline";
import { Provider as PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { TermsScreen } from "./src/components/TermsScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";

import { ScreenContainer } from "~/screens/ScreenContainer";

const queryClient = new QueryClient();

function App() {
  return (
    <PaperProvider>
      <NetworkProvider>
        <QueryClientProvider client={queryClient}>
          <SafeAreaView style={{ flex: 1 }}>
            {/* <LoginScreen /> */}
            {/* <TermsScreen /> */}
            <ScreenContainer title="Coucou">
              <StarshipFeedScreen />
            </ScreenContainer>
          </SafeAreaView>
        </QueryClientProvider>
      </NetworkProvider>
    </PaperProvider>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;
