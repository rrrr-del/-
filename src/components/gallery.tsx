import React, { useState } from 'react';
import { Card, CardMedia, Typography, Box , Tooltip} from '@mui/material';
import { FaRocketchat } from 'react-icons/fa6';
import { FaRegImage } from "react-icons/fa6";

interface Props {
  image_url: string;
  descryption: string;
  name: string;
  num_paints : number ,
  num_artists : number ,
}

const Gallary: React.FC<Props> = ({ image_url, descryption, name , num_paints , num_artists}) => {
  const [hover, setHover] = useState(false);

  const truncateString = (input: string , num : number): string => {
    if (input.length > num) {
      return input.substring(0, num) + '...';
    }
    return input;
  };

  return (
<Card
      sx={{ width: 500, height: 500, backgroundColor: '#ea80fc', borderRadius: '23px', margin : '0 auto'}}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
>   
    <Box sx={{ width: 500, height: 500 , display: 'flex', flexDirection: 'column', }}>
        {hover ? (
            <Box sx={{ 
                position: 'relative', // Set position to relative for the parent
                width: 500, // Ensure the width is 400
                height: 350, // Ensure the height is 350
            }}>

                <CardMedia
                    component="img"
                    image={image_url}
                    alt="Gallery Image"
                    sx={{
                        overflow: 'hidden',
                        width: 500 ,
                        height: 350,
                        objectFit: 'fill',
                        zIndex: 1,
                        position: 'absolute',
                        opacity: 0.2,
                        filter: 'blur(9px)' 
                    }}
                />
                
                {/* <Box sx={{ 
                    position: 'absolute', // Position it absolutely
                    // top: 0, // Align to the top
                    // left: 0, // Align to the left
                    width: 400, // Full width
                    height: 350, // Full height
                    backgroundImage: `url(${image_url})`,
                    objectFit: 'fill',
                    backgroundSize: 'fill', // Cover the entire area
                    opacity: 0.1, // Dim effect
                    transition: 'opacity 0.3s ease', // Smooth transition
                    zIndex: 1, // Ensure it's below the text
                }} /> */}
                
                <Typography variant="h6" sx={{
                    position: 'absolute', 
                    // position: 'relative', // Position relative to the parent
                    textAlign: 'justify', 
                    padding: 3,
                    opacity : 30 ,
                    zIndex: 2, // Ensure text is above the background
                }}>
                    {truncateString(descryption, 270)}
                </Typography>
            </Box>
        ) : (
          <CardMedia
            
            component="img"
            image={image_url}
            alt="Gallery Image"
            sx={{
              overflow: 'hidden',
              width: 500 ,
              height: 350,
              objectFit: 'fill',
            }}
          />
        )}


        <Box
            sx={{
                width: 500,
                height: 75,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                variant:"h3",
                borderBottom: '1px solid #424242',
                // flexDirection: 'row',
                // borderTop: '1px solid #424242',
                 // Optional padding for spacing
            }}
        >
            <Typography variant="h6" sx = {{justifyContent: 'center',
                alignItems: 'center',}}>
                {truncateString(name , 42)}
            </Typography>
        </Box>




        <Box
            sx={{
                width: 500,
                height: 75,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                // borderTop: '1px solid #424242',
                padding: '0 0', // Optional padding for spacing
            }}
        >
            <Box
                sx ={{
                    width: 500 / 3,
                    height: 75,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color : "brown",  
                    // borderRight: '1px solid #cccccc',
                }} 
            >
                <Tooltip title={`${num_paints} paintings`} arrow>
                    <Typography variant="h5">
                        {num_paints}
                    </Typography>
                </Tooltip>
                <FaRegImage style={{ fontSize: '24px' , marginLeft : '16px'}}/>
            </Box>

            <Box
                sx ={{
                    width: 500 / 3,
                    height: 75,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color : "brown",  
                    // borderRight: '1px solid #cccccc',
                }} 
            >
                <Tooltip title={`${num_artists} artists uploaded their pictures in this gallery`} arrow>
                    <Typography variant="h5">
                        {num_artists}
                    </Typography>
                </Tooltip>
            </Box>




            <Box
                sx ={{
                    width: 500 / 3,
                    height: 75,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',  

                }} 
            >
                <FaRocketchat style={{ fontSize: '34px' , color : "brown"}} />
            </Box>
        </Box>

        
    </Box>
</Card>
  );
};

export default Gallary;
