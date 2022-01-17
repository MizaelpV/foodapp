import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.pexels.com/photos/3308588/pexels-photo-3308588.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          }}
        />
        <FontAwesome5 name={'bars'} size={20} style={styles.iconColor} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Food</Text>
        <Text style={styles.subtitle}>Delivery</Text>
      </View>
      <View style={styles.search}>
        <FontAwesome5
          name={'search'}
          size={20}
          style={styles.iconColor}
          light
        />
        <TextInput style={styles.textInput} placeholder="Search..." />
      </View>
      <ScrollView horizontal={true} style={styles.containerCards}>
        <View style={styles.card}>
          <Text style={{color: '#313234'}}>Number 1</Text>
        </View>
        <View style={styles.card}>
          <Text style={{color: '#313234'}}>Number 2</Text>
        </View>
        <View style={styles.card}>
          <Text style={{color: '#313234'}}>Number 3</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9FB',
    height: '100%',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 90,
    paddingHorizontal: 20,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  iconColor: {
    color: '#313234',
  },
  textContainer: {
    paddingHorizontal: 20,
    color: '#313234',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    fontWeight: '300',
    paddingVertical: 2,
  },
  subtitle: {
    fontSize: 45,
    fontWeight: '700',
  },
  search: {
    display: 'flex',
    height: 100,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderBottomColor: '#313234',
    width: '90%',
  },
  containerCards: {
    display: 'flex',
    marginLeft: 20,
  },
  card: {
    width: 135,
    height: 210,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5CA48',
    marginRight: 20,
  },
});

export default App;
