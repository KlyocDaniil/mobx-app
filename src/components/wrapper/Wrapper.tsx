import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { CircularProgress, Alert, Grid, Button, } from '@mui/material';
import { useStores } from '../../root-store-context';
import { useModal } from '../../hooks/useModal';
import BasicModal from '../modal/Modal'
import { PostCard } from '../postCard/PostCard'
import { loaderSx } from '../wrapper/Wrapper.styles'
import { PostModalContent } from '../postModalContent/PostModalContent';

type Post = {
    id: number,
    userId: number,
    title: string,
    body: string
}

export const Wrapper = observer(() => {
    const { post: { getPostsAction, posts } } = useStores()
    const { open, data: selectedPost, handleOpen, handleClose } = useModal<Post>();

    useEffect(() => {
        getPostsAction()
    }, [])

    if (!posts) {
        return null
    }

    return posts.case({
        pending: () => <CircularProgress size={80} sx={loaderSx} />,

        rejected: () =>
            <Alert variant="outlined" severity="error"
                action={
                    <Button color='inherit' size='small' onClick={getPostsAction}>
                        Повторить?
                    </Button>
                }
            >
                Не удалось загрузить посты
            </Alert>,

        fulfilled: (value) => (
            <>
                <Grid container spacing={2}>
                    {value.map((post) => (
                        <Grid
                            key={post.id}
                            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                        >
                            <PostCard post={post} onOpen={handleOpen} />
                        </Grid>
                    ))}
                </Grid>
                <BasicModal open={open} onClose={handleClose}>
                    <PostModalContent post={selectedPost}/>
                </BasicModal>
            </>
        ),
    })
})