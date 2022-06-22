import React from 'react'
import { Link } from 'react-router-dom'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Card = ({x}) => {
  return (
    <div>
       <div className='card' >
      
         <div className='first_two'>
            <div className="mail"><MailOutlineIcon/></div>
             <div className="middl">
                
                 <div className="name"> {x?.name}</div>
                 <div className="bich">
                     <div className="m2">
                    <AccessTimeIcon/>
                    <div className='iso2'> {x.iso2}</div>
                   
                 </div>
                 <div className="m2">
                    <AccessTimeIcon/>
                    {x.iso2}
                 </div>
                 </div>
                
             </div>
            
         </div>
         
          <Link to={`/single/${x.name}`}> <AirplanemodeActiveIcon/></Link>
        </div>
    </div>
  )
}

export default Card
