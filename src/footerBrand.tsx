import * as React from "react";
import Radium from "radium";

// function isEmpty(obj) {
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key))
//             return false;
//     }
//     return true;    
// }

export default Radium(class FooterBrand extends React.Component {

    // shouldComponentUpdate(nextProps, nextState) {
    //     let propChange = this.props !== nextProps &&
    //         (Object.keys(nextProps).some(key => {
    //             return this.props[key] === undefined || this.props[key] === null || this.props[key] !== nextProps[key];
    //         }) ||
    //         Object.keys(this.props).some(key => {
    //             return nextProps[key] === undefined || nextProps[key] === null;
    //         }));
    //     let stateChange = this.state !== nextState &&
    //         (Object.keys(nextState).some(key => {
    //             if (key === '_radiumStyleState') {
    //                 return !isEmpty(nextState[key]);
    //             }
    //             return this.state[key] === undefined || this.state[key] === null || this.state[key] !== nextState[key];
    //         }) ||
    //         Object.keys(this.state).some(key => {
    //             return nextState[key] === undefined || nextState[key] === null;
    //         }));
    //     return propChange || stateChange;
    // }
    
    render() {
        const key = 'brand';
        const isHover = Radium.getState(this.state, key, ':hover');

        return <div key={key} style={style}>
            <div>
                Using&nbsp;
            </div>
            {isHover && 
                <div>
                    {` hover`}
                </div>
            }
        </div>;
    }
});

const style: any = {
    backgroundColor: '#ffff00',
    height: 80, 
    paddingTop: 10, 
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    ':hover': {}
};