import React from "react";
import 'semantic-ui-css/semantic.min.css';
import { Name, Height, Birth, Gender, Home } from "./StyledWidgets";


export default function InfoCard({info}) {
    return (
        <div className="info-card">
            <Name>
                {info.name}
            </Name>

            <Height>
                {info.height}
            </Height>

            <Birth>
                {info.birth_year}
            </Birth>

            <Gender>
                {info.gender}
            </Gender>

            <Home>
                {info.homeworld}
            </Home>

        </div>

    );
    
}