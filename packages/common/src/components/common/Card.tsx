import React from 'react';
import {Card as UICard} from '@ui-kitten/components';
import {CardStyles} from './Card.Styles';

interface CardProps {
  children: React.ReactNode;
  header?: any;
  style?: Object;
};

const Card: React.FC<CardProps> = ({
  children,
  header = null,
  style = {}
}) => {
  return <UICard style={[CardStyles.container, style]} header={header} appearance="filled" disabled>{children}</UICard>;
}

export default Card;
