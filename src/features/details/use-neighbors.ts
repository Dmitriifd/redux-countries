import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectNeighbors } from './details-selectors';
import { loadNeighborsByBorder } from './details-slice';

export const useNeighbors = (borders: string[] = []) => {
  const dispatch = useDispatch();
  const neighbors = useSelector(selectNeighbors);

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighborsByBorder(borders));
    }
  }, [borders, dispatch]);

  return neighbors;
};
