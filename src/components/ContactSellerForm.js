import React from 'react';
import { Alert, Keyboard } from 'react-native';
import { Notifications } from 'expo';
import * as yup from 'yup';

import { Form, FormField, SubmitButton } from './forms';
import messagesApi from '../api/messages';

export default ContactSellerForm = ({ listing }) => {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log('Error', result);
      return Alert.alert('Error', 'Could not send the message to the seller.');
    }

    resetForm();

    Notifications.presentLocalNotificationAsync({
      title: 'Awesome!',
      body: 'Your message was sent to the seller.',
    });
  };

  return (
    <Form
      initialValues={{ message: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <FormField
        maxLength={255}
        multiline
        name="message"
        numberOfLines={3}
        placeholder="Message..."
      />
      <SubmitButton title="Contact Seller" />
    </Form>
  );
};

const validationSchema = yup.object().shape({
  message: yup.string().required().min(1).label('Message'),
});
