/** @jsx React.DOM */

var listgroupInstance = (
    <ListGroup>
      <ListGroupItem href="#" active>Link 1</ListGroupItem>
      <ListGroupItem href="#">Link 2</ListGroupItem>
      <ListGroupItem href="#" disabled>Link 3</ListGroupItem>
    </ListGroup>
  );

React.renderComponent(listgroupInstance, mountNode);
