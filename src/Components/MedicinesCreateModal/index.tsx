import {
  View,
  Modal,
  Text,
} from "react-native";

interface Props {
  isOpen: boolean;
  setOpen: any;
}

export default function MedicinesCreateModal({
  isOpen,
  setOpen,
}: Props) {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => setOpen(false)}
    >
      <View style={{
        backgroundColor: "black",
      }}>
      </View>
    </Modal>
  );
}
