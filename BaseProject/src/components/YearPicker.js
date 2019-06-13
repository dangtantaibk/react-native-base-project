import Moment from "moment";
import * as React from 'react';
import { Component } from "react";
import { Modal, Picker, StyleSheet, Text, TouchableOpacity, View } from "react-native";

class YearPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year: parseInt(props.year, 0),
    };
  }

  render() {
    const yearList = [];
    for (let i = 1900; i < 2100; i++) {
      yearList.push(i);
    }
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.modalVisible || false}
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
                  selectedValue={this.state.year}
                  style={{ flex: 1 }}
                  onValueChange={(itemValue) =>
                    this.setState({ year: parseInt(itemValue, 0) }, () => {
                      if (this.props.onYearChange) {
                        this.props.onYearChange(this.state.year)
                      }
                    })}
                >
                  {
                    yearList.map((item, index) => {
                      return <Picker.Item key={index} label={item.toString()} value={item} />;
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

export { YearPicker }

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
