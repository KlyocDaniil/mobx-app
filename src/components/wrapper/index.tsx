import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useStores } from '../../root-store-context';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';


export const Wrapper = observer(() => {
    const { post: { getPostsAction, posts }, counts: { total, count } } = useStores()

    console.log(total)

    console.log(count)

    useEffect(() => {
        getPostsAction()
    },[])

    if (!posts) {
        return null
    }
    //MUI
    return posts.case ({
        pending: () => <CircularProgress size="3rem"/>,
        rejected: () => 
            <Alert variant="outlined" severity="error">
                    Error
            </Alert>,
        fulfilled: (value) => (
            <div>
                {value.map(({ id,title,body,userId }) => (
                    <div key = { id }>
                        <h5>user ID: { userId }</h5>
                        <h2>{ title }</h2>
                        <p>{ body }</p>
                    </div>
                ))}
            </div>
        ),
    })
})