import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';

const LoginScreen = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.screen}>
      <Text style={styles.headerTitle}>Login</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} onChangeText={text => setUsername(text)} />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              props.navigation.navigate('user',{username:username,password:password});
            }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

LoginScreen.navigationOptions = {
  headerTitle: '',
  headerTransparent: true,
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 40,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  inputContainer: {
    paddingTop: 170,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    fontSize: 18,
    color: 'black',
  },
  label: {
    marginVertical: 8,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 30,
  },
  button: {
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    marginVertical: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    backgroundColor: 'green',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '500',
    color: 'white',
  },
});
