import {useEffect, useState} from 'react';

import {STORAGE_ITEMS} from '@constants';
import {useAsyncStorage} from '@hooks';

export const useLaunch = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  const {getItem, setItem} = useAsyncStorage();

  const checkFirstLaunch = async () => {
    try {
      const isFirst = await getItem(STORAGE_ITEMS.ALREADY_LAUNCHED);
      if (isFirst === null) {
        setIsFirstLaunch(true);
        setItem(STORAGE_ITEMS.ALREADY_LAUNCHED, 'false');
      } else {
        setIsFirstLaunch(false);
      }
    } catch (error) {
      console.error('Error checking first launch:', error);
    }
  };

  useEffect(() => {
    checkFirstLaunch();
  }, []);

  return {
    isFirstLaunch,
  };
};
