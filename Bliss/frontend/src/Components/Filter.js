import React, { Component } from "react";
import { ProSidebar, SidebarContent } from "react-pro-sidebar";
import Slider from "@material-ui/core/Slider";
import "./filter.css";
import city from "../assets/data.json";
import "react-pro-sidebar/dist/css/styles.css";
// import {
//     HierarchicalMenuFilter,
//     RangeFilter,
//     NumericRefinementListFilter,
//     RefinementListFilter,
// } from "searchkit";

const marks = [
    {
        value: 0,
        label: "0 ",
    },
    {
        value: 1,
        label: "1 ",
    },
    {
        value: 2,
        label: "2 ",
    },
    {
        value: 3,
        label: "3 ",
    },
    {
        value: 4,
        label: "4 ",
    },

    {
        value: 5,
        label: "5 ",
    },
    {
        value: 6,
        label: "6 ",
    },
    {
        value: 7,
        label: "7 ",
    },
    {
        value: 8,
        label: "8 ",
    },

    {
        value: 9,
        label: "9 ",
    },
    {
        value: 10,
        label: "10 ",
    },
];

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            tags: [],
            suggestions: city,
        };
        // this.handleDelete = this.handleDelete.bind(this);
        // this.handleAddition = this.handleAddition.bind(this);
        // this.handleDrag = this.handleDrag.bind(this);
    }

    handleChange = (event, newValue) => {
        this.setState({
            value: newValue,
        });
    };

    reactTags = React.createRef();

    onDelete(i) {
        const tags = this.state.tags.slice(0);
        tags.splice(i, 1);
        this.setState({ tags });
    }

    onAddition(tag) {
        const tags = [].concat(this.state.tags, tag);
        this.setState({ tags });
    }

    // handleDelete(i) {
    //     const { tags } = this.state;
    //     this.setState({
    //         tags: tags.filter((tag, index) => index !== i),
    //     });
    // }

    // handleAddition(tag) {
    //     this.setState((state) => ({ tags: [...state.tags, tag] }));
    // }

    // handleDrag(tag, currPos, newPos) {
    //     const tags = [...this.state.tags];
    //     const newTags = tags.slice();

    //     newTags.splice(currPos, 1);
    //     newTags.splice(newPos, 0, tag);

    //     // re-render
    //     this.setState({ tags: newTags });
    // }

    render() {
        return (
            <ProSidebar>
                <SidebarContent>
                    Experience
                    <Slider
                        defaultValue={0}
                        aria-labelledby='discrete-slider'
                        step={1}
                        marks={marks}
                        min={0}
                        max={10}
                        onChange={this.handleChange}
                    />
                    Location Salary range
                    <Slider
                        defaultValue={0}
                        aria-labelledby='discrete-slider'
                        step={1}
                        marks={marks}
                        min={0}
                        max={10}
                        onChange={this.handleChange}
                    />
                    {/* <RangeFilter
                        min={0}
                        max={100}
                        field='metaScore'
                        id='metascore'
                        title='Metascore'
                        showHistogram={true}
                    />
                    <RangeFilter
                        min={0}
                        max={10}
                        field='imdbRating'
                        id='imdbRating'
                        title='IMDB Rating'
                        showHistogram={true}
                    />
                    <RefinementListFilter
                        id='actors'
                        title='Actors'
                        field='actors.raw'
                        operator='OR'
                        size={10}
                    />
                    <RefinementListFilter
                        translations={{
                            "facets.view_more": "View more writers",
                        }}
                        id='writers'
                        title='Writers'
                        field='writers.raw'
                        operator='OR'
                        size={10}
                    />
                    <RefinementListFilter
                        id='countries'
                        title='Countries'
                        field='countries.raw'
                        operator='OR'
                        size={10}
                    />
                    <NumericRefinementListFilter
                        id='runtimeMinutes'
                        title='Length'
                        field='runtimeMinutes'
                        options={[
                            { title: "All" },
                            { title: "up to 20", from: 0, to: 20 },
                            { title: "21 to 60", from: 21, to: 60 },
                            { title: "60 or more", from: 61, to: 1000 },
                        ]}
                    /> */}
                </SidebarContent>
                {/* <ReactTags
                    tags={tags}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag}
                /> */}
            </ProSidebar>
        );
    }
}

export default Sidebar;
