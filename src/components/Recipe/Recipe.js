import React, { useEffect, useMemo, useState } from "react";
import Loader from "../Shared/components/componentStates/Loader";
import ContainerWrapper from "../wrapper/containerWrapper";
import InputWrapper from "../wrapper/inputWrapper";
import FlexBoxWrapper from "../wrapper/FlexBoxWrapper";
import SearchAlt from "../Shared/components/componentStates/SearchAlt";
import SearchResult from "../Shared/components/componentStates/SearchResult";
import { BsSearch } from "react-icons/bs";
import { fetchData } from "../../server/service";

function Recipe() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loadingState, setLoadingState] = useState(true);
  const [fetchedData, setFetchedData] = useState(null);

  const handleSearch = useMemo(() => {
    return () => {
      fetchData(searchQuery).then((response) => {
        setFetchedData(response);
      });
    };
  }, [searchQuery]);

  useEffect(() => {
    const delay = 500;

    if (searchQuery) {
      //fetching data from api
      const timer = setTimeout(() => {
        handleSearch();
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [searchQuery, handleSearch]);

  useEffect(() => {
    setLoadingState(false);
    const loaderTimer = setTimeout(() => {
      setLoadingState(true);
    }, 700);

    return () => clearTimeout(loaderTimer);
  }, [fetchedData]);

  return (
    <ContainerWrapper>
      <div className="heading-line">
        <strong>Search Recipes</strong>
        <InputWrapper>
          <input
            type="text"
            placeholder="Search your recipe"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>
            <BsSearch />
          </button>
        </InputWrapper>
      </div>
      <FlexBoxWrapper>
        {loadingState ? (
          fetchedData ? (
            <SearchResult fetchedData={fetchedData} />
          ) : (
            <SearchAlt />
          )
        ) : (
          <Loader />
        )}
      </FlexBoxWrapper>
    </ContainerWrapper>
  );
}

export default Recipe;
