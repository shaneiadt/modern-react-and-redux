import React, { Component } from "react";
import { connect } from 'react-redux';

import { Button, Item, Container } from 'semantic-ui-react';

class SongList extends Component {
    render() {
        const { songs } = this.props;

        return (
            <Container>
                {songs.map(({ title, duration }) =>
                    <Item key={title} style={{ border: '1px solid #f1f1f1', padding: '10px', margin: '10px 0' }}>
                        <Item.Content style={{ display: 'flex', alignItems: 'center' }}>
                            <Item.Header>{title}</Item.Header>
                            <Item.Description>{duration}</Item.Description>
                            <Item.Extra style={{ flexGrow: '1', textAlign: 'right' }}>
                                <Button>Select</Button>
                            </Item.Extra>
                        </Item.Content>
                    </Item>)}
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    };
}

export default connect(mapStateToProps)(SongList);