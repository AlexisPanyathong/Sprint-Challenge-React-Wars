import React from "react";
import 'semantic-ui-css/semantic.min.css';



export default function InfoCard({info}) {
    return (
        <div className="info-card">
            <div>
            {info.name}
            </div>

        </div>

    );
    
}