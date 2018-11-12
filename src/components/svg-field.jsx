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
            nodes: PropTypes.object, // [nodeName]: {x, y}
            edges: PropTypes.arrayOf(PropTypes.shape({
                from: PropTypes.string,
                to: PropTypes.string,
                distance: PropTypes.number
            })),
            ants: PropTypes.arrayOf(PropTypes.shape({
                currNodeName: PropTypes.string,
                nextNodeName: PropTypes.string,
                distanceInEdgePassed: PropTypes.number,
                coordinates: PropTypes.shape({
                    x: PropTypes.number,
                    y: PropTypes.number
                }),
                antPath: PropTypes.arrayOf(PropTypes.string),
                complete: PropTypes.bool
            }))
        };

        addNode = (e) => {
            const {nativeEvent: {offsetX: x, offsetY: y}} = e;
            const {nodes} = this.props;
            this.props.setNodes({
                ...nodes,
                [String(Object.keys(nodes).length)]: {x, y}
            });
        }

        render() {
            const {nodes, edges} = this.props;
            return (
                <svg
                    height="100%"
                    width="100%"
                    onClick={this.addNode}
                >
                    {edges.map(({from, to}) => (
                        <Line
                            from={nodes[from]}
                            to={nodes[to]}
                            key={`${from}-${to}`}
                        />
                    ))}
                    {Object.keys(nodes).map((nodeName) => {
                        const {x, y} = nodes[nodeName];
                        return (
                            <Circle
                                x={x}
                                y={y}
                                label={nodeName}
                                key={`${x}-${y}-${nodeName}`}
                            />
                        );
                    })}
                    {this.props.ants.map(({coordinates}) => (
                        <Ant x={coordinates.x} y={coordinates.y} />
                    ))}
                </svg>
            );
        }
    }
);
