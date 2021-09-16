import * as React from "react";
import { StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState, onAvailability } from "../redux";
import { useEffect, useState } from "react";
import NbaTeams from "./NbaTeams";
import {
  Divider,
  Button,
  ScrollView,
  Stack,
  NativeBaseProvider,
} from "native-base";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [teams, setTeams] = useState([]);
  const dispatch = useDispatch();
  let tab: any = useSelector((state: ApplicationState) => state.leagueReducer);

  useEffect(() => {
    dispatch(onAvailability());
  }, []);

  useEffect(() => {
    setTeams(tab.availability);
  }, [tab]);

  const showEast = () => {
    const east = tab.availability.filter((team: any) => {
      return team.leagues.standard.confName === "East";
    });
    setTeams(east);
  };

  const showWest = () => {
    const west = tab.availability.filter((team: any) => {
      return team.leagues.standard.confName === "West";
    });
    setTeams(west);
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Button.Group
          variant="solid"
          isAttached
          space={10}
          mx={{
            base: "auto",
            md: 0,
          }}
        >
          <Button colorScheme="black" mr={2} onPress={showWest}>
            Show West
          </Button>

          <Divider orientation="vertical" bg="#fb923c" />

          <Button
            onPress={() => setTeams(tab.availability)}
            colorScheme="black"
            _text={{
              color: "white",
            }}
          >
            Show All
          </Button>

          <Divider orientation="vertical" bg="#fb923c" />

          <Button
            colorScheme="black"
            _text={{
              color: "white",
            }}
            onPress={showEast}
          >
            Show East
          </Button>
        </Button.Group>

        <Divider my={1} bg="#fb923c" />

        <ScrollView width="100%">
          <Stack space={3} mb={1}>
            {teams.length > 0 &&
              teams.map((team, i) => {
                return <NbaTeams team={team} key={i} />;
              })}
          </Stack>
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: "80%",
  },
});
