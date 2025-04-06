import React, { useState } from 'react';
import { md5 } from 'js-md5';
import { getFormattedDate } from './utils/date';

const defaultPassport = {
  human: {
    name: '',
    gender: '',
    photo: { hash: '' },
    birth: {
      date: new Date(),
      location: {
        lt: '',
        lg: '',
        elevation: '',
      }
    },
    // physics: {
    //   weight: 70, //kg
    //   height: 160, //cm
    // },
    // relatives: {
    //   mother: { name: '', passport: ''},
    //   father: { name: '', passport: ''}
    // },
    phones: [''],
    emails: [''],
  },
  passport: {
    created: {
      at: new Date(),
    }
  }
}

function PassportGenerator() {
  const [photo, setPhoto] = useState<File | null>(null);
  const [data, setData ] = useState(defaultPassport);

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
  };

  const setHumanField = (cb:(h:typeof data.human) => void) => {
    setData(prev => {
      const { human } = prev;
      cb(human)
      return {...prev, human};
    })
  }

  return (
    <>
      <div className="passport-generator-container">
        <h1 className="passport-generator-header">Passport Generator</h1>
        <p>This form allows one to create a Human of Earth Passport file in yaml format. It does not send or collect any data. The resulted files and data is to be stored on your computer.</p>
        <form onSubmit={handleSubmit} className="passport-generator-form">
          <div className='form-field'>
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              value={data.human.name}
              onChange={(e) => setHumanField((human) => {
                human.name = e.target.value;
              })}
            />
          </div>
          <div className='form-field'>
            <label htmlFor='photo'>Passport Photo:</label>
            <input
              type='file'
              accept='image/png,image/jpg,image/jpeg'
              onChange={e => handlePhotoChange(e)}
              />
          </div>
          <div className='form-field'>
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              value={data.human.gender || ''}
              onChange={(e) => setHumanField((human) => {
                human.gender = e.target.value;
              })}
            >
              <option value="">Select Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Other</option>
            </select>
          </div>
          <div className='form-field'>
            <label htmlFor="birthDate">Birth Date</label>
            <input
              type="date"
              id="birthDate"
              value={getFormattedDate(data.human.birth.date || new Date())}
              onChange={(e) => setHumanField((human) => {
                human.birth.date = new Date(e.target.value);
              })}
            />
          </div>
          <div className='form-field'>
            <label htmlFor="phones">Phones:</label>
            { data.human.phones.map((phone, index) => {
              return <div>
                <input
                  type="text"
                  id={"phones" + index}
                  value={data.human.phones[index] || ''}
                  onChange={(e) => setHumanField((human) => {
                    human.phones[index] = e.target.value;
                  })}
                />
                {index > 0 && <input type='button' value={'Delete'} onClick={(e) => {
                  e.preventDefault();
                  setData( (prev) => {
                    const phones = ([ ...data.human.phones ]).filter((_,i) => i !== index)
                    const human = { ...data.human, phones};
                    return { ...prev, human}
                  })
                }} />}
              </div>
            }
            )
          }
          <div className='form-field'>
            <input type='button' value={'Add another phone'} onMouseDown={(e) => {
              e.preventDefault();
              setData( (prev) => {
                const phones = [...data.human.phones]
                phones.push('');
                const human = { ...data.human, phones};
                return { ...prev, human}
              })
            }}/>
            </div> 
          </div>
          <div className='form-field'>
            <label htmlFor="emails">Emails:</label>
            { data.human.emails.map((_, index) => {
              return <div>
                <input
                  type="text"
                  id={"emails_" + index}
                  value={data.human.emails[index] || ''}
                  onChange={(e) => setHumanField((human) => {
                    human.emails[index] = e.target.value;
                  })}
                />
                {index > 0 && <input type='button' value={'Delete'} onClick={(e) => {
                  e.preventDefault();
                  setData( (prev) => {
                    const emails = ([ ...data.human.emails ]).filter((_,i) => i !== index)
                    const human = { ...data.human, emails};
                    return { ...prev, human}
                  })
                }} />}
              </div>
            }
            )
          }
          <div className='form-field'>
            <input type='button' value={'Add another email'} onMouseDown={(e) => {
              e.preventDefault();
              setData( (prev) => {
                const emails = [...data.human.emails]
                emails.push('');
                const human = { ...data.human, emails};
                return { ...prev, human}
              })
            }}/>
            </div> 
          </div>
          <button type="submit">Generate Passport</button>
        </form>
      </div>
    </>
  );
}

export default PassportGenerator;