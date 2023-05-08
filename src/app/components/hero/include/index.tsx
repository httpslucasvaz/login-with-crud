import { Button, Container, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useRef } from "react";

export function Include() {

    const textFieldRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        const textFieldValue = textFieldRef.current?.value;
        console.log(textFieldValue);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleButtonClick()
        }
    };


    return (
        <Container maxWidth="md">
            <TextField
                id='movie-search'
                label="pesquisar"
                variant="outlined"
                fullWidth
                color="success"
                inputRef={textFieldRef}
                onKeyPress={handleKeyPress}
                sx={{
                    margin: '1rem 0'
                }} />
            <Button
                onClick={handleButtonClick}
                variant="contained"
                color="success"
                size="large" sx={{
                    width: "100%",
                    fontWeight: "bold",
                }}>
                <SearchIcon sx={{
                    marginRight: "0.5rem",
                }} />      PESQUISAR FILME
            </Button>


        </Container>
    )
}