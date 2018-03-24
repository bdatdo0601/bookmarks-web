import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
};

function ProfileInfoCard(props) {
    const { classes, imageURL, studentName } = props;
    // `props.imageURL` equivalent `const { imageURL } = props --> imageURL`
    return (
        <div>
            <Card className={classes.card}>
                <CardMedia className={classes.media} image={imageURL} title="Contemplative Reptile" />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {studentName}
                    </Typography>
                    <Typography component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                        continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

ProfileInfoCard.propTypes = {
    classes: PropTypes.object.isRequired,
    imageURL: PropTypes.string,
    studentName: PropTypes.string,
};

ProfileInfoCard.defaultProps = {
    imageURL: "https://media0dk-a.akamaihd.net/87/16/2cda3e87c8d45e18cc7e3e931c26a244.jpg",
    studentName: "An Huynh",
};

export default withStyles(styles)(ProfileInfoCard);
