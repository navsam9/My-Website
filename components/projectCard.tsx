import { Card, CardMedia, CardContent, Typography, CardActions, Button, CardActionArea, Container } from "@mui/material";

interface Props {
    name?: String,
    description?: String
    website?: String
    source?: String
    languages?: String[]
}


export default function projectCard({ name, description, website, source, languages}: Props) {
    return (
        <Card sx={{ width: "300px", height: "350px", backgroundColor: "rgba(0, 0, 0, 0.658)" }}>
            <CardActionArea sx={{ "&:hover": { color: "white" }, height: "300px" }}
                href={`${website}`}>
                <CardMedia
                    component="img"
                    height="200px"
                    image={`https://raw.githubusercontent.com/navsam9/${name}/master/preview.jpg`}
                    alt="snake"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" sx={{ color: "white" }}>
                        {name?.replace(/-/g, " ")}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "white" }}>
                        {description}
                    </Typography>
                    <Typography>
                        {languages}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: "center", height: "50px" }}>
                <Button size="medium" color="primary" href={`${source}`}>
                    &lt;source code&gt;
                </Button>
            </CardActions>
        </Card>
    );
}
