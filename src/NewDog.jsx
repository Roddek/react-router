import {Button, Container, Grid, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {DOGS} from "./db.jsx";
import {useState} from "react";

function NewDog() {
    const navigate = useNavigate()
    const [dogs, setDogs] = useState(DOGS)
    const [newDogName, setNewDogName] = useState('')
    const [newDogImg, setNewDogImg] = useState('')

    const addDewDog = () => {
        const newDog = {
            id: dogs.length+1,
            name: newDogName,
            image: newDogImg
        }
        DOGS.push(newDog)
        setDogs(DOGS)

        navigate('/')
    }

    const onNameChanged = (event) => {
        setNewDogName(event.target.value)
    }

    const onImgChanged = (event) => {
        setNewDogImg(event.target.value)
    }

    return (
        <Container maxWidth={'lg'}>
            <Grid container spacing={2} maxWidth={'lg'}>
                <Grid item xs={12}>
                    <Typography variant={"h4"}>New dog</Typography>
                </Grid>

                <TextField label="Name" margin="normal" fullWidth onChange={onNameChanged}/>
                <TextField label="Image url" margin="normal" fullWidth onChange={onImgChanged}/>

                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <Button variant="contained"  onClick={
                            addDewDog
                        }  fullWidth>
                            Add new dog
                        </Button>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Button color="error" variant="contained"  onClick={() => {
                            navigate('/')
                        }}  fullWidth>
                            CANCEL
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default NewDog