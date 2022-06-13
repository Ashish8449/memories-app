import { Container, Grid, Grow } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";

export default function Home() {
    
    const dispatch = useDispatch();

    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        dispatch(getPosts());
        console.log("run");
    }, [currentId, dispatch]);


    return (
        <Grow in>
            <Container>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="stretch"
                    spacing={3}
                >
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
}
