import * as React from "react";
import { useState } from "react";
import {
  Image,
  Text,
  Avatar,
  Box,
  Pressable,
  Center,
  Modal,
} from "native-base";
import { Dimensions } from "react-native";
const windowHeight = Dimensions.get("window").height - 200;

type Props = {
  team: any;
};

const NbaTeams: React.FC<Props> = ({ team }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Pressable
      width="100%"
      onPress={() => {
        setShowModal(true);
      }}
    >
      <Modal
        size="full"
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        overlayVisible={true}
      >
        <Modal.Content height={windowHeight} maxHeight={windowHeight}>
          <Modal.CloseButton />
          <Center>
            <Modal.Header>
              <Image
                size={150}
                borderRadius={100}
                source={{ uri: team.logo }}
                alt={team.nickname}
              />
              {team.fullName}
            </Modal.Header>
            <Modal.Body>
              <Text fontSize="lg">From the city of {team.city}</Text>
              <Text fontSize="lg">
                Playing at the {team.leagues.standard.confName}ern Conference
              </Text>
            </Modal.Body>
          </Center>
        </Modal.Content>
      </Modal>

      <Center>
        <Box
          borderRadius={5}
          width="90%"
          bg="#fb923c"
          p={4}
          shadow={2}
          _text={{
            fontSize: "md",
            fontWeight: "bold",
            color: "#000000,",
          }}
        >
          <Center>
            <Avatar
              size="xl"
              source={{
                uri: team.logo,
              }}
            ></Avatar>
            <Text bold>The {team.nickname}</Text>
          </Center>
        </Box>
      </Center>
    </Pressable>
  );
};

export default NbaTeams;
