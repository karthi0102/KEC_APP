import React from 'react';
import {View, StyleSheet} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/MaterialIcons';

function CustomDropdown({setItem, list, name}) {
  return (
    <View style={styles.contain}>
      <SelectDropdown
        data={list}
        onSelect={(selectedItem, index) => {
          setItem(selectedItem);
        }}
        defaultButtonText={`Select ${name} `}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={styles.dropdownBtnStyle}
        buttonTextStyle={styles.dropdownBtnTxtStyle}
        renderDropdownIcon={isOpened => {
          return (
            <Icon
              name={isOpened ? 'expand-less' : 'keyboard-arrow-down'}
              color="#555"
              size={30}
            />
          );
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdownDropdownStyle}
        rowStyle={styles.dropdownRowStyle}
        rowTextStyle={styles.dropdownRowTxtStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    contain:{
        marginHorizontal:2,
        marginVertical:4
    },
  dropdownBtnStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#DBE2EF',
    borderBottomColor: '#3F4C83',
    borderBottomWidth: 1,
   
  },
  dropdownBtnTxtStyle: {
    color: '#555',
    fontSize: 14,
    fontWeight: 'bold',
    marginStart: 0,
    paddingStart:0,
    textAlign: 'left',
  },
  dropdownDropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdownRowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdownRowTxtStyle: {color: '#000', textAlign: 'left'},
});

export default CustomDropdown;
