import React from "react";
import { Name, Height, Birth, Gender, Home, Card } from "./StyledWidgets";


export default function InfoCard({info}) {
    return (
        <div className="info-card">
            <Card>
                <Name>
                    {info.name}
                </Name>

                <Height>
                    Height:  {info.height}
                </Height>

                <Birth>
                    Birth Year:  {info.birth_year}
                </Birth>

                <Gender>
                    Gender:  {info.gender}
                </Gender>

                <Home>
                    Homeworld: {info.homeworld}
                </Home>
            </Card>
        </div>

    );
    
}