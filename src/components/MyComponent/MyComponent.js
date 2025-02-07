import React from 'react';
import PropTypes from 'prop-types';
import { MyComponentWrapper } from './MyComponent.styled';

const MyComponent = () => (
 <MyComponentWrapper data-testid="MyComponent">
    MyComponent Component
 </MyComponentWrapper>
);

MyComponent.propTypes = {};

MyComponent.defaultProps = {};

export default MyComponent;
