import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import TagList from './tagList';
import * as tagService from '../services/tags';


class Tags extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: [
                { 
                    name: 'Test Title 1', 
                    id: 0 
                },
                { 
                    name: 'Test Title 2', 
                    id: 1 
                },
                { 
                    name: 'Test Title 3',
                    id: 2 
                },
            ]
        }; 
    }

    componentDidMount() {
        this.getTags();
    }

    getTags() {
        tagService.all()
            .then((tags) => {
                let tagsArray = [];
                for (let i = 0; i < tags.length; i++) {
                    tagsArray.push({
                        name: tags[i].name,
                        id: tags[i].id
                    });
                }

                this.setState({
                    tags: tagsArray
                });
            }).catch((err) => {
                console.log(err);
            });
            console.log(this.state.tags);

    }

    render() {
        return (
            
            <div className="tags-container">
                <TagList tags={this.state.tags} />
                
            </div>
        );
    }
}

export default Tags;