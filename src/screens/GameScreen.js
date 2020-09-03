import React, { useState, useEffect } from "react"
import { Text, StyleSheet, Image, View, ScrollView } from 'react-native'
import { COLORS } from "../../assets/colors"

const blankImage = require("../../assets/NoImageFound.jpeg")

const GameScreen = (props) => {
  let gameId = props.navigation.getParam("data")
  const [game, setGame] = useState('')

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${gameId}`)
      .then((response) => response.json())
      .then((responseJson) => {
        setGame(responseJson)
      })
      .catch((error) => {
        console.error(error)
      })
  })

  if (game == '') {
    return <Text style={styles.textStyle}>fetching...</Text>
  } else if (game.detail == "Not found.") {
    return (
      <View>
        <Text style={styles.textStyle}>{game.detail}</Text>
      </View>
    )
  } else {
    return (
      <ScrollView style={styles.cardBackground}>
        <Image
          source={
            game.background_image ? { uri: game.background_image } : blankImage
          }
          style={styles.gameImage}
        />
        <View style={styles.details}>
          <Text style={styles.titleText}>{game.name}</Text>
          <Text style={styles.ratingText}>Rating: {game.rating}</Text>
          <Text style={styles.descriptionText}>{game.description_raw}</Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 40,
    color: COLORS.primary,
  },
  ratingText: {
    fontSize: 20,
    color: COLORS.secondary,
  },
  descriptionText: {
    fontSize: 20,
    color: COLORS.primary,
    marginTop: 20,
  },
  cardBackground: {
    flex: 1,
    padding: 3,
    backgroundColor: COLORS.background,
  },
  gameImage: {
    height: "50%",
  },
  details: {
    padding: 20,
    marginTop: 10,
  },
})

export default GameScreen
