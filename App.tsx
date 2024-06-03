// App.tsx
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import LoginScreen from './src/screens/LoginScreen';
import { TermsScreen } from './src/screens/components/TermsScreen';
import { StarshipFeedScreen } from './src/screens/StarshipFeedScreen';
import { SafeAreaView } from 'react-native';

function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <LoginScreen /> */}
        {/* <TermsScreen /> */}
        <StarshipFeedScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;
