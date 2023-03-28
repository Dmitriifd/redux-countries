import Pagination from 'components/Pagination';
import { Controls } from 'features/controls/Controls';
import { CountryList } from 'features/countries/CountryList';
import { useCountries } from 'features/countries/use-countries';
import { useMemo, useState } from 'react';

export const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [countries] = useCountries();
  let PageSize = 12;

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    return countries.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, PageSize, countries]);


  return (
    <>
      <Controls />
      <CountryList currentData={currentData} />
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={countries.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};
