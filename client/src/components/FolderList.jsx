import React from 'react'
import { CardContent, List, Typography , Card  } from '@mui/material'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

export default function FolderList({folders}) {
    const {folderId} =useParams()

    const [activeFolderId, setActiveFolderId] =  useState(folderId);




  return (
    <List sx={{
        width : '100%',
        bgcolor : '#7D9D9C',
        height : '100%',
        padding:'10px',
        textAlign: 'left',
        overflowY : 'auto',
    }}>
    {
    folders.map(({id,name})=>{
        return (
            <Link key={id}
            to={`folders/${id}`}
            style={{textDecoration: 'none', }}
            onClick={()=>setActiveFolderId(id)}
            > 
            <Card sx={{mb : '5px', backgroundColor: id === activeFolderId ? 'rgb(255 211 140)' : null,}}>
                <CardContent  sx={{'&:last-child':{pb:'10px'},padding : '10ppx'}}>
                    <Typography sx={{fontSize : 16 , fontWeight : 'bold' }}>{name}</Typography>
                </CardContent>
            </Card>
                
                
            </Link>
        )
    })
}

    </List>
  )
}
