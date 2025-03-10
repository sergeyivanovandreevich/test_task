import { Typography, Box, Modal } from "@mui/material";
import { modalStyle } from "./Modal.styles";
import { IDog } from "../../types";

type Props = {
    selectedDog: IDog;
    onClose: () => void;
}

const InfoModal = ({ selectedDog, onClose }: Props) => {
    return (
        <Modal
            open={!!selectedDog}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle}>
                {selectedDog && (
                    <>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {selectedDog.name}
                        </Typography>
                        <img
                            src={selectedDog.image}
                            alt={selectedDog.name}
                            style={{ width: '100%', height: '200px', objectFit: 'cover', marginTop: '10px' }}
                        />
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <strong>Breed Group:</strong> {selectedDog.breed_group}
                        </Typography>
                        <Typography>
                            <strong>Description:</strong> {selectedDog.temperament}
                        </Typography>
                    </>
                )}
            </Box>
        </Modal>
    )
}

export default InfoModal;
