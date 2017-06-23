import React from 'react';
import { ScrollView, Linking } from 'react-native';
import { Button, Card, Text, Tile } from 'react-native-elements';

// Make a component
const PageTwo = (props) => {
  const { title, 
          artist,
          url,
          image,
          descriptions
  } = props.navigation.state.params;

  const { boldFont } = styles;

  return (
    <ScrollView>

      <Tile
        imageSrc={{ uri: image }}
        featured
        title={title}
        caption={artist}
      />

      <Card>
        <Text>Artist: {artist}</Text>
        <Text style={{ marginBottom: 10 }}>Title: {title}</Text>
        <Text style={boldFont}>Descriptions:</Text>
        <Text style={{ marginBottom: 10 }}>
          {descriptions}          
        </Text>
        <Button
          raised
          icon={{ name: 'add-shopping-cart' }}
          backgroundColor='#03A9F4'
          title='BUY NOW!'
          onPress={() => Linking.openURL(url)}
        />
      </Card>

    </ScrollView>
  );
};

const styles = {
  boldFont: {
    fontWeight: 'bold'
  }
};


export default PageTwo;
