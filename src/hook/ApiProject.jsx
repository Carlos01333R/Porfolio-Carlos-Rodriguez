/* eslint-disable react-hooks/exhaustive-deps */
import Api from "./supabase";
import { useEffect, useState } from "react";

const useProject = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const supabase = Api();

  async function getCountries() {
    setLoading(true);
    const { data, error } = await supabase.from("countries").select();
    if (error) console.error(error);
    else {
      setLoading(false);
      setCountries(data);
    }
  }

  useEffect(() => {
    getCountries();
  }, []);

  return {
    countries,
    setCountries,
    loading,
  };
};

export default useProject;
