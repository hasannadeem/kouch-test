import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import Game from '../components/Game'
import SearchBar from '../components/SearchBar'
const games = require('../../assets/game-library.json')

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: games,
      error: null,
      term: null,
    }
  }

  searchFilterFunction = (text) => {
    if (text == '') {
      this.setState({ data: games })
    }
    else {
      const newData = this.state.data.filter((item) => {
        const itemData = `${item.Title.toUpperCase()}`

        const textData = text.toUpperCase()

        return itemData.indexOf(textData) > -1
      })

      if (newData.length == 0){
        this.setState({ data: [], error: 'no results...' })

      } else {
        this.setState({ data: newData, error: null })
      }
    }
  }

  render() {
    return (
      <View>
        <SearchBar
          term={this.state.term}
          onTermChange={(newTerm) => this.searchFilterFunction(newTerm)}
        />
        <FlatList
          keyExtractor={(game) => game.Title}
          data={this.state.data}
          renderItem={({ item }) => {
            return <Game item={item} navigation={this.props.navigation} />
          }}
        />
      </View>
    )
  }
}

export default HomeScreen;
