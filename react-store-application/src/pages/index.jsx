import { Button, Col, Container, Grid, Input, Row, Spacer, Text } from '@nextui-org/react';
import { useState } from 'react'
import CardImage from '../components/dataDisplay/Card';
import TitleWithLine from '../components/dataDisplay/Text/TitleWithLine';

import '../style/divider.css';

const AgregarProducto = () => {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [categoria, setCategoria] = useState('');
  const [file, setFile] = useState('Ningun archivo seleccionado');
  const [allData, setAllData] = useState([]);

  const handleSubmit = () => setAllData([...allData, { id, nombre, precio, categoria, file }]);

  const handleFile = async ({ target }) => {

    const reader = new FileReader();

    reader.onload = ev => {
      console.log('Data = >', ev.target.result);
      setFile(ev.target.result);
    };

    reader.readAsDataURL(target.files[0]);
  };

  return (
    <Container>
      <Spacer y={2} />
      <Row justify='center' gap={2} >
        <Col>
          <Input labelPlaceholder="id" onChange={(e) => setId(e.target.value)} />
        </Col>
        <Col>
          <Input labelPlaceholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
        </Col>
      </Row>
      <Spacer y={1} />
      <Row>
        <Col>
          <Input labelPlaceholder="precio" onChange={(e) => setPrecio(e.target.value)} />
        </Col>
        <Col>
          <label >Categoria</label>
          <select onChange={(e)=>setCategoria(e.target.value)}>
            <option value="">Seleccione una opción</option>
            <option value="dama">Dama</option>
            <option value="caballero">Caballero</option>
            <option value="niños">Niño</option>
          </select>
        </Col>
        <Col>
          <Row>
            <input type='file' onChange={handleFile} accept="image/*" />
          </Row>
        </Col>
      </Row>
      <Spacer y={1} />
      <Row justify='center' >
        <Button onPress={handleSubmit}>
          Agregar
        </Button>
      </Row>
      <TitleWithLine title="Damas" />
      <Grid.Container gap={2} justify="center">
        {allData.filter(d => d.categoria === 'dama').map(d => (
          <Grid xs={12} sm={2} key={d.id}>
            <CardImage id={d.id} title={d.nombre} precio={d.precio} src={d.file} />
          </Grid>
        ))}
      </Grid.Container>
      <TitleWithLine title="Caballeros" gradient="45deg, $purple600 -20%, $pink600 100%" />
      <Grid.Container gap={2} justify="center">
        {allData.filter(d => d.categoria === 'caballero').map(d => (
          <Grid xs={12} sm={2} key={d.id}>
            <CardImage id={d.id} title={d.nombre} precio={d.precio} src={d.file} />
          </Grid>
        ))}
      </Grid.Container>
      <TitleWithLine title="niños" gradient="45deg, $yellow600 -20%, $red600 100%" />
      <Grid.Container gap={2} justify="center">
        {allData.filter(d => d.categoria === 'niños').map(d => (
          <Grid xs={12} sm={2} key={d.id}>
            <CardImage id={d.id} title={d.nombre} precio={d.precio} src={d.file} />
          </Grid>
        ))}
      </Grid.Container>

    </Container>
  )
}

export default AgregarProducto;
