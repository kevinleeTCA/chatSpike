import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { APP_ID, PULLDOWN_DISTANCE } from "./consts";
import SendBird from "sendbird";

export default class App extends React.Component {
  render() {
    const sb = new SendBird({
      appId: APP_ID
    });
    console.log(sb);
    console.log(sb.connect);
    const userIds = ["unique_user_id1", "unique_user_id2"];
    // distinct is false
    
    sb.connect(userIds[0], (user, error) => {});
    sb.GroupChannel.createChannelWithUserIds(
      userIds,
      false,
      "GroupChat",
      "",
      {},
      function(createdChannel, error) {
        if (error) {
          console.error(error);
          return;
        }
    
        console.log(createdChannel);
      }
    );

    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
