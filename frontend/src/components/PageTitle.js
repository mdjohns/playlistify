import React from 'react';
import { Heading } from '@chakra-ui/core';
import PropTypes from 'prop-types';


function PageTitle(props) {
    return (
        <Heading>{props.title}</Heading>
    )
}

export default PageTitle;
