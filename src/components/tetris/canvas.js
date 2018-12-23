import React from 'react';
import PropTypes from 'prop-types';

const Canvas = ({ refName, id, width, height }) => (
    <canvas ref={refName} id={id} width={width} height={height} />
);

Canvas.propTypes = {
    refName: PropTypes.instanceOf(Object).isRequired,
    id: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
};

export default Canvas;
