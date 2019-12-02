import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from 'gatsby-theme-gine-blog/src/components/mui-override/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ColorfulTag from 'gatsby-theme-gine-blog/src/components/utils/hash-colorful-tag'
import StateTag from 'gatsby-theme-gine-blog/src/components/utils/state-tag';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'gatsby'
import { parseImageUrl } from 'notabase/src/utils'
import { hidden } from 'ansi-colors';

const styles = theme => ({
    card: {
        display: 'flex',
        minHeight: 300,
        width: 420,
        margin: '10px auto',
        position: 'relative',
        flexDirection: 'column'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        minWidth: 150,
        objectFit: 'cover',
        height: 200
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
});


function MediaControlCard(props) {

    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }


    const { classes, theme, data: { node: {
        name, comment, background_image, slug, stars, status, tags
    } } } = props;

    const CSMap = {
        '通关': '#f44336',
        '常玩': '#9e9e9e',
        '鸽了': '#607d8b',
        '喜加一': '#795548'
    }

    return (
        <Card className={classes.card}>
            <StateTag state={status} color={CSMap[status]} />
            <CardMedia
                className={classes.cover}
                image={parseImageUrl(background_image[0] || '', 420)}
                title={name}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6" >
                        {name}
                    </Typography>
                    <div style={{ display: 'flex' }}>
                        {
                            tags && tags.map(tag => <ColorfulTag tag={tag} key={tag} to={`games`} />)
                        }
                    </div>
                    {
                        stars && Array(parseInt(stars) + 1).join("⭐️")
                    }
                    <Typography variant="subtitle1" color="textSecondary" onClick={handleClickOpen} >
                        {comment}
                    </Typography>
                </CardContent>
            </div>
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id={`book-${slug}`}>{`关于《${name}》的评论`}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {`${comment}`}
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
        </Card>
    );
}

MediaControlCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);