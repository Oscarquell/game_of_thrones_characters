import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Header from "../../components/header/header";
import {axiosInstance} from "../../API/API";
import IsLoader from "../../components/loader/loader";
import './style.scss'

const DetailsPage = () => {

  const {id} = useParams()
  const [character, setCharacter] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      try {
        const response = await axiosInstance(`Characters/${id}`)
        setCharacter(response.data)
      } catch (error) {

      } finally {
        setIsLoading(false)
      }
    })()
  }, []);

  console.log(character)

  return (
    <div>
      <Header title='Detail Page' />
      { isLoading ?
        <IsLoader />
        :
        <div className='character-wrap'>
          <h2>{character.fullName}</h2>
          <div className='character-image-box'>
            <img
              className='character-image'
              src={character.imageUrl}
              alt={character.image}
            />
          </div>
          <span>
            <strong>ID</strong>: {character.id}
          </span>
          <span>
            <strong>First Name</strong>: {character.firstName}
          </span>
          <span>
            <strong>Last Name</strong>: {character.lastName}
          </span>
          <span>
            <strong>Title</strong>: {character.title}
          </span>
          <span>
            <strong>Family</strong>: {character.family}
          </span>
          <span>
            <strong>Image URL</strong>: {character.imageUrl}
          </span>
        </div>
      }
    </div>
  );
};

export default DetailsPage;