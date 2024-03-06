import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";


function DogCard({dog, onNavigateToEdit, onDelete}){

    return (
        <Grid item xs={12} md={4} lg={3}>
            <Card>
                <CardMedia component={'img'} image={dog.image} height="150"/>
                <CardContent>
                    <Typography variant={"h5"}>{dog.name}</Typography>
                </CardContent>
                <CardActions>
                    <Button variant={"contained"} onClick={() => {
                        onNavigateToEdit(dog.id);
                    }} fullWidth>Edit</Button>
                    <Button variant={"contained"} color={"error"} onClick={() => {
                        onDelete(dog.id);
                    }} fullWidth>Delete</Button>
                </CardActions>
            </Card>
        </Grid>

    )
}

export default DogCard