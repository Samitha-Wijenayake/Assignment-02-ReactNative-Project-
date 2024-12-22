import React, { createContext, useState, useEffect } from 'react';

export const HospitalContext = createContext();

export const HospitalProvider = ({ children }) => {
  const [hospitals, setHospitals] = useState([]);
  const [totalReacts, setTotalReacts] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await fetch(
          'https://www.communitybenefitinsight.org/api/get_hospitals.php?state=NC'
        );
        const data = await response.json();

        const hospitalsWithReacts = data.map((hospital) => ({
          ...hospital,
          reacts: 0,
          hasReacted: false,
        }));

        setHospitals(hospitalsWithReacts);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHospitals();
  }, []);

  const toggleReact = (index) => {
    const updatedHospitals = [...hospitals];
    const selectedHospital = updatedHospitals[index];

    if (selectedHospital.hasReacted) {
      selectedHospital.reacts -= 1;
      setTotalReacts(totalReacts - 1);
    } else {
      selectedHospital.reacts += 1;
      setTotalReacts(totalReacts + 1);
    }

    selectedHospital.hasReacted = !selectedHospital.hasReacted;
    setHospitals(updatedHospitals);
  };

  return (
    <HospitalContext.Provider
      value={{
        hospitals,
        isLoading,
        totalReacts,
        toggleReact,
      }}
    >
      {children}
    </HospitalContext.Provider>
  );
};
