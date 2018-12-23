import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const StyledDropDownMenu = styled.div`
  display: grid;
  position: absolute;
  left: ${props => props.x};
  top: ${props => props.y};
  width: 80%;
  font-size: 30px;
  background-color: ${props => props.theme.black};
  z-index: 10;
  transition: all 0.5s linear 0s;
  &.closed {
    transform: translateY(-500px);
  }
  > * {
    box-sizing: content-box;
    padding: 20px;
    border: 3px solid ${props => props.theme.offWhite};
    border-radius: 6px;
  }
`;

class DropDownMenu extends Component {
  static propTypes = {
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
    controllingButtonId: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  };

  menuRef = React.createRef();

  componentDidMount = () => {
    const { controllingButtonId } = this.props;
    const button = document.querySelector(`#${controllingButtonId}`);
    button.addEventListener('click', this.toggleMenu);
    this.menuRef.current.addEventListener('click', this.toggleMenu);
  };

  componentWillUnmount = () => {
    const { controllingButtonId } = this.props;
    const button = document.querySelector(`#${controllingButtonId}`);
    button.removeEventListener('click', this.toggleMenu);
    this.menuRef.current.removeEventListener('click', this.toggleMenu);
  };

  toggleMenu = () => {
    const { id } = this.props;
    const menu = document.querySelector(`#${id}`);
    if (menu.classList.contains('closed')) {
      menu.classList.remove('closed');
    } else {
      menu.classList.add('closed');
    }
  };

  render() {
    const { x, y, id } = this.props;
    return (
      <StyledDropDownMenu x={x} y={y} id={id} className="closed" ref={this.menuRef}>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/contact">Contact</Link>
      </StyledDropDownMenu>
    );
  }
}

export default DropDownMenu;
