import { Card, Col, Text } from '@nextui-org/react';
import PropTypes from 'prop-types';
import './style/index.css';

const CardImage = ({id, title, precio, src}) => (
  <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12}  weight="bold" transform="uppercase" color="#ffffffAA">
          {id}
        </Text>
        <Text className="shadow-text" h4 color="white">
          {title}
        </Text>
        <Text className="shadow-text" h4 color="white">
          ${precio}
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src={src}
      objectFit="cover"
      width="100%"
      height={150}
      alt="Card image background"
    />
  </Card>
);

CardImage.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  precio: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
}

export default CardImage;
