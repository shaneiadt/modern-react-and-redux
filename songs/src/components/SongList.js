import React, { Component } from "react";
import { connect } from 'react-redux';
import { Button, Item, Container, Grid } from 'semantic-ui-react';

import { selectSong } from '../actions';
import SongDetail from "./SongDetail";

class SongList extends Component {
    render() {
        const { songs } = this.props;

        return (
            <Container>
                <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            {songs.map((song) =>
                                <Item key={song.title} style={{ border: '1px solid #f1f1f1', padding: '10px', margin: '10px 0' }}>
                                    <Item.Content style={{ display: 'flex', alignItems: 'center' }}>
                                        <Item.Header><strong>{song.title}</strong> - {song.duration}</Item.Header>
                                        <Item.Extra style={{ flexGrow: '1', textAlign: 'right' }}>
                                            <Button onClick={() => this.props.selectSong(song)}>Select</Button>
                                        </Item.Extra>
                                    </Item.Content>
                                </Item>)}
                        </Grid.Column>
                        <Grid.Column>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', flexDirection: 'column' }}>
                                <SongDetail />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    };
}

export default connect(mapStateToProps, { selectSong })(SongList);