import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import {hScaleRatio} from '../../utils/scailing';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mainColor,
    flex: 1,
    flexDirection: 'column',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default styles;
