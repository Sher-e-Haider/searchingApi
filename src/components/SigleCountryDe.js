import React, { useEffect, useState } from 'react'
import { fetchData } from '../api/api'
import { Link, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AppBar from '../appbar/Appbar'


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
   
  const useStyles = makeStyles({
    table: {
      minWidth: 100,
    },
    item:{
        fontSize:'20px',
        margin:'300px',
        padding:'30px'
    }
   
  });
const SigleCountryDe = (props) => {
    const classes = useStyles();
    const [singleData,setSingleData] = useState([])
    const {confirmed,recovered,deaths,lastUpdate} = singleData
    const rows = [
        createData('Confirmed', confirmed?.value),
        createData('Deaths', deaths?.value, ),
        createData('Recovered',recovered?.value),
        createData('lastUpdate',lastUpdate),
       
      ];
    console.log(singleData,'sinle');
   const { id } = useParams();
  console.log(id,'pppppppp');
  
    useEffect(()=>{
        const fetchCountries=async()=>{
       
            setSingleData( await fetchData(id))
        }
        fetchCountries()
       },[])
       
  return (
    <div>
   <AppBar id={id}/>

       <h2 className='head' >{id}'Detailed</h2>
   
    <TableContainer component={Paper}>
    <Table className={classes.table} size="small" aria-label="a dense table">
      
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right" className={classes.item} >{row.calories}</TableCell>
            <TableCell align="right" className={classes.table} >{row.fat}</TableCell>
            <TableCell align="right" className={classes.table}>{row.carbs}</TableCell>
            <TableCell align="right" className={classes.table}>{row.protein}</TableCell>
            <TableHead>
        {/* <TableRow>
         
          <TableCell align="right">Calories</TableCell>
          <TableCell align="right">Fat&nbsp;(g)</TableCell>
          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          <TableCell align="right">Protein&nbsp;(g)</TableCell>
        </TableRow> */}
      </TableHead>
          </TableRow>
         
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  )
}

export default SigleCountryDe
