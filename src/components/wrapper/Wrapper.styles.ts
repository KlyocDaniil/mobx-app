export const styleCard = {
    height: '100%',
    border: 1,
    boxShadow: 3,
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: 6,
    },
};

export const loaderSx = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mx: 'auto',
    my: '40vh',
};