import React, { useContext, useEffect, useRef, useState } from 'react';
import qualityService from '../services/quality.service';
import { toast } from 'react-toastify';

const QualitiesContex = React.createContext();

export const useQualities = () => {
  return useContext(QualitiesContex);
};

export const QualitiesProvider = ({ children }) => {
  const [qualities, setQualities] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const prevState = useRef();

  useEffect(() => {
    const getQualities = async () => {
      try {
        const qualities = await qualityService.fetchAll()
        setQualities(qualities.content);
        setIsLoading(false);
      } catch (error) {
        const { message } = error.response.data;
        setError(message);
      }
    };
    getQualities();
  }, []);

  const getQuality = (id) => {
    return qualities.find(quality => quality._id === id);
  };

  const updateQuality = async ({ _id: id, ...data }) => {
    try {
      const { content } = await qualityService.update(id, data);
      setQualities(prevState => prevState.map(item => {
        if (item._id === content._id) {
          return content;
        }
        return item;
      }));
      return content;
    } catch (error) {
      const { message, code } = error.response.data;
      setError({
        message,
        code
      });
      toast.error(message);
    }
  };

  const addQuality = async (data) => {
    try {
      const { content } = await qualityService.create(data);
      setQualities(prevState => [...prevState, content]);
      return content;
    } catch (error) {

    }
  };

  const deleteQuality = async (id) => {
    prevState.current = qualities;
    setQualities(prevState => prevState.filter(item => item._id !== id));
    try {
      await qualityService.delete(id);
    } catch (error) {
      const { message } = error.response.data;
      setError(message);
      toast('Object not deleted');
      setQualities(prevState.current);
    }
  };

  useEffect(() => {
    if (error !== null) {
      toast(error);
      setError(null);
    }
  }, [error]);

  return (
    <QualitiesContex.Provider value={{ qualities, getQuality, updateQuality, addQuality, deleteQuality }}>
      {!isLoading ? children : <h1>Qualities Loading...</h1>}
    </QualitiesContex.Provider>
  );
};
