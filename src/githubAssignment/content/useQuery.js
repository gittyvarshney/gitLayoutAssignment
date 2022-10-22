import {useEffect, useState} from 'react';
import axios from 'axios';

export const useQuery = (page) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [hasMore, sethasMore] = useState(true);

    useEffect( () => {

        let req = setTimeout(
        () => { axios({
            method: 'GET',
            url: `https://api.github.com/repos/facebook/react/issues?page=${page}`,
        }).then((req) => {
            if(req && req.data && req.data.length > 0){
                setData( prevData => [ ...new Set([...prevData, ...req.data])])
                sethasMore(true); // we can still call for more pages as data is not yet exhausted
            }else{
                sethasMore(false); // if data exhausted then we should stop calling api by setting sethasMore to false
            }
            setLoading(false); // set Loading to false when we done fetching the data
            setError(false);

        }).catch( (e) => {
            setError(true); // if something went wrong set error to true
        } ) },
        500)
        setLoading(true); // set Loading to true When api is triggered
        return () => {
            clearTimeout(req)
        }
    }, [page])

    return [loading, error, data, hasMore]
}