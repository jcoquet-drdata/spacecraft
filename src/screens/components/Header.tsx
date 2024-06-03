import { StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

const Header = ({ title }: { title: string }) => {
  const theme = useTheme();

  return (
    <Text variant="headlineLarge" style={{ ...styles.heading, backgroundColor: theme.colors.primary }}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    display: `flex`,
    padding: 50,
    textAlign: 'center',
    backgroundColor: 'red',
  },
});

export default Header;
