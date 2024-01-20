import queryStrings from "../constants/queryString";

const {app_id,app_key} = queryStrings;

export const fetchData = async(Query) => {
    try{
      const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${Query}&app_id=${app_id}&app_key=${app_key}`;

      const data = await fetch(url);
      const response = data.json();
      return response;

    }catch(error){
      console.log(error.message, "something went wrong");
      return error.message;
    }
}

export const fetchTabData = async (Query) => {
  try {
    const url = `https://api.edamam.com/api/recipes/v2/${Query}/?type=public&q=&app_id=${app_id}&app_key=${app_key}`;
    const data = await fetch(url);
    const response = data.json();
    return response;
  } catch (error) {
    console.log(error.message, "something went wrong");
    return error.message;
  }
};
