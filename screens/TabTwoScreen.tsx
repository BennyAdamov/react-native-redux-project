import * as React from "react";
import { Divider, Text, Center, View, NativeBaseProvider } from "native-base";

export default function TabTwoScreen() {
  return (
    <NativeBaseProvider>
      <View style={{ margin: 20 }}>
        <Center>
          <Text fontSize="2xl" color="#FFFFFF">
            How to use the App
          </Text>
          <Divider my={3} />
          <Text fontSize="lg" color="#FFFFFF">
            In the "NBA TEAMS" tab you will be presented with a list of the
            teams in the NBA league. If chosen you can click on the specific
            team you would like to know more information about, this will
            trigger a modal popup which will show you the additional
            information.
          </Text>
          <Divider my={3} />

          <Text fontSize="lg" color="#FFFFFF">
            If you would like to filter the teams presented by Conference, you
            can click "Show East/West" and it will only present the teams from
            the Confrenece you chose.
          </Text>
        </Center>
      </View>
    </NativeBaseProvider>
  );
}
