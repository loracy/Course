import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import mySrc from '../json/mySrc.json';

// Make a component
class PageOne extends Component {
  state = { mySrc: [] };

  componentWillMount() {
    this.setState({ mySrc });
    // console.log(this.state);
  }

  goToPageTwo = () => {
    this.props.navigation.navigate('Details', { ...mySrc });
  };

  render() {
    return (
      <ScrollView>
        <List>
          {this.state.mySrc.map((album) => (
            <ListItem
              key={album.key}
              roundAvatar
              avatar={{ uri: album.image }}
              title={this.state.params.key}
              // subtitle={album.artist}
              onPress={() => this.goToPageTwo()}
              // hideChevron
              // rightTitle='More...'
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default PageOne;
