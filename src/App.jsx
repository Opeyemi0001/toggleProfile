import { useState, useEffect } from 'react';

const Profile = () => {
  const [person] = useState({
    fullName: "John Doe",
    bio: "Software Engineer with a passion for creating web applications.",
    imgSrc: "https://via.placeholder.com/150", // Placeholder image
    profession: "Web Developer",
  });
  const [shows, setShows] = useState(false);
  const [timeSinceMounted, setTimeSinceMounted] = useState(0);

  useEffect(() => {
    // Set up the interval timer when the component mounts
    const timer = setInterval(() => {
      setTimeSinceMounted((prevTime) => prevTime + 1);
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  const toggleShow = () => setShows((prevShows) => !prevShows);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={toggleShow}>
        {shows ? "Hide Profile" : "Show Profile"}
      </button>

      {shows && (
        <div style={{ marginTop: '20px' }}>
          <img src={person.imgSrc} alt="Profile" style={{ width: '150px', borderRadius: '50%' }} />
          <h2>{person.fullName}</h2>
          <p><strong>Profession:</strong> {person.profession}</p>
          <p><strong>Bio:</strong> {person.bio}</p>
        </div>
      )}

      <div style={{ marginTop: '20px' }}>
        <p>Time since component mounted: {timeSinceMounted} seconds</p>
      </div>
    </div>
  );
};

export default Profile;




