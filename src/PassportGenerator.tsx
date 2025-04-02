import React, { useState } from 'react';
import { md5 } from 'js-md5'

function PassportGenerator() {
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthLocationLat, setBirthLocationLat] = useState('');
  const [birthLocationLng, setBirthLocationLng] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [currentResidenceLat, setCurrentResidenceLat] = useState('');
  const [currentResidenceLng, setCurrentResidenceLng] = useState('');

  const handlePhotoChange = (event: any) => {
    setPhoto(event.target.files && event.target.files[0]);
  };

  const calculateMd5 = async (file: File | null) => {
    if (!file) {
      return '';
    }

    const reader = new FileReader();
    reader.onload = async (event: any) => {
      const buffer = event.target.result;
      if (buffer) {
        const hash = await md5(buffer.toString());
        console.log('MD5 Hash:', hash);
      }
    };
    reader.readAsArrayBuffer(file as Blob);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (photo) {
      calculateMd5(photo);
    }
    const formData = {
      fullName,
      birthDate,
      birthLocationLat,
      birthLocationLng,
      currentResidenceLat,
      currentResidenceLng,
    };

  };

  return (
    <div className="passport-generator-container">
      <h1 className="passport-generator-header">Passport Generator</h1>
      <form onSubmit={handleSubmit} className="passport-generator-form">
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Birth:</label>
          <div className='form-field'>
            <label htmlFor="birthDate">Date:</label>
            <input
              type="date"
              id="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="birthLocationLat">Latitude:</label>
            <input
              type="number"
              id="birthLocationLat"
              value={birthLocationLat}
              onChange={(e) => setBirthLocationLat(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="birthLocationLng">Longitude:</label>
            <input
              type="number"
              id="birthLocationLng"
              value={birthLocationLng}
              onChange={(e) => setBirthLocationLng(e.target.value)}
            />
          </div>
        </div>
        <div className="birth-info-container">
          <label htmlFor="photo">Photo:</label>
          <input
            type="file"
            id="photo"
            onChange={handlePhotoChange}
          />
        </div>
        <div>
          <label htmlFor="currentResidenceLat">Current Residence Latitude:</label>
          <input
            type="number"
            id="currentResidenceLat"
            value={currentResidenceLat}
            onChange={(e) => setCurrentResidenceLat(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="currentResidenceLng">Current Residence Longitude:</label>
          <input
            type="number"
            id="currentResidenceLng"
            value={currentResidenceLng}
            onChange={(e) => setCurrentResidenceLng(e.target.value)}
          />
        </div>
        <button type="submit">Generate Passport</button>
      </form>
    </div>
  );
}

export default PassportGenerator;