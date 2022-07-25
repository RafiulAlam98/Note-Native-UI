import { StyleSheet, Text as RNText } from 'react-native';
import { Presets } from './TextPreset';

export default Text = ({ children, preset = 'default', style }) => {
  const textStyles = StyleSheet.compose(Presets[preset], style);
  return <RNText style={textStyles}>{children}</RNText>;
};
