import React, {useEffect, useState} from 'react';
import './Main.css';
import {getCandidats} from "../../api/api";
import {ICandidate} from "../../constants/interfaces";
import { popularityIndex} from "../../constants/consts";

function Main() {
    const [candidates, setCandidates] = useState<ICandidate[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCandidats().then();
            setCandidates(data);
        }
        fetchData().then();
    }, []);
    return (
        <div className="App">
            <h1>Список кандидатів</h1>
            <h4>Звіти:</h4>
            <div className="candidates">
                <h5 className="candidates__column">ID</h5>
                <h5 className="candidates__column">ПІБ</h5>
                <h5 className="candidates__column">Індекс популярності</h5>
                <h5 className="candidates__column">Місце народження</h5>
                <h5 className="candidates__column">Дата народження</h5>
            </div>
            {candidates?.map((candidat, index) =>
                <div className="candidates" key={index}>
                    <h5>{index + 1}</h5>
                    <h5>{candidat.surname} {candidat.name} {candidat.patronymic}</h5>
                    <h5>{popularityIndex[Number(candidat.popularity)]}</h5>
                    <h5>{candidat.birthPlace}</h5>
                    <h5>{candidat.day}.{candidat.month}.{candidat.year}</h5>
                </div>
            )
            }
        </div>
    )
}

export default Main;
