import React from 'react';
import DocumentTitle from 'react-document-title';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.data = {};

        this.state = {
            dataLoaded: false,
        };
    }

    componentWillMount() {
        //load JSON
        // setInterval(() => {
        fetch('data.json')
            .then(
                (response) => {
                    return response.json();
                }
            )
            .then(
                (json) => {
                    //update data and state
                    this.data = json;
                    this.setState({
                        dataLoaded: true,
                    });
                }
            );
        // }, 3000);
    }

    render() {
        if (!this.state.dataLoaded) {
            //preloader
            return (
                <h2>Loading...</h2>
            );
        } else {
            let labels = this.data.labels;
            let content = this.data.content;

            return (
                <DocumentTitle title={content.fullName}>
                    <div>
                        {/* social bar */}
                        <div>
                            <p>[Social Bar]</p>
                        </div>

                        {/* header */}
                        <div>
                            <p>{content.fullName}</p>
                            <p>{content.title}</p>
                        </div>

                        {/* seperator */}
                        <div>{labels.about}</div>

                        {/* about */}
                        <div dangerouslySetInnerHTML={{ __html: content.about }} />

                        {/* seperator */}
                        <div>{labels.clients}</div>

                        {/* client list */}
                        <div>
                            <p>[Client List]</p>
                        </div>

                        {/* seperator */}
                        <div>{labels.contact}</div>

                        {/* footer */}
                        <div>
                            {/* contact */}
                            <div>
                                <p>{content.email}</p>
                                <p>{content.mobile}</p>
                            </div>

                            {/* social bar */}
                            <div>
                                <p>[Social Bar]</p>
                            </div>

                            {/* donation bar */}
                            <div>
                                <p>[Donation Bar]</p>
                            </div>
                        </div>
                    </div>
                </DocumentTitle>
            );
        }
    }
}

export default App;
