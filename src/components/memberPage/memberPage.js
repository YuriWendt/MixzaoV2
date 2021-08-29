import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './memberPage-styles.scss';
import { MemberCard } from '../memberCard/memberCard'

const Member_API = "https://my-json-server.typicode.com/YuriWendt/Fakeapi/member"

const MemberPage = () => {

    const [members, setMembers] = useState([]);
    const [done, setDone] = useState(undefined);

    useEffect(async () => {
        getMembers(Member_API)
    }, [])

    const getMembers = (API) => {
        fetch(API)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setMembers(data)
                setDone(true)
            }, 5000);
    }

    return (

        <div className="bg-home">
            <header className="container-fluid bg-home-header">
                <a className="navbar-brand">
                    <h1>MEMBROS</h1>
                </a>

            </header>

            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <Table>
                                <div className="members">
                                    {members.map((member) => <MemberCard key={member.id} {...member} />)}
                                </div>
                            
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MemberPage;