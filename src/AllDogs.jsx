import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {Button, Container, Grid, Typography} from "@mui/material";
import DogCard from "./DogCard.jsx";
import {DOGS} from "./db.jsx";

function AllDogs() {
    const navigate = useNavigate()
    const [dogs, setDogs] = useState(DOGS)

    const onNavigateToEdit = (id) => {
        navigate(`/edit/${id}`)
    }

    const onDeleteDog = (id) => {
        const removableDog = DOGS.find((element) => element.id === id)
        DOGS.splice(DOGS.indexOf(removableDog), 1)
        setDogs(DOGS)

        navigate('/')
    }

    return (
        <Container maxWidth={'lg'}>
            <Grid container spacing={2} maxWidth={'lg'}>
                <Grid item xs={12}>
                    <Typography variant={"h4"}>All Dogs</Typography>
                </Grid>
                {dogs.map((dog) => {
                    return (
                        <DogCard dog={dog}
                                 key={dog.id}
                                 onNavigateToEdit={onNavigateToEdit}
                        onDelete={onDeleteDog}
                        />
                    )
                })}
                <Grid item xs={12}>
                    <Button variant={"contained"} onClick={() => {
                        navigate('/new')
                    }} fullWidth>New dog</Button>
                </Grid>
            </Grid>
        </Container>

    )
}

export default AllDogs