import React from 'react';
import {
  Modal as RNModal,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import PromptlyIcon from './PromptlyIcon';
import {ModalStyles} from './Modal.Styles';

const Modal = ({modalVisible, hideModal, children}) => {
  return (
    <RNModal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        hideModal();
      }}>
      <View style={ModalStyles.container}>
        <TouchableOpacity
          onPress={() => {
            hideModal();
          }}
          style={ModalStyles.shadow}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? undefined : 'padding'}
          style={ModalStyles.content}>
          <TouchableOpacity
            onPress={() => {
              hideModal();
            }}
            style={ModalStyles.closeContainer}>
            <PromptlyIcon name="times" />
          </TouchableOpacity>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            style={ModalStyles.innerContent}>
            {children}
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </RNModal>
  );
};

export default Modal;
