import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

// import me from '../json/me.json';

// Make a component
class Me extends Component {
  // state = { me: [] };

  // componentWillMount() {
  //   this.setState({ me });
  // }

  render() {
    return (
      <ScrollView>
        <List>
          <ListItem
            title="老師"
            // rightTitle={this.state.me.email}
            hideChevron
          />
          <ListItem
            title="教室"
            // rightTitle={this.state.me.phone}
            hideChevron
          />
          <ListItem
            title="學分"
            // rightTitle={this.state.me.phone}
            hideChevron
          />
          <ListItem
            title="開始時間"
            // rightTitle={this.state.me.phone}
            hideChevron
          />
          <ListItem
            title="結束時間"
            // rightTitle={this.state.me.phone}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="備註"
            // rightTitle={this.state.me.dob}
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}

export default Me;
