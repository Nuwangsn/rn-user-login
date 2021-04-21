import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const UserListScreen = props => {
  const uesrname = props.navigation.getParam('username');
  const password = props.navigation.getParam('password');
  console.log(uesrname);
  console.log(password);

  const loggedUser = useSelector(state =>
    state.user.availableUsers.find(
      user => user.username === uesrname && user.password === password,
    ),
  );
  console.log(loggedUser);

  if (!loggedUser) {
    Alert.alert(
      'Username or password in incorrect',
      'Enter correct username or password',
      [{text: 'Okay', onPress: () => props.navigation.navigate('login')}],
    );
  }

  return (
    <View style={styles.screen}>
        <Text style={{paddingBottom:10}}>User Details</Text>
        <View style={styles.userInfo}>
            <Text>User id</Text>
            <Text>{loggedUser.id}</Text>
        </View>
        <View style={styles.userInfo}>
            <Text>Name</Text>
            <Text>{loggedUser.name}</Text>
        </View>
        <View style={styles.userInfo}>
            <Text>Username</Text>
            <Text>{loggedUser.username}</Text>
        </View>
        <View style={styles.userInfo}>
            <Text>User Email</Text>
            <Text>{loggedUser.email}</Text>
        </View>
      
      
      
      
    </View>
  );
};

export default UserListScreen;

const styles = StyleSheet.create({
screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
},
userInfo:{
    padding: 11,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
    marginHorizontal: 5,
    marginVertical: 6,
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { height: 0.2, width: 0 },
    shadowRadius: 0.5,
    borderRadius: 10,
    width:'80%'

}
});
