// import React from 'react';
// import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';

// const PortfolioItem = ({ item, onEdit, onDelete, onToggleVisibility }) => {
//   const completeImageUrl = item.imageUrl.startsWith('http')
//   ? item.imageUrl
//   : `http://localhost:3000/uploads/${item.imageUrl}`;

// console.log("Complete Image URL:", completeImageUrl);
// console.log("Image URL:", item.imageUrl);
//   return (
//     <Card style={{ position: 'relative' }}>
//       {item.status === 'hidden' && (
//         <div style={{ position: 'absolute', top: 10, right: 10, color: 'white', backgroundColor: 'brown', padding: '5px 10px', borderRadius: '10px', fontSize: '0.75rem' }}>
//           Hidden
//         </div>
//       )}
//       <CardContent>
//         <Typography variant="h5">{item.title}</Typography>
//         <Typography variant="body2">{item.description}</Typography>
//         <img 
//             src={completeImageUrl} 
//             alt={item.title} 
//           style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '10px' }} 
//           />
//         {/* {completeImageUrl && (
//           <img 
//             src={completeImageUrl} 
//             alt={item.title} 
//           //  style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '10px' }} 
//           />
//         )} */}
//         <Button href={item.clientLink} target="_blank" rel="noopener noreferrer">
//           View Client Site
//         </Button>
//       </CardContent>
//       <CardActions>
//         <Button onClick={() => onEdit(item)}>Edit</Button>
//         <Button onClick={() => onDelete(item.id)}>Delete</Button>
//         <Button onClick={() => onToggleVisibility(item.id)}>
//           {item.status === 'visible' ? 'Hide' : 'Show'}
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default PortfolioItem;
// import React, { useState } from 'react';
// import { Card, CardContent, Typography, Button, CardActions, Dialog, DialogContent } from '@mui/material';

// const PortfolioItem = ({ item, onEdit, onDelete, onToggleVisibility }) => {
//   const [open, setOpen] = useState(false);

//   const completeImageUrl = item.imageUrl.startsWith('http')
//     ? item.imageUrl
//     : `http://localhost:3000/uploads/${item.imageUrl}`;

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Card style={{ position: 'relative' }}>
//       {item.status === 'hidden' && (
//         <div style={{ position: 'absolute', top: 10, right: 10, color: 'white', backgroundColor: 'brown', padding: '5px 10px', borderRadius: '10px', fontSize: '0.75rem' }}>
//           Hidden
//         </div>
//       )}
//       <CardContent>
//         <Typography variant="h5">{item.title}</Typography>
//         <Typography variant="body2">{item.description}</Typography>
//         <img 
//           src={completeImageUrl} 
//           alt={item.title} 
//           style={{ width: '100%', cursor: 'pointer' }} 
//           onClick={handleClickOpen} // Deschide dialogul la clic
//         />
//         <Button href={item.clientLink} target="_blank" rel="noopener noreferrer">
//           View Client Site
//         </Button>
//       </CardContent>
//       <CardActions>
//         <Button onClick={() => onEdit(item)}>Edit</Button>
//         <Button onClick={() => onDelete(item.id)}>Delete</Button>
//         <Button onClick={() => onToggleVisibility(item.id)}>
//           {item.status === 'visible' ? 'Hide' : 'Show'}
//         </Button>
//       </CardActions>

//       {/* Dialog pentru imagine */}
//       <Dialog open={open} onClose={handleClose} maxWidth="lg">
//         <DialogContent style={{ textAlign: 'center' }}>
//           <img 
//             src={completeImageUrl} 
//             alt={item.title} 
//             style={{ width: '100%', height: 'auto', maxHeight: '80vh' }} 
//           />
//         </DialogContent>
//       </Dialog>
//     </Card>
//   );
// };

// export default PortfolioItem;
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, CardActions, Dialog, DialogContent } from '@mui/material';

const PortfolioItem = ({ item, onEdit, onDelete, onToggleVisibility }) => {
  const [open, setOpen] = useState(false);

  const completeImageUrl = item.imageUrl.startsWith('http')
    ? item.imageUrl
    : `http://localhost:3000/uploads/${item.imageUrl}`;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card style={{ position: 'relative' }}>
      {item.status === 'hidden' && (
        <div style={{ position: 'absolute', top: 10, right: 10, color: 'white', backgroundColor: 'brown', padding: '5px 10px', borderRadius: '10px', fontSize: '0.75rem' }}>
          Hidden
        </div>
      )}
      <CardContent>
        <Typography variant="h5">{item.title}</Typography>
        <Typography variant="body2">{item.description}</Typography>
        <img 
          src={completeImageUrl} 
          alt={item.title} 
          style={{ 
            width: '100%', 
            height: '200px',  // dimensiunea fixa in grid
            objectFit: 'cover', // pastreaza proportiile imaginii si taie surplusul
            cursor: 'pointer' 
          }} 
          onClick={handleClickOpen} 
        />
        <Button href={item.clientLink} target="_blank" rel="noopener noreferrer">
          View Client Site
        </Button>
      </CardContent>
      <CardActions>
        <Button onClick={() => onEdit(item)}>Edit</Button>
        <Button onClick={() => onDelete(item.id)}>Delete</Button>
        <Button onClick={() => onToggleVisibility(item.id)}>
          {item.status === 'visible' ? 'Hide' : 'Show'}
        </Button>
      </CardActions>

      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogContent style={{ textAlign: 'center' }}>
          <img 
            src={completeImageUrl} 
            alt={item.title} 
            style={{ width: '100%', height: 'auto', maxHeight: '80vh' }} 
          />
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default PortfolioItem;
