import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';

export default class ControlPanel extends Component {

  render() {
    let {closeDrawer, navigate} = this.props;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.controlText}>Phong Thuỷ</Text>
        <TouchableOpacity style={styles.button} onPress={() => {
            navigate ? navigate("LabanScreen") : null;
            closeDrawer ? closeDrawer() : null
          }}>
          <Text>La bàn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
          navigate ? navigate("CuuCungPhiTinh") : null;
          closeDrawer ? closeDrawer() : null
        }}>
          <Text>Cuu Cung Phi Tinh</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  controlText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 23,
    marginVertical: 30
  },
  button: {
    padding: 10,
  }
})