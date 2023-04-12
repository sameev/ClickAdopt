import { QueryStatus, useQuery } from "@tanstack/react-query";
import { Animal } from "../types/APIResponsesTypes";
import fetchBreedList from "../fetches/fetchBreedList";

const useBreedList = (animal: Animal) => {
  const results = useQuery(["breeds", animal], fetchBreedList);

  return [results?.data?.breeds ?? [], results.status] as [
    string[],
    QueryStatus
  ];
};

export default useBreedList;
