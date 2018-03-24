import React, { Component } from "react";
import MainLayout from "../../layouts/MainLayout";

import ProfileInfoCard from "../../components/ProfileInfoCard";

class Home extends Component {
    render() {
        return (
            <MainLayout>
                <ProfileInfoCard
                    imageURL="http://i0.kym-cdn.com/entries/icons/facebook/000/005/638/BirdsWithArms01.jpg"
                    studentName="Shawn"
                />
            </MainLayout>
        );
    }
}

export default Home;
