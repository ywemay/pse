import React, { useState } from 'react';

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
    if (!file) return '';

    const reader = new FileReader();
    reader.onload = async (event: any) => {
      const buffer = event.target.result;
      if (buffer) {
        const md5 = await crypto.subtle.digest('MD5', buffer as BufferSource);
        const hashArray = Array.from(new Uint8Array(md5));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        console.log('MD5 Hash:', hashHex);
        // You can store or display the hash here
      }
    };
    reader.readAsArrayBuffer(file as Blob);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (photo) {
      calculateMd5(photo);
    }
    console.log('Form submitted', {
      fullName,
      birthDate,
      birthLocationLat,
      birthLocationLng,
      photo,
      currentResidenceLat,
      currentResidenceLng,
    });
  };

  return (
    <div>
      <h1>Passport Generator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="birthDate">Birth Date:</label>
          <input
            type="date"
            id="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="birthLocationLat">Birth Location Latitude:</label>
          <input
            type="number"
            id="birthLocationLat"
            value={birthLocationLat}
            onChange={(e) => setBirthLocationLat(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="birthLocationLng">Birth Location Longitude:</label>
          <input
            type="number"
            id="birthLocationLng"
            value={birthLocationLng}
            onChange={(e) => setBirthLocationLng(e.target.value)}
          />
        </div>
        <div>
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