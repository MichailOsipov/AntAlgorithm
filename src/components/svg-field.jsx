import * as React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Circle, Line, Ant} from 'components/primitives';
import {
    setNodes,
    getNodes,
    getEdges
} from 'domains/graph';
import {getAnts} from 'domains/ants';

export const SvgField = connect(
    state => ({
        nodes: getNodes(state),
        edges: getEdges(state),
        ants: getAnts(state)
    }),
    dispatch => ({
        setNodes: nodes => dispatch(setNodes(nodes))
    })
)(
    class extends React.Component {
        static propTypes = {
            setNodes: PropTypes.func,
            nodes: PropTypes.arrayOf(PropTypes.shape({
                x: PropTypes.number,
                y: PropTypes.number,
                name: PropTypes.string
            })),
            edges: PropTypes.arrayOf(PropTypes.shape({
                from: PropTypes.shape({
                    x: PropTypes.number,
                    y: PropTypes.number
                }),
                to: PropTypes.shape({
                    x: PropTypes.number,
                    y: PropTypes.number
                })
            })),
            ants: PropTypes.arrayOf(PropTypes.shape({
                x: PropTypes.number,
                y: PropTypes.number,
                direction: PropTypes.string
            }))
        };

        addNode = (e) => {
            const {nativeEvent: {offsetX: x, offsetY: y}} = e;
            const {nodes} = this.props;
            this.props.setNodes([...nodes, {x, y, name: String(nodes.length)}]);
        }

        render() {
            return (
                <svg
                    height="100%"
                    width="100%"
                    onClick={this.addNode}
                >
                    {this.props.edges.map(({from, to}) => (
                        <Line
                            from={from}
                            to={to}
                            key={JSON.stringify({from, to})}
                        />
                    ))}
                    {this.props.nodes.map(({x, y, name}, i) => (
                        <Circle
                            x={x}
                            y={y}
                            label={String(i)}
                            key={`${x}-${y}-${name}`}
                        />
                    ))}
                    {this.props.ants.map(({x, y}) => (
                        <Ant
                            x={x}
                            y={y}
                        />
                    ))}
                </svg>
            );
        }
    }
);
