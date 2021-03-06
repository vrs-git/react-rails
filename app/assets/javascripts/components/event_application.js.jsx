var EventApplication = createReactClass({
    getInitialState: function() {
        return { events: [] };
    },
    componentDidMount: function() {
        this.getDataFromApi();
    },
    getDataFromApi: function() {
        var self = this;
        $.ajax({
            url: '/api/events',
            success: function(data) {
                self.setState({ events: data });
            },
            error: function(xhr, status, error) {
                alert('Cannot get data from API: ', error);
            }
        });
    },
    render: function() {
        return(
            <div className="container">
                <div className="jumbotron">
                    <h1>ReactJS Tutorial</h1>
                    <p>by Vishal</p>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <EventTable events={this.state.events} />
                    </div>
                </div>
            </div>
        )
    }
});