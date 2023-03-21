import React, {useState} from 'react';
import {Layout} from '@ui-kitten/components';
import PropTypes from 'prop-types';
import AvatarItem from './AvatarItem';

const AvatarDropdown = ({item, onClickAction}) => {
  const [showChildren, setShowChildren] = useState(false);
  const hasChildren = (children = []) => children.length > 0;

  return (
    <Layout testID="avatarDropdown">
      <AvatarItem
        item={item}
        onPress={() => {
          onClickAction();
          hasChildren(item.childrens) && setShowChildren(!showChildren);
        }}
        hasChildren={hasChildren(item.childrens)}
      />
      {showChildren && (
        <Layout testID="avatarDropdownChildren">
          {item.childrens.map(child => (
            <AvatarItem key={child.id} item={child} isChild={true} />
          ))}
        </Layout>
      )}
    </Layout>
  );
};

AvatarDropdown.defaultProps = {
  item: {},
  onClickAction: () => {},
};

AvatarDropdown.propTypes = {
  item: PropTypes.object.isRequired,
  onClickAction: PropTypes.func,
};

export default AvatarDropdown;
