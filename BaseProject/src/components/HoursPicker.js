import Moment from "moment";
import * as React from 'react';
import { Component } from "react";
import { Modal, Picker, StyleSheet, Text, TouchableOpacity, View } from "react-native";

class HoursPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hour: props.hour || 0,
      minute: props.minute || 0,
    };
  }

  render() {
    const lstHours = [];
    const lstMinutes = [];
    for (let i = 0; i < 60; i++) {
      lstMinutes.push(i);
    }
    for (let i = 0; i < 24; i++) {
      lstHours.push(i);
    }
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={() => { this.props.onClose() }}
      >
        <View style={styles.modal}>
          <View style={styles.modalSelectBox}>
            <View style={styles.modalSelectBoxHeader}>
              <TouchableOpacity
                onPress={() => { this.props.onClose() }}
                style={styles.modalSelectBoxHeaderButton}
              >
                <Text
                  style={styles.modalSelectBoxHeaderButtonText}>{"Done"}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.modalSelectBoxBody}>
              <View style={{
                alignItems: 'baseline',
                backgroundColor: '#FFFFFF',
                flexDirection: 'row',
                paddingHorizontal: 0
              }}>
                <Picker
                selectedValue={this.state.hour}
                style={{ flex: 1 }}
                onValueChange={(itemValue) =>
                  this.setState({ hour: parseInt(itemValue, 0) }, () => {
                    if (this.props.onHourChange) {
                      this.props.onHourChange(this.state.hour, this.state.minute)
                    }
                  })}
              >
                {
                  lstHours.map((item, index) => {
                    return (
                      <Picker.Item
                        key={index}
                        label={item.toString().length === 1 ? `0${item.toString()}` : item.toString()}
                        value={item} />
                    );
                  })
                }
              </Picker>
                <Picker
                  style={{ flex: 1 }}
                >
                  <Picker.Item
                    label={':'} />
                </Picker>

                <Picker
                  selectedValue={this.state.minute}
                  style={{ flex: 1 }}
                  onValueChange={(itemValue) => this.setState({ minute: parseInt(itemValue, 0)}, () => {
                    if (this.props.onHourChange) {
                      this.props.onHourChange(this.state.hour, this.state.minute)
                    }
                  })}
                >
                  {
                    lstMinutes.map((item, index) => {
                      return (
                        <Picker.Item
                          key={index}
                          label={item.toString().length === 1 ? `0${item.toString()}` : item.toString()}
                          value={item} />
                      );
                    })
                  }
                </Picker>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export { HoursPicker }

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'rgba(77, 92, 116, 0.85)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalSelectBox: {
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
    maxHeight: 300,
  },
  modalSelectBoxBody: {
    height: 200
  },
  modalSelectBoxHeader: {
    alignItems: 'flex-end',
    backgroundColor: '#F0F5F6',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  modalSelectBoxHeaderButton: {
    backgroundColor: 'transparent'
  },
  modalSelectBoxHeaderButtonText: {
    backgroundColor: 'transparent',
    color: '#00528F',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
