import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class List extends Component {
  render(props) {
    return (
        <Container fluid='true'>
          <Row>
            {this.props.columnOrder.map(id => {
                const column = this.props.columns[id];

                return (
                  <Col>
                    <p className="list-name">{column.title}</p>
                  </Col>
                )
              })}
          </Row>
        </Container>
    )
  }
}
