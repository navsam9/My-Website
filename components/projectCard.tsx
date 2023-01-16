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
        <Card sx={{ width: "350px", height: "420px", backgroundColor: "rgba(15,15,15, 0.7)" }}>
            <CardActionArea sx={{ "&:hover": { color: "white" }, height: "370px" }}
                href={`${website}`}>
                <CardMedia
                    component="img"
                    height="250px"
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
                    <Typography variant="body2" 
                    sx={{ color: "rgb(180,180,180)", position: "absolute", bottom: "0", right: "16px"}}>
                        {languages?.join(', ')}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: "center", height: "50px" }}>
                <Button size="medium" color="primary" href={`${source}`}>
                    &lt;View on GitHub&gt;
                </Button>
            </CardActions>
        </Card>
    );
}
