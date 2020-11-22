import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import styled from 'styled-components'

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: '180px 50px 75px 100px',
  },
  media: {
    height: 250,
  },
});
const Img = styled.img`
 border: 2px solid #cb0303;
 border-radius: 50%;
 padding: 10px;
 width: 60%;
 margin: 30px;
`
const Name = styled.h5`
 margin: center;
 color:black;
 font-size: 15px;
 text-align: center;
`
const Select = styled.select`
background-color: #444;
color: white;
padding: .1em 1em;
margin: 5px 10px 30px 5px;
width: 60%;
border: none;
font-size: 16px;
font-family: times new roman;
box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.2);
outline: none;
`
const Column = styled.div
  `
 display: table-cell;
 text-align: center;
`

const Row = styled.div
  `
 display: table;
 padding:  0.5em 0.5em;
 width: 100%;
 table-layout: fixed;
 border-spacing: 2px;
`
function Biodata(props) {
    return (
      <div>
        <Img src={props.src} /><br />
        <a>{props.nama}</a><br />
        <a>{props.nim}</a>
      </div>
    )
}
export default function Index() {
  const classes = useStyles();

  return (
    <Row>
        <Column>
            <Card className={classes.root}>
                <Name>
                    <Biodata nama="Jeremia Joseph P" nim="21120117140031" src="https://www.linkpicture.com/q/1538144627911_IMG_6758.jpg" />
                </Name>
                <Select>
                    <option value="1">Kelas</option>
                    <option value="2">A</option>
                    <option value="3">B</option>
                </Select>
            </Card>
            </Column>
        <Column>
            <Card className={classes.root}>
                <Name>
                <Biodata nama="Chandra Purnama Wijaya" nim="21120117130070" src="https://www.linkpicture.com/q/foto-alma2.jpg" />
                </Name>
                <Select>
                    <option value="1">Kelas</option>
                    <option value="2">A</option>
                    <option value="3">B</option>
                </Select>
            </Card>
        </Column>
    </Row>
  );
}
