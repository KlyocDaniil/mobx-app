import { Typography } from '@mui/material';

type Post = {
    id: number;
    userId: number;
    title: string;
    body: string;
};

export function PostModalContent({ post }: { post: Post | null }) {
    if (!post) {
        return <Typography>нет данных</Typography>;
    }
    return (
        <>
            <Typography>Пост #{post.id}</Typography>
            <Typography>Автор: {post.userId}</Typography>
            <Typography>{post.title}</Typography>
            <Typography>{post.body}</Typography>
        </>
    );
}