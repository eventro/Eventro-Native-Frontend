import React from 'react';
import { View, Header, Text, Left, Icon, Container, Button } from 'native-base';
// import Event from './Event';
import {Image, TouchableOpacity} from 'react-native'


export default class Events extends React.Component {
    constructor() {
        super();
        this.state = {
            events: [],
            activeEvent : {}
        }
    }
    componentDidMount() {

        const url = 'https://peaceful-anchorage-79063.herokuapp.com/events'
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // console.log("\n\n\n\n\n\n\n\n\n\n\n\n\ **********Events", data)
                this.setState({
                    events: data
                })
            })
            .catch(error => {
                console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n ",error)
            })
    }

    
    renderEvents() {
        return this.state.events.map((event, index) => {
            // console.log("event: ", event);
            return (
                
                <TouchableOpacity key={index} style={{borderRadius: 4, borderColor: "black"}} 
                onPress={() => { 
                    console.log("\n\n\n\n\n\n\n\n\n\n\ ", event);
                    this.props.setActiveEvent(event)   
                   this.props.toggleEvent()
                         
                }}> 
                <Image style= {{width: 100, height: 100}}source= {{uri: event.logo}} />
                <Text>{event.name}</Text>
                <Text>Start date : {event.start_date} </Text>
                <Text> End date : {event.end_date}</Text>
                
                
                </TouchableOpacity>
            )
        })
    }

    render() {
        return (
            <View>
                <Header>
                    <Text>Events </Text>
                </Header>
                {this.state.events ? this.renderEvents()
                    :<Text>No Event Found.</Text> }
            </View>
        )
    }
}

