import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../store';
import {getSportTypes} from '../services/sports';
import {setSportTypes} from '../store/sportTypes/sportTypes.slice';
import {ISportPayload} from '../model/sport.model';

export interface ISportTypesFetchReturnType {
  loading: boolean;
  error: boolean;
}

export const useSportTypesFetch = (): ISportTypesFetchReturnType => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state.sportTypes);
  const fetchSports = async (): Promise<void> => {
    const typesFromStorage = localStorage.getItem('sportTypes');
    if (!state.sportTypes.length && !typesFromStorage) {
      try {
        setLoading(true);
        setError(false);
        const types = await getSportTypes();
        localStorage.setItem('sportTypes', JSON.stringify(types));
        dispatch(setSportTypes(types));
      } catch (error) {
        setLoading(false);
        setError(true);
      }
      setLoading(false);
    } else if (typesFromStorage) {
      const typesFromStorageParsed = JSON.parse(typesFromStorage) as ISportPayload;
      dispatch(setSportTypes(typesFromStorageParsed));
    }
  };


  useEffect(() => {
    void fetchSports();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {loading, error};
};
