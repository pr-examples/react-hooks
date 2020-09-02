const get = () => {
    const uri = "https://run.mocky.io/v3/5a877529-addb-45b1-baae-e9ba11610951";

    const suscribe = (setUsers, setError) => {
        fetch(uri)
        .then(response => response.json())
        .then(response => {
            if( response.OK ) {
                setUsers(response.data);
            }else{
                setError(new Error("Failed to get users"));
            }
        })
        .catch(error => setError(error));
    };

    return { suscribe };
};

export default get;