import React, {useEffect, useState} from 'react';
import Header from "../../components/header/header";
import {axiosInstance} from "../../API/API";
import IsLoader from "../../components/loader/loader";
import './style.scss'
import DataTable from "../../components/table/table";

const HomePage = () => {

  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState()

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      try {
        const response = await axiosInstance('/Characters')
        setCharacters(response.data)
      } catch (error) {

      } finally {
        setIsLoading(false)
      }
    })()
  }, []);

  return (
    <div>
      <Header title='Character List'/>
      {isLoading ?
        <IsLoader />
        :
        <DataTable
          characters={characters}
        />
      }
    </div>
  );
};

export default HomePage;