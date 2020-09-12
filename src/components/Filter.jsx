import React from "react";

class Filter extends React.Component{
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    {this.props.count} products found.
                </div>
                <div className="col-md-4">
                    <label>
                        Order by
                        <select className="form-control" value={this.props.sort} onChange={this.props.handleChangeSort}>
                            <option>Select</option>
                            <option value="lowest">Lowest to Highest</option>
                            <option value="highest">Highest to Lowest</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-4">
                <label>
                        Filter size
                        <select className="form-control" value={this.props.size} onChange={this.props.handleChangeSize}>
                            <option value="">ALL</option>
                            <option value="x">XS</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>

                        </select>
                    </label>
                </div>
            </div>
        );
    }
}

export default Filter;