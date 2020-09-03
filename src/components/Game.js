import React from "react"
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native"
import { COLORS } from '../../assets/colors'

const Game = (props) => {
  let slug = props.item.Title.replace(/\s/g, "-").replace(".", "").replace(":", "").toLowerCase()

  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Game", { data: slug })}
      >
        <Text style={styles.titleText}>{props.item.Title}</Text>

        <View style={styles.rowItem}>
          <Text style={styles.labelText}>Release Date:</Text>
          <Text style={styles.text}>{props.item["Release Date"]}</Text>
        </View>

        <View style={styles.rowItem}>
          <Text style={styles.labelText}>Genre:</Text>
          <Text style={styles.text}>{props.item.Genre}</Text>
        </View>

        <View style={styles.rowItem}>
          <Text style={styles.labelText}>Platforms:</Text>
          <Text style={styles.text}>{props.item.Platforms}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: COLORS.primary,
    fontSize: 20,
  },
  titleText: {
    color: COLORS.primary,
    fontSize: 40,
  },
  labelText: {
    color: COLORS.white,
    fontSize: 20,
    marginRight: 5
  },
  item: {
    borderColor: COLORS.secondary,
    borderWidth: 2,
    borderBottomWidth: 0,
    color: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: COLORS.background,
  },
  rowItem: {
    flexDirection: 'row',
    width: '80%'
  },
})

export default Game
