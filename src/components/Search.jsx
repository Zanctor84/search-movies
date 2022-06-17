import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    };

    
    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };

    handleFilter = (e) => {
        this.setState(
            () => ({ type: e.target.dataset.type }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    };

    // searchResult = () => {
    //     return (!this.state.search) ? "hiddencont" : "visiblecont";
    // };
    searchResult = () => {
        if (!this.state.search) {
            return "hiddencont"
        }
    };

    render() {
        return (
            <div className='row'>
                <div className='input-field'>
                    <input
                        className='validate'
                        placeholder='Search'
                        type='search'
                        value={this.state.search}
                        onChange={(e) =>
                            this.setState({ search: e.target.value })
                        }
                        onKeyDown={this.handleKey}
                    />
                    <button
                        className='btn search-btn'
                        onClick={() =>
                            this.props.searchMovies(
                                this.state.search,
                                this.state.type
                            )
                        }
                    >
                        Search
                    </button>
                </div>
                <div className = {this.searchResult()}>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='all'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='movie'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'movie'}
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='series'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'series'}
                        />
                        <span>Series Only</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='game'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'game'}
                        />
                        <span>Games Only</span>
                    </label>
                </div>
            </div>
        );
    }
}

export { Search };
