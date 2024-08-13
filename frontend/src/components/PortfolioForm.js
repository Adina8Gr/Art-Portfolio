import React, { useState, useEffect } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Switch } from '@mui/material';
import axios from 'axios';

const PortfolioForm = ({ open, handleClose, initialData, refreshData }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    clientLink: '',
    status: 'visible',
  });

  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        title: '',
        description: '',
        imageUrl: '',
        clientLink: '',
        status: 'visible',
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleStatusChange = (e) => {
    setFormData({ ...formData, status: e.target.checked ? 'visible' : 'hidden' });
  };

  const isFormValid = () => {
    return formData.title.trim() !== '' && formData.description.trim() !== '' && formData.clientLink.trim() !== '';
  };

  const handleSubmit = async () => {
    let imageUrl = formData.imageUrl;
    if (imageFile) {
      const uploadFormData = new FormData();
      uploadFormData.append('file', imageFile);
      const response = await axios.post('http://localhost:3000/files/upload', uploadFormData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      imageUrl = `http://localhost:3000/uploads/${response.data.filename}`;
      console.log(response.data);
    }

    const portfolioData = { ...formData, imageUrl };

    if (initialData && initialData.id) {
      await axios.patch(`http://localhost:3000/portfolio/${initialData.id}`, portfolioData);
    } else {
      await axios.post('http://localhost:3000/portfolio', portfolioData);
      setFormData({
        title: '',
        description: '',
        imageUrl: '',
        clientLink: '',
        status: 'visible',
      });
      setImageFile(null);
    }

    refreshData();
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{initialData ? 'Edit Portfolio Item' : 'Add Portfolio Item'}</DialogTitle>
      <DialogContent>
        <TextField
          name="title"
          label="Title"
          value={formData.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="description"
          label="Description"
          value={formData.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ marginTop: '20px', marginBottom: '20px' }}
        />
        <TextField
          name="clientLink"
          label="Client Link"
          value={formData.clientLink}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <FormControlLabel
          control={<Switch checked={formData.status === 'visible'} onChange={handleStatusChange} />}
          label={formData.status === 'visible' ? 'Visible' : 'Hidden'}
          style={{ marginTop: '20px' }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit} disabled={!isFormValid()}>{initialData ? 'Update' : 'Add'}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PortfolioForm;
