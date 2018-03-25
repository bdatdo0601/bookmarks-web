import React, { Component } from "react";
import MainLayout from "../../layouts/MainLayout";

import ProfileInfoCard from "../../components/ProfileInfoCard";

const students = [
    {
        imageURL: "http://i0.kym-cdn.com/entries/icons/facebook/000/005/638/BirdsWithArms01.jpg",
        studentName: "Shawn",
    },
    {
        imageURL: "http://i0.kym-cdn.com/entries/icons/facebook/000/005/638/BirdsWithArms01.jpg",
        studentName: "Shawn",
    },
    {
        imageURL: "http://i0.kym-cdn.com/entries/icons/facebook/000/005/638/BirdsWithArms01.jpg",
        studentName: "Shawn",
    },
    {
        imageURL: "http://i0.kym-cdn.com/entries/icons/facebook/000/005/638/BirdsWithArms01.jpg",
        studentName: "Shawn",
    },
    {
        imageURL: "http://i0.kym-cdn.com/entries/icons/facebook/000/005/638/BirdsWithArms01.jpg",
        studentName: "Shawn",
    },
    {
        imageURL: "http://i0.kym-cdn.com/entries/icons/facebook/000/005/638/BirdsWithArms01.jpg",
        studentName: "Shawn",
    },
    {
        imageURL: "http://i0.kym-cdn.com/entries/icons/facebook/000/005/638/BirdsWithArms01.jpg",
        studentName: "Shawn",
    },
    {
        imageURL: "http://i0.kym-cdn.com/entries/icons/facebook/000/005/638/BirdsWithArms01.jpg",
        studentName: "Shawn",
    },
    {
        imageURL: "http://i0.kym-cdn.com/entries/icons/facebook/000/005/638/BirdsWithArms01.jpg",
        studentName: "Shawn",
    },
    {
        imageURL: "http://i0.kym-cdn.com/entries/icons/facebook/000/005/638/BirdsWithArms01.jpg",
        studentName: "Shawn",
    },
    {
        imageURL: "http://i0.kym-cdn.com/entries/icons/facebook/000/005/638/BirdsWithArms01.jpg",
        studentName: "Shawn",
    },
    {
        imageURL: "http://i0.kym-cdn.com/entries/icons/facebook/000/005/638/BirdsWithArms01.jpg",
        studentName: "Shawn",
    },
    {
        imageURL: "http://i0.kym-cdn.com/entries/icons/facebook/000/005/638/BirdsWithArms01.jpg",
        studentName: "Shawn",
    },
    {
        imageURL: "http://i0.kym-cdn.com/entries/icons/facebook/000/005/638/BirdsWithArms01.jpg",
        studentName: "Shawn",
    },
    {
        imageURL: "http://i0.kym-cdn.com/entries/icons/facebook/000/005/638/BirdsWithArms01.jpg",
        studentName: "Shawn",
    },
];

class Home extends Component {
    render() {
        return (
            <MainLayout>
                <div
                    style={{
                        overflowX: "auto",
                        overflowY: "hidden",
                        display: "flex",
                        width: "100%",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        float: "left",
                    }}
                >
                    {students.map(student => (
                        <ProfileInfoCard imageURL={student.imageURL} studentName={student.studentName} />
                    ))}
                </div>
            </MainLayout>
        );
    }
}

export default Home;
