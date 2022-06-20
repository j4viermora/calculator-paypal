import { atom, useAtom } from 'jotai';

const configComission = atom({
  averagePaypalCommission: 5.4,
  paypalCommission: 0.3,
});

export const useConfigComission = () => {
  const [config, setConfig] = useAtom(configComission);

  const setFirstComission = (value: number) => {
    setConfig({
      ...config,
      averagePaypalCommission: value,
    });
  };

  const setSecondComission = (value: number) => {
    setConfig({
      ...config,
      paypalCommission: value,
    });
  };

  const resetComssions = () => {
    setConfig({
      averagePaypalCommission: 5.4,
      paypalCommission: 0.3,
    });
  };

  return {
    config,
    setFirstComission,
    setSecondComission,
    resetComssions,
  };
};
