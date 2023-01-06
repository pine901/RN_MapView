import React, {memo} from 'react';
import {
  View,
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ViewStyle,
  Modal,
} from 'react-native';
import colors from '../theme/colors';
import {hScaleRatio, wScale} from '../utils/scailing';

export default memo(({style, visible, onPress, coordinate}) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={defStyle.container}>
        <View style={defStyle.modal}>
          <Text style={defStyle.titleText}>POINT</Text>
          <Text style={defStyle.normalText}>Current Position:</Text>
          <View style={defStyle.textLine}>
            <Text style={defStyle.normalText}>Latitude</Text>
            <Text style={defStyle.normalText}>{coordinate.latitude}</Text>
          </View>
          <View style={defStyle.textLine}>
            <Text style={defStyle.normalText}>Longitude</Text>
            <Text style={defStyle.normalText}>{coordinate.longitude}</Text>
          </View>
          <TouchableOpacity style={defStyle.okBtn} onPress={onPress}>
            <Text style={defStyle.textBtn}>O K</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
});

const defStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    borderRadius: wScale(10),
    width: wScale(335),
    height: hScaleRatio(350),
    padding: 30,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  textLine: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  okBtn: {
    borderRadius: 12,
    width: '100%',
    height: hScaleRatio(47),
    backgroundColor: colors.mainColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hScaleRatio(40),
  },
  textBtn: {
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
    width: '100%',
    color: colors.white,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    width: '100%',
    height: 50,
    marginHorizontal: 30,
    color: colors.black,
  },
  normalText: {
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
    width: '100%',
    height: 50,
    marginHorizontal: 40,
    color: colors.black,
  },
});
