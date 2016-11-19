import * as React from 'react';

export interface ICompState {
    data: string;
}

export interface ICompProps {
    initialState: ICompState;
}

export class Comp extends React.Component<ICompProps,ICompState> {
    constructor(props: ICompProps, state: ICompState) {
        super(props, state);
        this.state = this.props.initialState;
    }

    render() {
        return (
            <div>
                <h1>some data: {this.state.data}</h1>
                <h2>and some text</h2>
            </div>
        );
    } 
}