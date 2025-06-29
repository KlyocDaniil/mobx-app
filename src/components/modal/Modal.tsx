import { Box, Modal } from '@mui/material'
import { ReactNode } from 'react';
import { modalContainerStyle, modalBoxStyle } from './modal.styles';

type BasicModalProps = {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
};

export default function BasicModal({ open, onClose, children }: BasicModalProps) {
    return (
        <Modal
            open={open}
            onClose={onClose}
            sx={modalContainerStyle}
        >
            <Box sx={modalBoxStyle}>
                {children}
            </Box>
        </Modal>
    );
}