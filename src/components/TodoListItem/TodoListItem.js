//Core
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
//Components
import ListGroup from 'react-bootstrap/ListGroup';
import DeleteButton from '../controls/DeleteButton';
import EditButton from '../controls/EditButton';
import DoneButton from '../controls/DoneButton';
import Input from '../Input/Input';
//Styles
import './todoListItem.css';

function TodoListItem(props) {
  const [collapse, setCollapse] = useState(true);
  const { title, setData, id, progress } = props;

  if (collapse) {
    return (
      <ListGroup.Item
        variant="info"
        className="listItem">
        <p className={cx({ done: progress })}>
          You should do: {title}
        </p>
        <div>
          <EditButton
            setCollapse={setCollapse}
            collapse={collapse}
            label="&#9998;" />
          <DeleteButton
            id={id}
            setData={setData}
            title={title} />
        </div>

      </ListGroup.Item>
    )
  } return (
    <ListGroup.Item variant="warning">
      <DoneButton
        title={title}
        setData={setData}
        isDone={progress}
        id={id}
      />
      <Input
        label="Update"
        title={title}
        id={id}
        setData={setData}
        setCollapse={setCollapse}
        collapse={collapse} />
      <EditButton
        setCollapse={setCollapse}
        collapse={collapse}
        label="return"
      />
    </ListGroup.Item>
  )
}

TodoListItem.propTypes = {
  title: PropTypes.string
};

export default TodoListItem;
