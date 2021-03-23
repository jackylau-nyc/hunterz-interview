// export const getResult = (e) => async (dispatch, e) => {
//     try {
//       const { data } = await api.fetchResult();

//       dispatch({ type: "FETCH_ALL", payload: data });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// export const getSearchResult = async (e) => {
//   try {
//     const response = await api.fetchResult();
//     const data = await response;
//     //console.log(data);
//     this.setState({ setImage: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const listenForOpening = async (run, setRun) => {
  try {
    await fetch(`http://localhost:5000/appcheck`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => {
        if (data !== 0) {
          setRun(false);
          alert("Appointments are available");
        }
      });
    return run;
  } catch (error) {
    return error.message;
  }
};
