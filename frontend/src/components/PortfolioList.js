import React, { useState, useEffect } from 'react';
import { Button, Grid, FormControlLabel, Switch } from '@mui/material';
import PortfolioItem from './PortfolioItem';
import PortfolioForm from './PortfolioForm';
import axios from 'axios';

const PortfolioList = () => {
  const [items, setItems] = useState([]);
  const [formOpen, setFormOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [showHidden, setShowHidden] = useState(false);

  const fetchData = () => {
    axios.get('http://localhost:3000/portfolio')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching portfolio items:', error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (item) => {
    setCurrentItem(item);
    setFormOpen(true);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/portfolio/${id}`)
      .then(() => fetchData())
      .catch(error => console.error('Error deleting portfolio item:', error));
  };

  const handleAdd = () => {
    setCurrentItem(null);
    setFormOpen(true);
  };

  const handleToggleVisibility = (id) => {
    const item = items.find(item => item.id === id);
    const updatedStatus = item.status === 'visible' ? 'hidden' : 'visible';
    axios.patch(`http://localhost:3000/portfolio/${id}`, { status: updatedStatus })
      .then(() => fetchData())
      .catch(error => console.error('Error updating portfolio item:', error));
  };

  const handleCloseForm = () => {
    setFormOpen(false);
    setCurrentItem(null);
  };

  const filteredItems = showHidden ? items : items.filter(item => item.status === 'visible');

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <Button onClick={handleAdd} variant="contained" color="primary" style={{ marginRight: '20px' }}>
          Add Portfolio Item
        </Button>
        <FormControlLabel
          control={<Switch checked={showHidden} onChange={() => setShowHidden(!showHidden)} />}
          label="Show Hidden"
        />
      </div>
      <Grid container spacing={2}>
        {filteredItems.map(item => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <PortfolioItem 
              item={item} 
              onEdit={handleEdit} 
              onDelete={handleDelete} 
              onToggleVisibility={handleToggleVisibility} 
            />
          </Grid>
        ))}
      </Grid>
      <PortfolioForm open={formOpen} handleClose={handleCloseForm} initialData={currentItem} refreshData={fetchData} />
    </div>
  );
};

export default PortfolioList;