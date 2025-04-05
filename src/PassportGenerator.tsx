import React, { useState } from 'react';
import { md5 } from 'js-md5';

interface FormData {
  fullName: string;
  birthDate: string;
  birthLocationLat: string;
  birthLocationLng: string;
  gender: string;
  weight: string;
  height: string;
  motherName: string;
  motherBirthDate: string;
  motherPassport: string;
  fatherName: string;
  fatherBirthDate: string;
  fatherPassport: string;
  phones: string;
  emails: string;
  education: string;
}

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

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    birthDate: '',
    birthLocationLat: '',
    birthLocationLng: '',
    gender: '',
    weight: '',
    height: '',
    motherName: '',
    motherBirthDate: '',
    motherPassport: '',
    fatherName: '',
    fatherBirthDate: '',
    fatherPassport: '',
    phones: '',
    emails: '',
    education: '',
  });

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
    <>
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
          <div>
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              value={formData.gender || ''}
              onChange={(e) => setFormData({...formData, gender: e.target.value})}
            >
              <option value="">Select Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="weight">Weight (kg):</label>
            <input
              type="number"
              id="weight"
              value={formData.weight || ''}
              onChange={(e) => setFormData({...formData, weight: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="height">Height (cm):</label>
            <input
              type="number"
              id="height"
              value={formData.height || ''}
              onChange={(e) => setFormData({...formData, height: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="motherName">Mother's Full Name:</label>
            <input
              type="text"
              id="motherName"
              value={formData.motherName || ''}
              onChange={(e) => setFormData({...formData, motherName: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="motherBirthDate">Mother's Birth Date:</label>
            <input
              type="date"
              id="motherBirthDate"
              value={formData.motherBirthDate || ''}
              onChange={(e) => setFormData({...formData, motherBirthDate: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="motherPassport">Mother's Passport (MD5):</label>
            <input
              type="text"
              id="motherPassport"
              value={formData.motherPassport || ''}
              onChange={(e) => setFormData({...formData, motherPassport: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="fatherName">Father's Full Name:</label>
            <input
              type="text"
              id="fatherName"
              value={formData.fatherName || ''}
              onChange={(e) => setFormData({...formData, fatherName: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="fatherBirthDate">Father's Birth Date:</label>
            <input
              type="date"
              id="fatherBirthDate"
              value={formData.fatherBirthDate || ''}
              onChange={(e) => setFormData({...formData, fatherBirthDate: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="fatherPassport">Father's Passport (MD5):</label>
            <input
              type="text"
              id="fatherPassport"
              value={formData.fatherPassport || ''}
              onChange={(e) => setFormData({...formData, fatherPassport: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="phones">Phones (comma-separated):</label>
            <input
              type="text"
              id="phones"
              value={formData.phones || ''}
              onChange={(e) => setFormData({...formData, phones: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="emails">Emails (comma-separated):</label>
            <input
              type="text"
              id="emails"
              value={formData.emails || ''}
              onChange={(e) => setFormData({...formData, emails: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="education">Education (comma-separated):</label>
            <input
              type="text"
              id="education"
              value={formData.education || ''}
              onChange={(e) => setFormData({...formData, education: e.target.value})}
            />
          </div>
          <button type="submit">Generate Passport</button>
        </form>
      </div>
    </>
  );
}

export default PassportGenerator;