import React from "react"
import { View, TextInput, StyleSheet } from "react-native"
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange }) => {
  return (
    <View style={styles.background}>
      <Feather name='search' style={styles.iconStyle} />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.inputStyle} placeholder='Search'
          value={term}
          onChangeText={newTerm => onTermChange(newTerm)}
        />
    </View>
  );

}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    height: 45,
    borderRadius: 10,
    marginHorizontal: 5,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 25,
    alignSelf: 'center',
    marginHorizontal: 15
  }
})

export default SearchBar
