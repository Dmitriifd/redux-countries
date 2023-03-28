import { useNavigate } from 'react-router-dom';
import { useCountries } from './use-countries';
import { Card } from 'components/Card';
import { List } from 'components/List';
import { Country, CountryInfo } from 'types';

interface CountryListProps {
  currentData: Country[];
}

const CountryList = ({ currentData }: CountryListProps) => {
  const navigate = useNavigate();
  const [countries, { error, status }] = useCountries();

  const renderData = (arr: Country[]) => {
    return arr.map((c) => {
      const countryInfo: CountryInfo = {
        img: c.flags.png,
        name: c.name,
        info: [
          {
            title: 'Population',
            description: c.population.toLocaleString()
          },
          {
            title: 'Region',
            description: c.region
          },
          {
            title: 'Capital',
            description: c.capital
          }
        ]
      };

      return <Card key={c.name} onClick={() => void navigate(`/country/${c.name}`)} {...countryInfo} />;
    });
  };

  return (
    <>
      {error && <h2>Can't fetch data</h2>}
      {status === 'loading' && <h2>Loading...</h2>}

      {status === 'received' && (
        <List>
          {currentData.length
            ? renderData(currentData)
            : renderData(countries)
          }
        </List>
      )}
    </>
  );
};

export { CountryList };
