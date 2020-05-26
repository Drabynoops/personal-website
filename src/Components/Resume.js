import React from 'react'

export default function Resume() {
    return (
        <div className="container" style={{ paddingTop: '4em'}}>
            <div className="row">
                <div className="col-6">
                    <h3>Download the full version here: </h3>
                </div>
                <div className="col-3">
                    <h2>
                        <a href="..\files\Bard.Brendan.Res.Software.WebDeveloper.pdf" download>PDF</a> 
                    </h2>
                </div>
                <div className="col-3">
                    <h2>
                        <a href="..\files\Bard.Brendan.Res.Software.WebDeveloper.docx" download>DOCX</a>
                    </h2>
                </div>
            </div>
        </div>
        

    )
}
