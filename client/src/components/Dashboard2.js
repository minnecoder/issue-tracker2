import React from 'react'
import styled from "styled-components"

export default function Dashboard2() {
    return (
        <Wrapper>
            <div className="quick-actions">
                <div className="qa-title">
                    <h2>Quick Actions</h2>
                </div>
                <button>Create New Ticket</button>
                <button>Create New Project</button>
                <button>View Projects</button>
                <button>Role Management</button>
                <button>Project User Management</button>
            </div>
            <div className="overview">
                <div className="overview-title">
                    <h2>Overview</h2>
                </div>
                <div className="cards">
                    <div className="top-cards">
                        <div className="top-card">
                            <img src="" alt="" />
                            <div className="tc-data">
                                <h3>Ticket Completion %</h3>
                                <p>20%</p>
                            </div>
                        </div>
                        <div className="top-card">
                            <img src="" alt="" />
                            <div className="tc-data">
                                <h3>Un-assigned Tickets</h3>
                                <p>0</p>
                            </div>
                        </div>
                        <div className="top-card">
                            <img src="" alt="" />
                            <div className="tc-data">
                                <h3>New Tickets In Last 7 Days</h3>
                                <p>10</p>
                            </div>
                        </div>
                        <div className="top-card">
                            <img src="" alt="" />
                            <div className="tc-data">
                                <h3>Tickets Completed in Last 7 Days</h3>
                                <p>10</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="status-cards">
                            <div className="status-card">
                                <img src="" alt="" />
                                <h3>Projects</h3>
                                <p>4</p>
                            </div>
                            <div className="status-card">
                                <img src="" alt="" />
                                <h3>Tickets</h3>
                                <p>33</p>
                            </div>
                            <div className="status-card">
                                <img src="" alt="" />
                                <h3>Users</h3>
                                <p>3</p>
                            </div>
                        </div>
                        <div className="graph"></div>
                        <div className="graph"></div>
                        <div className="graph"></div>
                    </div>
                </div>

            </div>
            <div className="tickets">
                <div className="tickets-title">
                    <h2>Tickets</h2>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
${'' /* width: calc(97vw - 130px); */}
width: 100%;

.top-cards{
    display: flex;
}

.top-card{
    border: solid 1px black;
}

.graph{
    border: solid 1px black;
}
`