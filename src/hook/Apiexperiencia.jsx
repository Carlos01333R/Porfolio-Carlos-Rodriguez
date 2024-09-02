/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Api from "./supabase";
const useSupabaseExperiencia = () => {
  const [experiencia, setExperiencia] = useState([]);
  const [loading, setLoading] = useState(false);
  const supabase = Api();

  async function getCountries() {
    setLoading(true);
    const { data, error } = await supabase.from("experiencia").select();
    if (error) console.error(error);
    else {
      setLoading(false);
      setExperiencia(data);
    }
    console.log(data);
  }

  useEffect(() => {
    getCountries();
  }, []);

  return {
    supabase,
    experiencia,
    setExperiencia,
    loading,
  };
};

export default useSupabaseExperiencia;
