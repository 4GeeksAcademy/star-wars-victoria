const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            personajes: [],
            planetas: [],
        },
        actions: {
            characters: async () => {
                try {
                    const response = await fetch (`https://swapi.dev/api/people`)
                    let data = await response.json()
                    setStore({personajes: data.results})
                    console.log(data.results)
                    return true;
                } catch (error) {
                    console.log(error);
                    return false;
                }
            },
            
            planets: async () => {
                try {
                    const response = await fetch (`https://swapi.dev/api/planets`)
                    let data = await response.json()
                    setStore({planetas: data.results})
                    console.log(data.results)
                    return true;
                } catch (error) {
                    console.log(error);
                    return false;
                }
            }
        }
    };
};

export default getState;