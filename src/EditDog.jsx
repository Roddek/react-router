import {Button, Container, Grid, TextField, Typography} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import {DOGS} from "./db.jsx";
import {useState} from "react";

function EditDog() {
    const {id} = useParams()
    const dog = {
    id: id,
    name: DOGS[id-1].name,
    image:  DOGS[id-1].image
}

    const navigate = useNavigate()
    const [dogs, setDogs] = useState(DOGS)
    const [newDogName, setNewDogName] = useState(dog.name)
    const [newDogImg, setNewDogImg] = useState(dog.image)

    const updateDog = () => {
        const removableDog = DOGS.find((element) => element.id === id)
        DOGS.splice(DOGS.indexOf(removableDog), 1)

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
                    <Typography variant={"h4"}>Edit dog: {id}</Typography>
                </Grid>

                <TextField label="Name" margin="normal" fullWidth onChange={onNameChanged}
                defaultValue={dog.name}/>
                <TextField label="Image url" margin="normal" fullWidth onChange={onImgChanged} placeholder={"asd"} defaultValue={dog.image}/>

                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <Button variant="contained"  onClick={
                            updateDog
                        }  fullWidth>
                            Update
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

export default EditDog