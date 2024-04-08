import {SafeAreaView, Text, View} from 'react-native';

import {styles} from './ErrorFallback.styles';
import Button from '../Button';

export function ErrorFallback({
  error,
  resetErrorBoundary,
}: IErrorFallbackProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Oops!</Text>
        <Text style={styles.subtitle}>{`There's an error`}</Text>
        <Text style={styles.error}>{error.toString()}</Text>
        <Button title="Try again" onPress={resetErrorBoundary} />
      </View>
    </SafeAreaView>
  );
}

export interface IErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => unknown;
}
