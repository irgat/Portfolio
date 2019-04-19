import React from 'react';
import DocumentTitle from 'react-document-title';
import SocialBar from './components/SocialBar';
import Separator from './components/Separator';
import ItemList from './components/ItemList';
import Contact from './components/Contact';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.data = {};

        this.state = {
            dataLoaded: false,
            clientId: -1,
            projectId: -1,
        };

        this.onClientSelected = this.onClientSelected.bind(this);
        this.onProjectSelected = this.onProjectSelected.bind(this);
    }

    onClientSelected(e) {
        let id = e.target.id;

        //update state
        this.setState(state => ({
            clientId: state.clientId !== id ? id : -1,
            projectId: -1,
        }));
    }

    onProjectSelected(e) {
        let id = e.target.id;

        //update state
        this.setState(state => ({
            projectId: state.projectId !== id ? id : -1,
        }));
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
            let clientData = (this.state.clientId !== -1) && (content.clients.filter(item => item.name === this.state.clientId)[0]);
            let projectData = (this.state.projectId !== -1) && (clientData.projects.filter(item => item.name === this.state.projectId)[0]);

            return (
                <DocumentTitle title={content.fullName}>
                    <div style={{ 'backgroundColor': 'green' }}>
                        <header>
                            <SocialBar items={content.social.header} />
                            <h1>{content.fullName}</h1>
                            <h2>{content.title}</h2>
                        </header>

                        <main>
                            <Separator label={labels.about} />

                            {/* about */}
                            <div dangerouslySetInnerHTML={{ __html: content.about }} />

                            {/* client list */}
                            <Separator label={labels.clients} />
                            <ItemList
                                items={content.clients}
                                selectedItem={this.state.clientId.toString()}
                                onClick={this.onClientSelected}
                            />

                            {/* project list */}
                            {clientData && <Separator label={labels.projects} />}
                            {clientData && <ItemList
                                items={clientData.projects}
                                selectedItem={this.state.projectId.toString()}
                                onClick={this.onProjectSelected}
                            />}

                            {/* popup */}
                            {projectData && <Separator label={projectData.name} />}
                            {projectData && <div>
                                {projectData.images.map(item => <img key={item} src={item} alt="" />)}
                            </div>}
                        </main>

                        <footer>
                            <Separator label={labels.contact} />
                            {(content.email && typeof content.email === 'string') && <Contact mailto={content.email} />}
                            {(content.tel && typeof content.tel === 'string') && <Contact tel={content.tel} />}
                            <SocialBar items={content.social.footer} />
                            <SocialBar items={content.social.donation} />
                        </footer>
                    </div>
                </DocumentTitle>
            );
        }
    }
}

export default App;
