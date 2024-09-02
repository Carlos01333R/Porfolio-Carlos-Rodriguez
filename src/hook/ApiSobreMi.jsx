/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Api from "./supabase";
const useSupabaseSobreMi = () => {
  const [sobreMi, setSobreMi] = useState([]);
  const [loading, setLoading] = useState(false);
  const supabase = Api();

  async function getCountries() {
    setLoading(true);
    const { data, error } = await supabase.from("sobremi").select("*");
    if (error) console.error(error);
    else {
      setLoading(false);
      setSobreMi(data);
    }
    console.log(data);
  }

  useEffect(() => {
    getCountries();
  }, []);

  return {
    supabase,
    sobreMi,
    setSobreMi,
    loading,
  };
};

export default useSupabaseSobreMi;
