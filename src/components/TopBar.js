import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class List extends Component {
  state = this.props.data;

  render(props) {
    return (
        <Container fluid='true'>
          <Row>
            {this.state.columnOrder.map(id => {
                const column = this.state.columns[id];

                return (
                  <Col>
                    <p className="column-name" key={column.id}>{column.title}</p>
                  </Col>
                )
              })}
          </Row>
        </Container>
    )
  }
}
