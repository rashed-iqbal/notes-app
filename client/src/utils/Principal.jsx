import React, { createContext, useEffect, useState } from 'react'


const GetData = createContext();

class Principal extends React.Component {

    state = {
        rootUser:undefined
    }

    componentDidMount(){
        this.checkUser()
    }

    checkUser = () => {
        let user = {
            _id: "60c2ffef6fff8e1670e7bff0",
            name: "Rashed Iqbal",
            email: "rashediqbal2590@gmail.com",
            password: "$2a$10$3BVrB3fjoHa",
            notes: [
                {
                    title: "Rashed Iqbal",
                    desc: "rashediqbal@gmail.com",
                },
                {
                    title: "Rashed Iqbal",
                    desc: "rashediqbal@gmail.com",
                },
                {
                    title: "Rashed Iqbal",
                    desc: "rashediqbal@gmail.com",
                }
            ]
        }
        this.setState({rootUser:user});

        console.log(this.state.rootUser)
    }



    // //! ****** NOTES CRUD *******
    // //? Create Note
    // const createNote = (title,desc)=>{
    //     console.log(title,desc)
    // }
    // //?Update Note
    // const updateNote = (title,desc)=>{

    // }
    // //?Delete Note
    // const deleteNote = (id)=>{

    // }

    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }

}

export { Principal, GetData }
