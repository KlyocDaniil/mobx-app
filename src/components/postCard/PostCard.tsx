import { Card, CardContent, Typography, Button } from '@mui/material';
import { styleCard } from '../wrapper/Wrapper.styles';

type Post = {
    id: number;
    userId: number;
    title: string;
    body: string;
};

type PostCardProps = {
    post: Post;
    onOpen: (post: Post) => void;
};

export function PostCard({ post, onOpen }: PostCardProps) {
    return (
        <Card sx={styleCard}>
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle2" color="text.secondary">
                    User ID: {post.userId}
                </Typography>
                <Typography variant="h6" component="div">
                    {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {post.body}
                </Typography>
            </CardContent>
            <Button
                variant="contained"
                sx={{ m: 2 }}
                onClick={() => onOpen(post)}
            >
                Открыть
            </Button>
        </Card>
    );
}